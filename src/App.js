import './App.css';
import { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [select, setSelect] = useState('3');
  console.log(select);
  return (
    <div className="App">
      <select onChange={event => setSelect(event.target.value)} value={select}>
        <option value="1">Bangkok</option>
        <option value="2">Nonthaburi</option>
        <option value="3">Nan</option>
      </select>
      <input
        type="text"
        value={input}
        onChange={event => setInput(event.target.value)}
      />
      <input type="file" onChange={event => console.log(event.target.files)} />
      <textarea rows="10"></textarea>
    </div>
  );
}

export default App;
