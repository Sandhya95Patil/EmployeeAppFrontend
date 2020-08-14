import React from 'react';
import './App.css';
import ShowAllEmp from './Pages/Employess';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Update from "./Components/UpdateEmployee";
import Add from "./Components/AddEmployee";
function App() {
  return (
    <div className="App">

      <Router>
        <Route path="/Dashboard" component={ShowAllEmp} />
        <Route path="/SignUp" component={Register} />
        <Route path="/Update" component={Update} />
        <Route path="/AddEmployee" component={Add} />
        <Route path="/" exact={true} component={Login} />
      </Router>
    </div>
  );
}

export default App;
