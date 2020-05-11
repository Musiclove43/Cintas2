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


// export function useForceUpdate() {
//   const [, setTick] = useState(0);
//   const update = useCallback(() => {
//     setTick(tick => tick + 1);
//   }, [])
//   return update;
// }
// var count = 0;

export default function CustomizedTables( props) {
  const classes = useStyles();
  const [globalState, globalActions] = useGlobal();
  const [currency2, setCurrency] = useState();
  const [tick, setTick] = useState(0);

  // const useForceUpdate = () => useState()[1];
    const [value3, setValue3] = useState('');
    console.log(props)
    console.log(value3)
  // const [profileState, setProfileState] = useState({});
  // console.log(profileState, props)
// console.log("currency", currency2)
// console.log(props)
  const [user, setUsers] = useState(
[]

    // state => state.highlighted,
    // actions => actions.addToCounterA
  );

  const [account, setAccount] = useGlobal(
    state => state.account,

    // state => state.highlighted,
    // actions => actions.addToCounterA
  );
  // const [state, actions] = useGlobal(account);

  // someMethod() {
  //     // Force a render without state change...
  //     this.forceUpdate();
//   // }
// const { account } = globalState;
// const currency2 = MultilineTextFields(useState(currency));
// console.log(currency2)

// const [tick, setTick] = useState(0);
// console.log("account" + account)
// console.log(globalState)
useEffect( () => {
       console.log('counter updated');
         setUsers([]);
       callAPI()
       console.log(tick)
  }, [props])

function callAPI () {
console.log("rerender")
      // setProfileState(props);

  // longResolve().then(() => {
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
      // result.forEach(function(entry) {
      //   globalActions.addToUsers(entry)
      //   console.log(globalState);
      //
      // });
      // setUsers([]);
        setUsers([...result])

      // setCurrencies([...result.accounts])
      // console.log("currency array" + currencies)
      // setToken(result.Token)
    },
    (error) => {
      console.log(error)
    }
  )

  // })
};

// function useForceUpdate() {
//   const update = useCallback(() => {
//     setTick(tick => tick + 1);
//   }, [])
//   return update;
// }

  // const forceUpdate = useForceUpdate();
  // const forceUpdate = useForceUpdate();

// const observe = () => {
// count++
// //
// // count = count + n
// console.log(count)
// // if (count > 2) {
//  // count = 0
//   // console.log("happened")
//       // forceUpdate();
//
//   // count = 0
// }
// };

  //
  // const [account, setAccount] = useGlobal(
  //  state => state.account,
  // );

//  const useForceUpdate (() => {
// console.log("this is an acount")
// })


// const [accountState, setaccountState] = React.useState(account);
  // console.log(array)


 // function useForceUpdate() {
 //
 //    // const update = useCallback(() => {
 //      setaccountState(account);
 //    // }, [])
 //    // return update;
 //  }
 //

  // if (account ) {
  //   setTick(tick + 1); // force re-render
  //   console.log(account)
  // }



// setaccountState(account)


  // const forceUpdate = useCallback(if(account !== accountState) => updateState({}), []);

  // console.log("this is a state" + globalState);
  function deleteUser (user) {
    console.log(user)
    globalActions.deleteUsers(user);
    console.log(globalState)
  };

  function editUser (user) {
    const open = true
    globalActions.openDialog(open);
    globalActions.editUsers(user);
    // console.log(globalState);

  };




  return (
    <div className={classes.root}>
    <FormDialog/>
    <EditDialog/>
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

      </StyledTableCell>
      </StyledTableRow>
    ))}
    </TableBody>
    </Table>
    </TableContainer>
    </div>
  );
}
