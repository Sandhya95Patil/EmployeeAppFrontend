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
import { employeeLogin } from '../Service/Service';
import validator from 'validator';
import ErrorIcon from '@material-ui/icons/Error';

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      emailvalid: '',
      passwordvalid: '',
    }
  }

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

  onSubmitData = () => {
    if (validator.isEmpty(this.state.email)) {
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
        Email: this.state.email,
        Password: this.state.password,
      };
      console.log("data", data);
      employeeLogin(data).then(
        res => console.log(res),
        alert("Login Successful..!"),
        this.props.history.push({
          pathname: '/Dashboard',
        })
      )
        .catch(
          err => console.log(err),
        );
    }
  }

  render() {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={useStyles.paper} >
          <Div>
            <align-items>
            </align-items>
          </Div>
          <Typography component="h1" variant="h5" align="center">
            Sign in
              </Typography>
          <br></br>
          <br></br>
          <form className={useStyles.form} onSubmit={this.handleSubmit} noValidate>

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
            <br></br>
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
            <br></br>
            <Button
              fullWidth
              variant="contained"
              color="primary"
          //    onClick={this.onSubmitData}
              onClick={() => this.onSubmitData()}
            >
              Sign in
          </Button>
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