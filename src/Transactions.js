import React from 'react';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import SearchBar from 'material-ui-search-bar'
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import TextField from '@material-ui/core/TextField';
import ProtectedStore from './protected-store/index';
import { useState, useEffect, useCallback, updateState, useContext } from "react";
import globalHook from 'use-global-hook'
import useGlobal from "./store";

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {

      backgroundColor: "#002C6F",
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }),
)(TableRow);

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function Transactions(props) {
  const classes = useStyles();
  const [globalState, globalActions] = useGlobal();
  const [transactions, setTransactions] = useState([]);
  const [searchTerms, setSearchTerm] = React.useState("");
  const [searchResult, setSearch] = React.useState([]);
  const [account, setAccount] = useGlobal(
    state => state.account,
  );


  useEffect(() => {
    console.log('counter updated');
    // setUsers([]);
    callTransactions()
    // setReload(false)
  }, [props])

  function callTransactions () {
    // setLoading(true)
    console.log("rerender")
    fetch( "https://rest.garmentvendor.app/txDispense?accountNum=" + account, {
      method: 'get',
      contentType: 'application/json',
      headers: {
        Authorization:
        'Bearer ' + ProtectedStore.get('user').Token,
      },
    })
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result)
        setTransactions([...result])
        setSearch([...result])
        // setLoading(false)
      },
      (error) => {
        console.log(error)
      }
    )
  };


  const handleSearchChanges = e => {
  setSearchTerm(e.target.value);
  };
  React.useEffect(() => {
    // const keys = user.keys(user[0])
    // const results = user.filter(person =>
    //   person.firstName.toString().toLowerCase().includes(searchTerm)
    // );
    var results = transactions.filter(function(o) {
    return Object.keys(o).some(function(k) {
      return o[k].toString().toLowerCase().indexOf(searchTerms) != -1;
    })
  })
    setSearch(results);
    console.log(results)
  }, [searchTerms]);



  return (
      <React.Fragment>
    <TextField
    style={{marginTop: -10, marginBottom: 20}}
    label="Search"
    value={searchTerms}
    onChange={handleSearchChanges}
    InputProps={{
      endAdornment: (
        <InputAdornment>
        <IconButton>
        <SearchIcon />
        </IconButton>
        </InputAdornment>
      )
    }}
    />

    <TableContainer component={Paper}>

      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Timestamp</StyledTableCell>
            <StyledTableCell align="right">User</StyledTableCell>
            <StyledTableCell align="right">Outstanding Credits</StyledTableCell>
            <StyledTableCell align="right">Item Type</StyledTableCell>
            <StyledTableCell align="right">Size</StyledTableCell>
            <StyledTableCell align="right">Color</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {searchResult.map((transaction, i) => (
            <StyledTableRow key={i} >
              <StyledTableCell component="th" scope="row">
                {transaction.timestamp}
              </StyledTableCell>
              <StyledTableCell align="right">{transaction.firstName} {transaction.lastName}</StyledTableCell>
              <StyledTableCell align="right">{transaction.userID}</StyledTableCell>
              <StyledTableCell align="right">{transaction.itemSKU}</StyledTableCell>
              <StyledTableCell align="right">{transaction.userID}</StyledTableCell>
              <StyledTableCell align="right">Blue</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </React.Fragment>
  );
}
