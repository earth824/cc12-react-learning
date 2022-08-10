import logo from './logo.svg';
import './App.css';

function App() {
  const handleChangeCheckbox = event => {
    // console.log(event);
    // console.log(event.target.name);
    // console.log(event.target.value);
    // console.log(event.target.checked ? 'tick' : 'untick');

    const { name, value, checked } = event.target;
    console.log(name);
    console.log(value);
    console.log(checked ? 'tick' : 'untick');
  };

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
      <label htmlFor="apple">Apple</label>
      <input
        type="checkbox"
        name="phoneBrand"
        value="Apple"
        id="apple"
        defaultChecked
        onChange={handleChangeCheckbox}
      />
      <label htmlFor="samsung">Samsung</label>
      <input
        type="checkbox"
        name="phoneBrand"
        value="Samsung"
        id="samsung"
        defaultChecked
        onChange={handleChangeCheckbox}
      />
      <label htmlFor="xiaomi">Xiaomi</label>
      <input
        type="checkbox"
        name="phoneBrand"
        value="Xiaomi"
        id="xiaomi"
        defaultChecked
        onChange={handleChangeCheckbox}
      />
      <h1>********** LAB 4 **********</h1>
      <a
        href="https://google.com"
        onClick={event => {
          event.preventDefault();
          if (window.confirm('Leave for https://google.com ?')) {
            window.location.href = 'https://google.com';
            // window.location.assign('https://google.com');
          }
        }}
      >
        Google
      </a>
    </div>
  );
}

export default App;
