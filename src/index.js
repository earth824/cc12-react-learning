import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Welcome(props) {
  const initialWelcomeValue = 700;
  // dont do this
  // props.age = 20;
  console.log('Welcome Component');
  return (
    <h1>
      Welcome {props.name}, {props.age} years old.
    </h1>
  );
}

class WelcomeClass extends Component {
  render() {
    return <h1>Welcome Class</h1>;
  }
}

function Input() {
  return <input name="component-input" />;
}

class Position extends React.Component {
  render() {
    return <div>Position Component</div>;
  }
}

function MainContainer(props) {
  // never modify owns props
  // props.gender = 'Male'

  const birthDate = '2000-11-02';
  console.log(props.test); // Array
  console.log(props.obj); // Obj. for example props.obj.name, props.obj.surname
  console.log(props.boo); // true
  return (
    <div>
      {/* unidirectional data flow: data sent from Parent to Child */}
      <Welcome name="Bob" age="55" birthDate={birthDate} />
      <Position />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <MainContainer
      test={[1, 2, 5]}
      obj={{ name: 'Pete', surname: 'Jadon' }}
      boo
    />
    {/* <WelcomeClass /> */}
    {/* <Position /> */}
    {/* {Welcome({ name: 'John' })}  */}
    {/* <Welcome name="John" age="30" />{' '} */}
    {/* {Welcome({ name: 'John', age: '30' })} */}
    {/* <Welcome name="Mike" /> */}
    {/* <Welcome name="Peter" /> */}
    {/* <Welcome name="Sarah" /> */}
    {/* <Welcome name="Sam" /> */}
    {/* <Input /> */}
    {/* <input name="element-input" /> */}
    {/* {Welcome({ name: 'Mike' })}
    {Welcome({ name: 'Peter' })}
    {Welcome({ name: 'Sarah' })}
    {Welcome({ name: 'Sam' })} */}
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
