import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
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

  onValueChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    console.log(this.props.location.customNameData);
    this.setState({ employee: this.props.location.customNameData });
  }

  onUpdate = () => {
    const data = {
      salary: this.state.salary,
      city: this.state.city
    };
    employeeUpdate(this.state.employee.id, data).then(
      res => console.log(res),
      alert("Update Successfull..!"),
      this.props.history.push({
        pathname: '/dashboard'
      })
    )
      .catch(
        err => console.log(err),
      );
  }

  render() {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Div>
          <align-items></align-items>
        </Div>
        <Typography component="h1" variant="h5" align="center" style={{ color: 'darkblue' }}>
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
              onChange={this.onValueChange}
              name="salary"
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
              onChange={this.onValueChange}
              name="city"
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
        <Box mt={5}>
        </Box>
      </Container>
    );
  }
}

const Div = styled.div`
  margin-top: 30%;
  align-item: center;
`;



