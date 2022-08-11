import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const data = {
  bangkok: ['Ratchathewi', 'Pathumwan', 'Dusit'],
  nonthaburi: ['Pakkret', 'Bangyai']
};

function App() {
  // Lab 1
  const [isShow1, setIsShow1] = useState(true);

  // Lab 2
  const [isShow2, setIsShow2] = useState(true);

  // Lab 3
  const [isShow3, setIsShow3] = useState(true);

  // Lab 4
  const [input4, setInput4] = useState('');

  // Lab 5
  const [input5, setInput5] = useState('');
  const [error, setError] = useState('');

  // Lab 6
  const [district, setDistrict] = useState([]);

  const handleClickCheck = () => {
    if (input5 === '') {
      setError('Phone number is required.');
    } else if (isNaN(input5)) {
      setError('Phone number is invalid.');
    } else if (input5.length !== 10) {
      setError('Invalid length.');
    } else {
      alert('Your number is valid');
    }
  };

  // Lab 6

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>********** Lab 6 **********</h1>
      <label htmlFor="province">Province: </label>
      <select
        id="province"
        onChange={event => {
          console.log(event.target.value);
          setDistrict(data[event.target.value]);
        }}
      >
        <option value="bangkok">Bangkok</option>
        <option value="nonthaburi">Nonthaburi</option>
      </select>
      <br />
      <label htmlFor="district">District: </label>
      <select id="district">
        {district.map(item => (
          <option>{item}</option>
        ))}
      </select>
      {/* <p>{'string'}</p>
      <p>{10}</p>
      <p>{[<option>Pakkret</option>, <option>Bangyai</option>]}</p> */}

      <h1>********** Lab 1 **********</h1>
      {isShow1 && (
        <button onClick={() => setIsShow1(false)}>Click to hide me</button>
      )}

      <h1>********** Lab 2 **********</h1>
      <button onClick={() => setIsShow2(false)}>Click to hide text</button>
      {isShow2 && <h1>Text</h1>}

      <h1>********** Lab 3 **********</h1>
      <button onClick={() => setIsShow3(!isShow3)}>
        {isShow3 ? 'Hide' : 'Show'}
      </button>
      {isShow3 && <h1>Lorem Ipsom</h1>}

      <h1>********** Lab 4 **********</h1>
      <label htmlFor="number">Enter Dollar: </label>
      <input
        type="text"
        id="number"
        onChange={event => setInput4(event.target.value)}
      />
      <p>Convert to baht: {input4 * 30}</p>

      <h1>********** Lab 5 **********</h1>
      <input
        type="text"
        onChange={event => {
          setError('');
          setInput5(event.target.value);
        }}
      />
      <button onClick={handleClickCheck}>Check</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default App;
