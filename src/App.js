import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';

// localStorage.setItem()
// localStorage.getItem()
// localStorage.removeItem()
// localStorage.clear()

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsLogged(true);
    }
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:8007/auth/login', {
        username,
        password
      });
      console.log(res.data);
      setIsLogged(true);
      localStorage.setItem('token', res.data.token);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClickShow = async () => {
    try {
      const res = await axios.get('http://localhost:8007/todos', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      {!isLogged ? (
        <form onSubmit={handleSubmit}>
          <input
            placeholder="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <input
            placeholder="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button>Login</button>
        </form>
      ) : (
        <>
          <h1>Welcome back {username}</h1>
          <button onClick={handleClickShow}>Show Todo</button>
        </>
      )}
    </div>
  );
}

export default App;
