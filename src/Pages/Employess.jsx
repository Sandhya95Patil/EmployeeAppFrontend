import React, { Component } from 'react';
import { getAllEmployee, employeeDelete } from '../Service/Service';
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
import Snackbar  from "../Components/Snackbar";
class ShowAllEmp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      isActive: false,
    };
  }
  snackbarRef = React.createRef();

  componentDidMount() {

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

  deleteEmployee=(id)=>{
    employeeDelete(id).then(
    response => console.log(response), 
    this.snackbarRef.current.openSnackBar('Employee Delete Successfully.......'),
    )
    .catch(error=>console.log(error))
  }

  render() {
    return (
      <div>  
        <TableContainer component={Paper}>
          <h1 style={{ textAlign: 'center', color:'darkblue'}}>Employee Management System</h1>
          <br></br>
          <div>
    <Button variant="contained" color="primary" style={{marginLeft:'-50%'}} onClick={() => this.OnAdd()}><PersonAddIcon /><span style={{paddingLeft: '10px'}}></span>Add Employee</Button>
        </div>
          <br></br>
          <Table
            className={useStyles.table} aria-label="customized table" style={{ width: 1200, marginLeft:'10%' }}>
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Employee Id</StyledTableCell>
                <StyledTableCell align="center">First Name</StyledTableCell>
                <StyledTableCell align="center">Last Name</StyledTableCell>
                <StyledTableCell align="center">Email</StyledTableCell>
                <StyledTableCell align="center">Salary</StyledTableCell>
                <StyledTableCell align="center">City</StyledTableCell>
                <StyledTableCell align="center">Edit</StyledTableCell>
                <StyledTableCell align="center">Delete</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.employees.map((row) => (
                <TableRow key={row.name}>
                  <StyledTableCell component="th" scope="row" align="center">
                    {row.id}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.firstName}</StyledTableCell>
                  <StyledTableCell align="center">{row.lastName}</StyledTableCell>
                  <StyledTableCell align="center">{row.email}</StyledTableCell>
                  <StyledTableCell align="center">{row.salary}</StyledTableCell>
                  <StyledTableCell align="center">{row.city}</StyledTableCell>
                  <StyledTableCell align="center">{
                    <Button onClick={() => this.handleClick(row)}>
                      <EditIcon > </EditIcon>
                    </Button>}
                  </StyledTableCell>
                  <StyledTableCell align="center">{
                    <Button 
                      onClick={() => this.deleteEmployee(row.id)}
                      startIcon={<DeleteIcon />}
                    >
                   </Button>
                  }
                  </StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Snackbar ref={this.snackbarRef} />

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