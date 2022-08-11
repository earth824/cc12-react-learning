const students = [
  'Bic', // <p key="0">Bic</p>
  'Job', // <p key="1">Job</p>
  'May',
  'Leelee',
  'First',
  'Best',
  'Way',
  'Kaew',
  'Mild',
  'Ohm', // <p key="9">Ohm</p>
  'Ohm' // <p key="10">Ohm</p>
];

const data = [
  { id: 1, name: 'Coke', price: 20, stock: 100, description: '' }, // <div><h3>Coke</h3><p>20</p></div>
  { id: 2, name: 'Pepsi', price: 19, stock: 100, description: '' }, // <div><h3>Pepsi</h3><p>19</p></div>
  ,
  { id: 3, name: 'Fanta', price: 18, stock: 100, description: 'description' } // <div><h3>Fanta</h3><p>18</p></div>
];

function App() {
  return (
    // <div style={{ textAlign: 'center' }}>
    //   <p>{students[0]}</p>
    //   <p>{students[1]}</p>
    //   <p>{students[2]}</p>
    //   {[<p>Bic</p>, <p>Job</p>, <p>May</p>]}
    // </div>

    // <div style={{ textAlign: 'center' }}>
    //   {students.map((item, index) => (
    //     <p key={index}>{item}</p>
    //   ))}
    // </div>

    <div style={{ textAlign: 'center' }}>
      {data.map(item => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.price}</p>
        </div>
      ))}

      {data.map(({ id, name, price }) => (
        <div key={id}>
          <h3>{name}</h3>
          <p>{price}</p>
        </div>
      ))}

      {/* <div>
        <h3>Coke</h3>
        <p>20</p>
      </div>
      <div>
        <h3>Pepsi</h3>
        <p>19</p>
      </div>
      <div>
        <h3>Fanta</h3>
        <p>18</p>
      </div> */}
    </div>
  );
}

export default App;
