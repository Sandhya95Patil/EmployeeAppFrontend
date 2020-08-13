import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import styled from 'styled-components';
import { employeeUpdate } from '../Service/Service';

export default class UpdateEmployee extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      salary: 0,
      city: '',
      employee: []

    }
  }
  componentDidMount() {
    console.log(this.props.location.customNameData);
    this.setState({ employee: this.props.location.customNameData });

  }
  onUpdate = () => {
    const data = {
      salary: this.state.salary,
      city: this.state.city
    };
    console.log("data", data);

    employeeUpdate(this.state.employee.id, data).then(
      res => console.log(res),
      alert("Update Successfull..!")
    )
      .catch(
        err => console.log(err),
      );
    console.log("update");
  }

  onSalaryChange = e => {
    this.setState({
      salary: e.target.value
    });
    console.log("city name", this.state.salary);

  };

  onCityChange = e => {
    this.setState({
      city: e.target.value
    });
    console.log("city name", this.state.city);
  };
  render() {
    console.log("render", this.state.employee.firstName);
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={useStyles.paper}>

          <Div>
            <align-items></align-items>
          </Div>

          <Typography component="h1" variant="h5" align="center">
            Update Employee
              </Typography>
          <br></br>
          <br></br>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                disabled
                style={{ margin: 8 }}
                defaultValue={this.state.employee.firstName}
                multiline
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                disabled
                style={{ margin: 8 }}
                defaultValue={this.state.employee.lastName}
                multiline
                fullWidth
                margin="normal"
              />
            </Grid>
            <br></br>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                disabled
                style={{ margin: 8 }}
                defaultValue={this.state.employee.email}
                multiline
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                style={{ margin: 8 }}
                defaultValue={this.state.employee.salary}
                multiline
                fullWidth
                margin="normal"
                onClick={this.onSalaryChange}
              />

            </Grid>
            <br></br>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                style={{ margin: 8 }}
                defaultValue={this.state.employee.city}
                multiline
                fullWidth
                onClick={this.onCityChange}
              />
            </Grid>
          </Grid>
          <br></br>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={this.onUpdate}
          >
            Submit
                </Button>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    );
  }
}

const Div = styled.div`
  margin-top: 20%;
  align-item: center;
`;

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        Employee Management
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    alignItems: 'center',
    justifyContent:'flex',
    backgroundColor: '#3f51b5',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

