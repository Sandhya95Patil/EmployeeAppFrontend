import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import styled from 'styled-components';
import { employeeAdd } from '../Service/Service';
import validator from 'validator';
import ErrorIcon from '@material-ui/icons/Error';

export default class Register extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      salary: 0,
      city: '',
      firstNamevalid: '',
      lastNamevalid: '',
      emailvalid: '',
      passwordvalid: '',
      salaryvalid: '',
      cityvalid: ''
    }
  }


  onFirstNameChange = e => {

    if (validator.isEmpty(e.target.value)) {
      this.setState({ firstNamevalid: "first name is Requried" });

    } else {
      this.setState({ firstNamevalid: '' });
    }
    this.setState({ firstName: e.target.value });

  };

  onLastNameChange = e => {
    if (validator.isEmpty(e.target.value)) {
      this.setState({ lastNamevalid: "last name is Requried" });

    } else {
      this.setState({ lastNamevalid: '' });
    }
    this.setState({
      lastName: e.target.value
    });
    console.log(this.state.lastName)

  };

  onEmailChange = e => {
    if (validator.isEmpty(e.target.value)) {
      this.setState({ emailvalid: "email is required" });

    }
    else if (!validator.isEmail(e.target.value)) {
      this.setState({ emailvalid: "Enter valid email-id " });
    }
    else {
      this.setState({ emailvalid: '' });
    }

    this.setState({ email: e.target.value });

  };
  onPasswordChange = e => {
    if (validator.isEmpty(e.target.value)) {
      this.setState({ passwordvalid: "Password is Requried" });

    } else {
      this.setState({ passwordvalid: '' });
    }
    this.setState({
      password: e.target.value
    });
  };

  OnSalaryChange = e => {
    this.setState({
      salary: e.target.value
    });
    console.log(this.state.salary)
  };

  OnCityChange = e => {
    this.setState({
      city: e.target.value
    });
  };

  onSubmitData = () => {
    if (validator.isEmpty(this.state.firstName)) {
      this.setState({ firstNamevalid: "First name is required" });
    }
    else if (validator.isEmpty(this.state.lastName)) {
      this.setState({ lastNamevalid: "Last name is required" });
    }
    else if (validator.isEmpty(this.state.email)) {
      this.setState({ emailvalid: "Email is required" });

    }
    else if (!validator.isEmail(this.state.email)) {
      this.setState({ emailvalid: "Enter valid email-id " });
    }
    else if (validator.isEmpty(this.state.password)) {
      this.setState({ passwordvalid: "Password is required" });
    }
    else {
      const data = {
        FirstName: this.state.firstName,
        LastName: this.state.lastName,
        Email: this.state.email,
        Password: this.state.password,
        Salary: this.state.salary,
        City: this.state.city,
      };
      console.log("data", data);
      employeeAdd(data).then(
        res => console.log(res),
        alert("Employee Added Successful..!")
      )
        .catch(
          err => console.log(err),
        );
    }
  };

  render() {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={useStyles.paper}>
          <Div>
            <align-items></align-items>
          </Div>
          <Typography component="h1" variant="h5" align="center">
            Add Employee
        </Typography>
          <br></br>
          <br></br>
          <form className={useStyles.form} onSubmit={this.handleSubmit} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField

                  onChange={this.onFirstNameChange}
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  defaultValue={this.state.firstName}
                />
                <div>
                  {this.state.firstNamevalid !== '' ? (<div style={{
                    color: "red",
                    justifyContent: 'flex-start',
                    display: ' flex',
                    paddingBottom: '5%'
                  }}><ErrorIcon />{this.state.firstNamevalid}</div>) : (<span style={{ paddingBottom: '3%' }} />)
                  }
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField onChange={this.onLastNameChange}
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  defaultValue={this.state.lastName}
                />
                <div>
                  {this.state.lastNamevalid !== '' ? (<div style={{
                    color: "red",
                    justifyContent: 'flex-start',
                    display: ' flex',
                    paddingBottom: '5%'
                  }}><ErrorIcon />{this.state.lastNamevalid}</div>) : (<span style={{ paddingBottom: '3%' }} />)
                  }

                </div>
              </Grid>
              <br></br>
              <Grid item xs={12}>
                <TextField
                  onChange={this.onEmailChange}
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  defaultValue={this.state.email}

                />
                <div>
                  {this.state.emailvalid !== '' ? (<div style={{
                    color: "red",

                    justifyContent: 'flex-start',
                    display: ' flex',
                    paddingBottom: '5%'
                  }}><ErrorIcon />{this.state.emailvalid}</div>) : (<span style={{ paddingBottom: '3%' }} />)
                  }
                </div>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={this.onPasswordChange}
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <div>
                  {this.state.passwordvalid !== '' ? (<div style={{
                    color: "red",
                    justifyContent: 'flex-start',
                    display: ' flex',
                    paddingBottom: '5%'
                  }}><ErrorIcon />{this.state.passwordvalid}</div>) : (<span style={{ paddingBottom: '3%' }} />)
                  }
                </div>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField

                  onChange={this.OnSalaryChange}
                  autoComplete="salary"
                  name="salary"
                  variant="outlined"
                  required
                  fullWidth
                  id="salary"
                  label="Salary"
                  autoFocus
                  defaultValue={this.state.salary}
                />
                <div>
                  {this.state.salaryvalid !== '' ? (<div style={{
                    color: "red",
                    justifyContent: 'flex-start',
                    display: ' flex',
                    paddingBottom: '5%'
                  }}><ErrorIcon />{this.state.salaryvalid}</div>) : (<span style={{ paddingBottom: '3%' }} />)
                  }
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField onChange={this.OnCityChange}
                  variant="outlined"
                  required
                  fullWidth
                  id="city"
                  label="City"
                  name="city"
                  autoComplete="city"
                  defaultValue={this.state.city}
                />
                <div>
                  {this.state.cityvalid !== '' ? (<div style={{
                    color: "red",
                    justifyContent: 'flex-start',
                    display: ' flex',
                    paddingBottom: '5%'
                  }}><ErrorIcon />{this.state.cityvalid}</div>) : (<span style={{ paddingBottom: '3%' }} />)
                  }
                </div>
              </Grid>

              <Grid item xs={12} >
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="accept terms and conditions."
                />
              </Grid>
            </Grid>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              // className={useStyles.submit}
              onClick={this.onSubmitData}
            >
              Add
          </Button>
            <br></br>
            <Grid container justify="flex-end">
              <Grid item>
                
              </Grid>
            </Grid>
          </form>
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