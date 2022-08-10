import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>********** LAB 1 **********</h1>
      <input type="text" onChange={event => console.log(event.target.value)} />
      <h1>********** LAB 2 **********</h1>
      <select
        onChange={event => {
          console.dir(event.target);
          console.log(event.target.value);
        }}
      >
        <option value="LAO">Lao</option>
        <option value="MYANMAR">Myanmar</option>
        <option value="CAMBODIA">Cambodia</option>
        <option value="MALAYSIA">Malaysia</option>
        <option value="THAILAND">Thailand</option>
      </select>
      <h1>********** LAB 3 **********</h1>
      <label>Apple</label>
      <input type="checkbox" name="phoneBrand" value="Apple" />
    </div>
  );
}

export default App;
