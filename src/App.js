import logo from './logo.svg';
// import './App.css';
import classes from './App.module.css';

// CSS styling
// 1. Inline CSS
// 2. External CSS
// 3. CSS Module
// 4. CSS in JS: external library => styled-component

const styles = {
  width: '400px',
  height: '300px',
  border: '1px solid red'
};

function App() {
  return (
    // 1. Inline CSS
    // <div style={styles}>
    //   <h1 style={{ color: 'green', fontSize: '100px' }}>Inline CSS</h1>
    // </div>

    // 2. External CSS
    // <div className="w-200 h-100 border-green-2 border-red-4">External CSS</div>

    // 3. CSS Module filename: [name].module.css
    // <div className={classes.test}></div>
    <div
      className={`${classes['w-100']} ${classes['h-100']} ${classes['border-yellow-4']}`}
    ></div>
  );
}

export default App;
