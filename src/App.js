import logo from './logo.svg';
import './App.css';

function App() {
  const handleClick = () => {
    console.log('CLickeddddddd');
  };

  const handleInputChange = event => {
    console.log('handle input change');
    console.log(event);
  };

  const handleClickBtn = (event, name) => {
    console.log(name);
  };

  // const handleClickAnotherBtn = name => event => {
  //   console.log(name);
  // };

  function handleClickAnotherBtn(name) {
    return function (event) {
      console.log(name);
      window.confirm('Are u ok');
    };
  }

  return (
    <div>
      <button
        // handleClickAnotherBtn(3) ====> (event) => {console.log(3)}
        // onClick={ (event) => { console.log(3) } }
        onClick={handleClickAnotherBtn(3)}
      >
        Click Three
      </button>

      <button
        // pass anonymous value to handling function #1
        onClick={event => {
          handleClickBtn(event, 1);
        }}
      >
        Click One
      </button>
      <button
        onClick={event => {
          handleClickBtn(event, 2);
        }}
      >
        Click Two
      </button>
      <form
        onSubmit={event => {
          event.preventDefault();
          // manual sent request to server
          console.log(event);
        }}
      >
        <input
          type="text"
          // เมื่อมีการเปลี่ยนค่าใน input browser จะ pass event object เข้ามาใน parameter ของ handler function
          onChange={function (event) {
            console.log(event);
            console.log(event.target.value);
          }}
        />

        <input
          type="text"
          // เมื่อมีการเปลี่ยนค่าใน input browser จะ execute handleInputChange(event)
          onChange={handleInputChange}
        />
        <button type="submit">Submit Form</button>
        <button type="button">Cancel</button>
      </form>
    </div>
    // <input
    //   type="text"
    //   onChange={() => {
    //     console.log('change input');
    //   }}
    // />
    // <input
    //   type="text"
    //   onChange={function () {
    //     console.log('input change function expression');
    //   }}
    // />
    // <button
    //   onClick={() => {
    //     console.log('Click Ano Button');
    //   }}
    // >
    //   Click Ano
    // </button>
    // <button onClick={handleClick}>Click</button>
  );
}

export default App;
