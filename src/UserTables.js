import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import FormDialog from './formDialog';
import EditDialog from './editDialog';
import { useState, useEffect, useCallback, updateState, useContext } from "react";
import globalHook from 'use-global-hook'
import useGlobal from "./store";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import MultilineTextFields from './navigation/searchBar'
import CircularIndeterminate from './Circular'


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#002C6F",
    color: theme.palette.common.white,
    height: "20px"
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

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  table: {
    minWidth: 700,
  },
});


export default function CustomizedTables(props) {
  const classes = useStyles();
  const [globalState, globalActions] = useGlobal();
  const [currency2, setCurrency] = useState();
  const [user, setUsers] = useState([]);
  // const [user, setUsers] = useGlobal(state => state.user);
  const [value3, setValue3] = useState('');
  const [reload, setReload] = useState(false);
  const [loading, setLoading] = useState(false);

  const [account, setAccount] = useGlobal(
    state => state.account,
  );

  // console.log(props)
  // useEffect(() => {
  //     // calculate margin. Let call it margin
  //     // setReload(reload);
  //  }, [reload]);

  useEffect(() => {
    console.log('counter updated');
    setUsers([]);
    callAPI()
    setReload(false)
  }, [props,reload])

  function callAPI () {
    setLoading(true)
    console.log("rerender")
    fetch( "https://rest.garmentvendor.app/users?accountNum=" + account, {
      method: 'get',
      contentType: 'application/json',
      headers: {
        Authorization:
        'Bearer ' + globalState.token.Token,
      },
    })
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result)
        setUsers([...result])
        setLoading(false)
      },
      (error) => {
        console.log(error)
      }
    )
  };


  function deleteUser(anything) {
    console.log(anything.email)
    fetch( "https://rest.garmentvendor.app/user?email=" + anything.email, {
      method: 'delete',
      contentType: 'application/json',
      headers: {
        Authorization:
        'Bearer ' + globalState.token.Token,
      },
    })
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result)
        callAPI()
        // setUsers([...result])
      },
      (error) => {
        console.log(error)
      }
    )
    // var index = user.indexOf(anything);
    // if (index > -1) {
    //   user.splice(index, 1);
    // }
    // globalActions.deleteUsers(user);
    // console.log(globalState)
  };


  function setReloads(value) {
    // selectUser.userEmail = newValue
    // const open = true
    console.log(reload)
    setReload(value)
    console.log(reload)

    // globalActions.openDialog(open);
    // console.log(selectUser)
    // globalActions.editUsers(user);
  };

  return (
    <div className={classes.root}>
    { loading ?
      <CircularIndeterminate/>
      :
      <React.Fragment>
      <FormDialog/>
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
      <TableHead>
      <TableRow>
      <StyledTableCell>Last Name</StyledTableCell>
      <StyledTableCell align="right">First Name</StyledTableCell>
      <StyledTableCell align="right">ID</StyledTableCell>
      <StyledTableCell align="right">Email Address</StyledTableCell>
      <StyledTableCell align="right">Department</StyledTableCell>
      <StyledTableCell align="right">Limit Group</StyledTableCell>
      <StyledTableCell align="right">Credit Limit</StyledTableCell>
      <StyledTableCell align="right">Date Added</StyledTableCell>
      <StyledTableCell align="right">Added By</StyledTableCell>
      <StyledTableCell align="right">Actions</StyledTableCell>

      </TableRow>
      </TableHead>
      <TableBody>
      {user.map((user, i) => (
        <StyledTableRow key={i}>
        <StyledTableCell component="th" scope="row">
        {user.lastName}
        </StyledTableCell>
        <StyledTableCell align="right">{user.firstName}</StyledTableCell>
        <StyledTableCell align="right">{user.lastName}</StyledTableCell>
        <StyledTableCell align="right">{user.email}</StyledTableCell>
        <StyledTableCell align="right">{user.firstName}</StyledTableCell>
        <StyledTableCell align="right">{user.firstName}</StyledTableCell>
        <StyledTableCell align="right">{user.firstName}</StyledTableCell>
        <StyledTableCell align="right">{user.firstName}</StyledTableCell>
        <StyledTableCell align="right">{user.first}</StyledTableCell>
        <StyledTableCell align="right">
        <div style={{marginLeft: "auto", display: "flex", flexDirection: "row"}}>
        <EditDialog selectUser={user} callBack={setReloads} />

        <IconButton
        edge="start"
        color="inherit"
        onClick={() => deleteUser(user)}
        >
        <HighlightOffIcon style={{ zIndex:2000}} />
        </IconButton>
        </div>
        </StyledTableCell>
        </StyledTableRow>
      ))}
      </TableBody>
      </Table>
      </TableContainer>
      </React.Fragment>
    }
    </div>
  );
}
