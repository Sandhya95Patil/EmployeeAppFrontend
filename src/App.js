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
        <Route path="/" exact={true} component={Login} />
        <Route path="/signUp" component={Register} />
        <Route path="/dashboard" component={ShowAllEmp} />
        <Route path="/addEmployee" component={Add} />
        <Route path="/update" component={Update} />
      </Router>
    </div>
  );
}

export default App;
