import { useState } from 'react';

function App() {
  const [isLogged, setIsLogged] = useState(false);
  // if isLogged is true: render Welcome back, Else: render Go to Login Page
  // 1. Store jsx in a variable
  // const message = isLogged ? <h1>Welcome back</h1> : <h1>Go to Login Page</h1>;
  // return <div>{message}</div>;

  // 2. && Operator ( null && <h1>Test</h1> ===> null) (true && <h1>Test</h1> ===> <h1>Test</h1>)
  // return (
  //   <div>
  //     {isLogged && <h1>Welcome back</h1>}
  //     {!isLogged && <h1>Go to Login Page</h1>}
  //   </div>
  // );

  // 3. Ternary operator
  return (
    <div>{isLogged ? <h1>Welcome back</h1> : <h1>Go to Login Page</h1>}</div>
  );
}

export default App;
