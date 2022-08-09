import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const nickname = 'John';
let message;
if (nickname === 'John') {
  message = <p>He is a boy.</p>;
} else {
  message = <p>she is a girl</p>;
}

function greeting(name) {
  return <p>Hello {name}</p>;
}

const classesH1 = 'main-header padding-top-3px';

const element = (
  <div id="main" className="main">
    <h1 className={classesH1}>
      Hello JSX from {nickname}, {20 + 35 + 'years old.'}
    </h1>
    {message}
    {greeting('Michael')}
    <label htmlFor="username">Username: </label>
    <input type="text" id="username" />
    <input type="text" />
    {/* String, Number, Array of JSX, String, Number */}
    <h1>{'Render String'}</h1>
    <h1>{23456}</h1>
    <h1>
      {[<p>JSX Array Element</p>, 'String Array Element *****', 9012345678]}
    </h1>
    {/* Boolean, null, undefined are ignored */}
    <h1>
      {true} {false}
    </h1>
    <h1>{null}</h1>
    <h1>{undefined}</h1>
    {/* render Object => error */}
    {/* <pre>{{ firstName: 'John', age: 30 }}</pre> */}
    {/* insert expression into attributes  */}
    <div className={{ a: 1 }}></div>
  </div>
); // React.createElement('div', {id: 'main', className: 'main'}, ...)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
