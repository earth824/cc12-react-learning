import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    // check email password
    // success login redirect to '/'
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="email" />
      <input placeholder="password" />
      <button>Login</button>
    </form>
  );
}

export default LoginPage;
