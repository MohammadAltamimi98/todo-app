// import 'bootstrap/dist/css/bootstrap.min.css';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App.js';

// class Main extends React.Component {
//   render() {
//     return <App />;
//   }
// }

// const rootElement = document.getElementById('root');
// ReactDOM.render(<Main />, rootElement);

import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import AuthProvider from "./context/auth";

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById("root")
);
