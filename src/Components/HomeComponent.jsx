import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import MyTable from './MyTable.jsx';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

class HomeComponent extends Component{
    render(){
        return <div>
            <Button variant="contained" color="primary" style={{marginTop:'7%'}}>
            <PersonAddIcon />  Add Employee 
            </Button>
            <h1>No Records Found!!</h1>
            <MyTable />
        </div>
    }
}

export default HomeComponent;