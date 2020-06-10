

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
import FormDialog2 from './formDialog2';

import EditDialog from './editDialog';
import { useState, useEffect, useCallback, updateState, useContext } from "react";
import globalHook from 'use-global-hook'
import useGlobal from "./store";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import MultilineTextFields from './navigation/searchBar'
import CircularIndeterminate from './Circular'
import SearchBar from 'material-ui-search-bar'


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
  const [isPreviewShown, setPreviewShown] = useState(false);


  const [account, setAccount] = useGlobal(
    state => state.account,
  );

  // console.log(props)
  // useEffect(() => {
  //     // calculate margin. Let call it margin
  //     // setReload(reload);
  //  }, [reload]);

  const areEqual = (prevProps, nextProps) => true;

  const MyComponent = React.memo(props => {
    console.log("Equal") /*whatever jsx you like */
  }, areEqual);

  useEffect(() => {
    console.log('counter updated');
    // setUsers([]);
    callAPI()
    setReload(false)
  }, [props, reload])

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
  };



  function setReloads(value) {
    // const open = true
    console.log(reload)
    setReload(value)
    console.log(reload)
    setPreviewShown(false)


    // globalActions.openDialog(open);
    // console.log(selectUser)
    // globalActions.editUsers(user);
  };

  function onClose(value) {
    setPreviewShown(value)
  };

  function userChange(e) {
    selectUser.userEmail = e
    // const open = true
    console.log(selectUser)
    // setReload(value)
    // console.log(reload)

    // globalActions.openDialog(open);
    // console.log(selectUser)
    // globalActions.editUsers(user);
  };


  function onChange2(value) {
    // selectUser.userEmail = newValue
    // const open = true
    console.log("here we are")
    // setReload(value)
    // console.log(reload)

    // globalActions.openDialog(open);
    // console.log(selectUser)
    // globalActions.editUsers(user);
  };

  const selectUser = {
    userEmail: '',
    //   setReload: function() {
    //     setReload(true);
    //     console.log("updated!");
    // },
  }

  function editUser (newValue) {
    selectUser.userEmail = newValue
    console.log(selectUser)
    // const open = true
    // handleClickOpen(true)
    handlePreview()
    // console.log(selectUser)
    // // globalActions.openDialog(open);
    // console.log("selectUser")
    // globalActions.editUsers(newValue);
    // console.log(globalState.highlighted)
  };

  function handlePreview() {
      // e.preventDefault();

      setPreviewShown(true); // Here we change state
  }
  //   function editUser(user) {
  //     // selectUser.userEmail = newValue
  //     // const open = true
  //     // props.user
  // console.log("here" + user)
  //     // globalActions.openDialog(open);
  //     // console.log(selectUser)
  //     globalActions.activeEdit(user);
  //     console.log(globalState)
  //   };

  return (
    <div className={classes.root}>
    { loading ?
      <CircularIndeterminate/>
      :
      <React.Fragment>
      <FormDialog/>
       {isPreviewShown && <EditDialog selectUser={selectUser} callBack={setReloads} callbackClose={onClose} onChange={userChange} />}

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
        <StyledTableCell align="right">{user.userID}</StyledTableCell>
        <StyledTableCell align="right">{user.email}</StyledTableCell>
        <StyledTableCell align="right">Harvard Medical</StyledTableCell>
        <StyledTableCell align="right">Basic</StyledTableCell>
        <StyledTableCell align="right">{user.credits}</StyledTableCell>
        <StyledTableCell align="right">8/29/19</StyledTableCell>
        <StyledTableCell align="right">Mike H.</StyledTableCell>
        <StyledTableCell align="right">
        <div style={{display:"flex", justifyContent: "flex-end"}}>


        <IconButton
        edge="start"
        color="inherit"
        onClick={() => editUser(user)}
        >

        <EditIcon style={{ zIndex:2000}} />
        </IconButton>
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
