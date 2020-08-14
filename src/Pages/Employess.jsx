import React, { Component } from 'react';
import { getAllEmployee } from '../Service/Service';
import Button from '@material-ui/core/Button';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios';


class ShowAllEmp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dialogOpen: false,

      employees: [],

    };
  }

  componentDidMount() {
    console.log("before");
    this.deleteEmployee();

    getAllEmployee().then(Response => {
      console.log("==============>", Response);
      this.setState({ employees: Response.data.data })

    });

  }

  OnAdd=()=>{
    this.props.history.push({
      pathname: '/AddEmployee',
    });
  }

  handleClick = (row) => {
    console.log(row);
    this.props.history.push({
      pathname: '/Update',
      customNameData: row,
    });
  }
  deleteEmployee(id) {
    axios.delete(`https://localhost:44382/api/Employee/${id}`)
      .then(res => {
        console.log(res);
        alert("Record Deleted Successfully..!")
        window.location.reload();
        console.log(res.data);
      })
      .catch(
        err => console.log(err),
      );
  }

  render() {
    return (
      <div>
        <div style={{marginLeft:'15%'}}>
        <Button variant="contained" color="primary" style={{marginTop:'7%', marginRight:'20%'}} onClick={() => this.OnAdd()}><PersonAddIcon />AddEmployee</Button>
        </div>
        <TableContainer component={Paper}>
          <h1 style={{ textAlign: 'center' }}>Employee Management System</h1>
          <Table
            className={useStyles.table} aria-label="customized table" style={{ width: 1200, marginLeft:'10%' }}>
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Employee Id</StyledTableCell>
                <StyledTableCell align="center">First Name</StyledTableCell>
                <StyledTableCell align="center">Last Name</StyledTableCell>
                <StyledTableCell align="center">Email</StyledTableCell>
                <StyledTableCell align="center">Edit</StyledTableCell>
                <StyledTableCell align="center">Delete</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.employees.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row" align="center">
                    {row.id}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.firstName}</StyledTableCell>
                  <StyledTableCell align="center">{row.lastName}</StyledTableCell>
                  <StyledTableCell align="center">{row.email}</StyledTableCell>
                  <StyledTableCell align="center">{
                    <Button variant="contained" color="primary" onClick={() => this.handleClick(row)}>
                      <EditIcon > </EditIcon>
                    </Button>}
                  </StyledTableCell>
                  <StyledTableCell align="center">{
                    <Button style={{ color: '#fff', backgroundColor: '#3f51b5', textTransform: 'none' }}
                      onClick={() => this.deleteEmployee(row.id)}
                      variant="contained"
                      startIcon={<DeleteIcon />}
                    >
                   </Button>
                  }
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#3f51b5',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


const useStyles = makeStyles((theme) => ({
  display: 'flex',
  table: {

    minWidth: 700,
  },
  margin: {
    margin: theme.spacing(1),
  },
}));


export default ShowAllEmp;