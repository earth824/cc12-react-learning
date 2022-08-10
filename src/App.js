import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // Lab 1
  const [isShow1, setIsShow1] = useState(true);

  // Lab 2
  const [isShow2, setIsShow2] = useState(true);

  // Lab 3
  const [isShow3, setIsShow3] = useState(true);
  return (
    <div>
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
    </div>
  );
}

export default App;
