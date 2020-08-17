import React, { Component } from "react";
import { employeeAdd } from "../Service/Service";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import styled from 'styled-components';
import validator from 'validator';
import ErrorIcon from '@material-ui/icons/Error';
import Snackbar from './Snackbar';

export default class AddEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            salary: '',
            city: '',
            firstNamevalid: '',
            lastNamevalid: '',
            emailvalid: '',
            isActive: false,
        }
    }
    snackbarRef = React.createRef();

    onFirstNameChange = e => {
        if (validator.isEmpty(e.target.value)) {
            this.setState({ firstNamevalid: "First Name Is Requried" });

        } else {
            this.setState({ firstNamevalid: '' });
        }
        this.setState({
            firstName: e.target.value
        });
    };

    onLastNameChange = e => {
        if (validator.isEmpty(e.target.value)) {
            this.setState({ lastNamevalid: "Last Name Is Requried" });
        } else {
            this.setState({ lastNamevalid: '' });
        }
        this.setState({
            lastName: e.target.value
        });
    };
    onEmailChange = e => {
        if (validator.isEmpty(e.target.value)) {
            this.setState({ emailvalid: "Email Is required" });

        }
        else if (!validator.isEmail(e.target.value)) {
            this.setState({ emailvalid: "Enter valid Email-Id " });
        }
        else {
            this.setState({ emailvalid: '' });
        }

        this.setState({ email: e.target.value });

    };

    onSalaryChange = e => {
        this.setState({
            salary: e.target.value
        })
    };

    onCityChange = e => {
        this.setState({
            city: e.target.value
        })
    };

    onSubmitData = (e) => {
        if (validator.isEmpty(this.state.firstName)) {
            this.setState({ firstNamevalid: "First Name Is required" });
        }
        else if (validator.isEmpty(this.state.lastName)) {
            this.setState({ lastNamevalid: "Last Name Is required" });
        }
        else if (validator.isEmpty(this.state.email)) {
            this.setState({ emailvalid: "Email Is required" });

        }
        else if (!validator.isEmail(this.state.email)) {
            this.setState({ emailvalid: "Enter Valid Email-id " });
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
            const url = '';
            employeeAdd(url, data).then(
                res => console.log(res),
                this.snackbarRef.current.openSnackBar('Register Successfully.......'),
                this.props.history.push({
                    pathname:"/dashboard"
                })
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
                <Div>
                    <align-items></align-items>
                </Div>
                <Typography component="h1" variant="h5" align="center" style={{ color: 'darkblue' }}>
                    Add Employee
              </Typography>
                <br></br>
                <br></br>
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
                                display: 'flex',
                                paddingBottom: '5%',
                                paddingTop:'5%'
                            }}><ErrorIcon /><span style={{marginLeft:'10px'}}></span>{this.state.firstNamevalid}</div>) : (<span style={{ paddingBottom: '3%' }} />)
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
                                paddingBottom: '5%',
                                paddingTop:'5%'
                            }}><ErrorIcon /><span style={{marginLeft:'10px'}}></span>{this.state.lastNamevalid}</div>) : (<span style={{ paddingBottom: '3%' }} />)
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
                                paddingBottom: '5%',
                                paddingTop:'5%'
                            }}><ErrorIcon /><span style={{marginLeft:'10px'}}></span>{this.state.emailvalid}</div>) : (<span style={{ paddingBottom: '3%' }} />)
                            }
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField

                            onChange={this.onSalaryChange}
                            autoComplete="salary"
                            name="salary"
                            variant="outlined"
                            required
                            fullWidth
                            id="salary"
                            label="salary"
                            defaultValue={this.state.salary}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            onChange={this.onCityChange}
                            autoComplete="city"
                            name="city"
                            variant="outlined"
                            required
                            fullWidth
                            id="city"
                            label="City"
                            defaultValue={this.state.city}
                        />
                    </Grid>
                </Grid>
                <br></br>
                <Button style={{ width: 280, height: 50 }}
                    variant="contained"
                    color="primary"
                    onClick={() => this.onSubmitData()}>
                    Submit
                </Button>
                <Snackbar ref={this.snackbarRef} />
            </Container>
        );
    }
}

const Div = styled.div`
  margin-top: 30%;
  align-item: center;
`;

