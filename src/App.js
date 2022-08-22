import { useEffect, useState } from 'react';
import axios from 'axios';

// function App() {
//   const [toggle, setToggle] = useState(false);
//   const [count, setCount] = useState(0);
//   // Effect Hook
//   // useEffect(didUpdateFn, dependencyArray)
//   // didUpdateFn จะถูกเรียกใช้หลังจาก Component re-render ในกรณีที่ไม่ใส่ dependencyArray
//   console.log('App run: Before Effect');
//   // App run first จะ render jsx
//   // หลังจาก render เสร็จ didUpdateFn จะรัน
//   // useEffect(function () {
//   //   console.log('Effect Run');
//   // });

//   // Effect function run รอบแรกรอบเดียว กรณี dependencyArray = []
//   // useEffect(function () {
//   //   console.log('Effect Run');
//   // }, []);

//   useEffect(
//     function () {
//       console.log('Effect Run');
//     },
//     [toggle]
//   );

//   console.log('App run: After Effect');

//   return (
//     <div>
//       App
//       <button onClick={() => setToggle(!toggle)}>Toggle</button>
//       <button onClick={() => setCount(count + 1)}>Increase count</button>
//     </div>
//   );
// }

// function App() {
//   const [state, setState] = useState([]);

//   useEffect(function () {
//     axios
//       .get('https://jsonplaceholder.typicode.com/users')
//       .then(function (res) {
//         console.log(res.data);
//         setState(res.data);
//       });
//   }, []);

//   return (
//     <ul>
//       {state.map(item => (
//         <li key={item.id}>{item.name}</li>
//       ))}
//     </ul>
//   );
// }

// function App() {
//   const [editData, setEditData] = useState('');
//   return (
//     <div style={{ textAlign: 'center' }}>
//       <ul>
//         <li>
//           7-11<button onClick={() => setEditData('7-11')}>Edit</button>
//         </li>
//         <li>
//           Big C<button onClick={() => setEditData('Big C')}>Edit</button>
//         </li>
//         <li>
//           Tesco Lotus
//           <button onClick={() => setEditData('Tesco Lotus')}>Edit</button>
//         </li>
//       </ul>
//       {editData && <Input data={editData} />}
//     </div>
//   );
// }

// function Input(props) {
//   const [input, setInput] = useState(props.data);

//   useEffect(() => {
//     setInput(props.data);
//   }, [props.data]);

//   return (
//     <input type="text" value={input} onChange={e => setInput(e.target.value)} />
//   );
// }

// CLEANING EFFECT
function App() {
  const [toggle, setToggle] = useState(false);
  const [input, setInput] = useState('');

  useEffect(() => {
    console.log('effect body');
    const id = setTimeout(() => {
      // sent request to fetch data
      console.log('request sent');
    }, 3000);
    return () => clearTimeout(id);
  }, [input]);

  return (
    <div style={{ textAlign: 'center' }}>
      <input
        placeholder="Search Product"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button onClick={() => setToggle(!toggle)}>Toggle Counter</button>
      {toggle && <Counter />}
    </div>
  );
}

function Counter(props) {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    const intervalId = setInterval(() => console.log('count trigger'), 1000);
    return () => {
      // console.log('Counter is removed');
      clearInterval(intervalId);
    };
  }, [props.input]);

  return <div onClick={() => setToggle(!toggle)}>Counter</div>;
}

export default App;
