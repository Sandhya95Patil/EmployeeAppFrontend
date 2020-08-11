import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
//import EditIcon from '@material-ui/icons/Edit';

const columns = [
  { id: 'name', label: 'FirstName', minWidth: 170 },
  { id: 'name', label: 'LastName', minWidth: 170 },
  { id: 'email', label: 'Email', minWidth: 100 },
  { id: 'salary', label: 'Salary', minWidth: 100 },
  { id: 'city', label: 'City', minWidth: 100 },

  { id: 'edit', label:'Edit', minWidth: 100},
  { id: 'delete', label:'Delete', minWidth: 100},
];


const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable() {
 const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
            
          </TableHead>
          <TableBody>
           
          </TableBody>
        </Table>
      </TableContainer> 
    </Paper>
  );
}