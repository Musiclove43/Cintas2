import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useState, useEffect, useCallback, updateState, clearState} from "react";
import globalHook from 'use-global-hook';
import useGlobal from "./store";
import ReactDOM from "react-dom";
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';




const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const areEqual = (prevProps, nextProps) => {
  if (prevProps === nextProps) {
    return true;
  } else {
    return false;
  }
};
// var somename = "cathy"
export default React.memo(function EditDialog(props){
  // console.log(props.selectUSER)
  // useEffect(() => {
  //   // set the data
  //   // console.log(highlight)
  //      console.log('props updated');
  //      // props = {}
  //   // let x = JSON.parse(JSON.stringify(highlight));
  //   // // console.log(x.first )
  //   // setFirst(somename)
  //   // console.log("first" + first)
  //
  // }, [props]);
  // we want to pull in the global state
  // const areEqual = (prevProps, nextProps) => true;
  //
  // const MyComponent = React.memo(props => {
  //   console.log("Equal") /*whatever jsx you like */
  // }, areEqual);
  const [open, setOpen] = useState(false);
  const [globalState, globalActions] = useGlobal();
  // const [highlight, setHighlight] = useGlobal(
  //   state => state.highlighted
  // );
  // set the hook data
  const [propss, setProps] = useState('')
  const [select, setSelect] = useState('')

  const [email, setEmail] = useState(props.selectUser.email)
  const [pass, setPass] = useState(props.selectUser.email)
  const [last, setLast] = useState(props.selectUser.lastName)
  const [first, setFirst] = useState(props.selectUser.firstName)
  const [account, setAccount] = useGlobal(
    state => state.account,
  );
//   useEffect(() => {
//     // console.log('props Update');
//     console.log(props.selectUser)
// // console.log(props);
//   }, [props])
  // bring in the highlighted user
  // console.log(email)

  // const [open, setOpen] = useGlobal(
  //  state => state.open,
  // );

  // testing
  // const _setData = (key, value) => {
  //   console.log("check state:",data);
  //   setData({key: value});
  // };


  const [count, setCount] = useState(0);


  // var start = true;
  //
  //   if(start) {
  //     // set the data
  //     const _highlight = {
  //       first: highlight.first,
  //       last: highlight.last,
  //       email: highlight.email,
  //       pass: highlight.pass
  //     };
  //     if(_highlight.first !== undefined &&
  //      _highlight.last !== undefined &&
  //      _highlight.email !== undefined &&
  //      _highlight.pass !== undefined) {
  //      setData(_highlight);
  //   }
  //     // highlight
  //
  //     start = false;
  //   }
  // useEffect((nextProps, nextState) => {
  //   // if (props !== nextProps) {
  //     return false;
  //     console.log("this is happeneing")
  //
  // }, [props])





  // useEffect() {
  //   // set the data
  //   let dynamicData = {};
  //   Object.keys(data).forEach(key => {
  //     dynamicData[key] = highlight[key];
  //   });
  //   setData(dynamicData);
  //
  //   console.log(dynamicData);
  //   console.log(highlight);
  //   console.log(data);
  // }

  //
  //  function findUser() {
  //   if (open) {
  //     let dynamicData = {};
  //     Object.keys(data).forEach(key => {
  //       dynamicData[key] = highlight[key];
  //     });
  //     setData(dynamicData);
  //
  //     console.log(dynamicData);
  //     console.log(highlight);
  //     console.log(data);
  //
  //
  //   }
  // //   // setIsLoading(false)
  // }




  // console.log("highlight" + highlight.id)


  // const forceUpdate = useCallback(() => updateState({}), []);

  const handleSubmit = (e) => {
    // e.defaultValue()
      e.preventDefault();
    console.log(props.selectUser.email)
    console.log(email)
    console.log(globalState.token.Token)

    fetch( "https://rest.garmentvendor.app/user/" + props.selectUser.email, {
      method: 'Post',
      contentType: 'application/json',
      headers: {
        Authorization:
        'Bearer ' + globalState.token.Token,
      },
      body: JSON.stringify({
        "email": email,
        "firstName": first,
        "lastName": last,
        "accountNum": globalState.account,
        "department": "",
        "cardID": "000000045",
        "credits": 0,
        "withdrawLimit": 0,
        "expirationDate": "2123-01-01T00:00:00Z"
      })
    })

    .then(res => res.json())
    .then(
      (result) => {
        console.log(result)
      }
    )
    // console.log("email, last, first, pass")
    // const guid = Math.floor(Math.random() * Date.now())
    // const data = {email, last, first, pass}
    // globalActions.updateUsers(data)
    // console.log(globalState);
    // document.getElementById("my-form-id").reset();
    props.callBack(true);
    handleClear();

  };

  const handleClear = () => {
    setEmail('');
    setPass('')
    setFirst('')
    setLast('')
  }
  const handleClickOpen = () => {
    setOpen(true);
      console.log(props.selectUser, "SelectedUser")
        setSelect(props.selectUser)
        globalActions.editUsers(props.selectUser);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function onChange2(e){

    // setFirst('')
    // setFirst(e.target.value)
    console.log("here we are")
    // props.onChange(e)
    // setFirst(e.target.value)


    // console.log(globalState);
  };
  //
  // const handleClose = () => {
  //   // setOpen(false);
  //
  //   const open = false
  //   globalActions.openDialog(open)
  //   // console.log(globalState);
  // };

  return (
    <div>
    <Grid container spacing={3}>
    <Grid item>

    <IconButton
    edge="start"
    color="inherit"
    onClick={handleClickOpen}
    >
    <EditIcon style={{ zIndex:2000}} />
    </IconButton>
    </Grid>
    </Grid>
    <Dialog
    open={open}
    TransitionComponent={Transition}
    keepMounted
    onClose={handleClose}
    aria-labelledby="alert-dialog-slide-title"
    aria-describedby="alert-dialog-slide-description"
    >
    <DialogTitle id="alert-dialog-slide-title">{"EDIT USER"}</DialogTitle>
    <DialogContent>

    <form id="my-form" onSubmit={handleSubmit}  noValidate>

    <Grid container spacing={3}>
    <Grid item xs={6} md={6} lg={6}>

    <TextField
    autoFocus
    margin="dense"

    label="First Name"
    type="email"
    fullWidth
    // onChange={e => onChange2(e)}
    // value={props.selectUser.email}
    // inputProps={props.selectUser.userEmail.email}
    // onChange={props.editUser(e)}
    // inputRef={props.selectUser.email}

    // defaultValue='${props.selectUser.userEmail.email}'
    onChange={(e) => setFirst(e.target.value)}
    value={first}
    />
    </Grid>
    <Grid item xs={6} md={6} lg={6}>
    <TextField
    autoFocus
    margin="dense"

    label="Last Name"
    type="email"
    fullWidth
    onChange={(e) => setLast(e.target.value)}
    value={last}
    />
    </Grid>
    <Grid item xs={6} md={6} lg={6}>
    <TextField
    autoFocus
    margin="dense"

    label="Email Address"
    type="email"
    fullWidth
    // onChange={(e) => setEmail(e.target.value)}
    // value={email}
    onChange = {(e) => setEmail(e.target.value)}
    value = {email}

    />
    </Grid>
    <Grid item xs={6} md={6} lg={6}>
    <TextField
    autoFocus
    margin="dense"

    label="Telephone"
    type="email"
    fullWidth

    />
    </Grid>
    <Grid item xs={6} md={6} lg={6}>
    <TextField
    autoFocus
    margin="dense"

    label="Department"
    type="email"
    fullWidth

    />
    </Grid>


    </Grid>
    </form>
    </DialogContent>
    <DialogActions>
    <Button onClick={handleClose} color="primary">
    Cancel
    </Button>
    <Button onClick={handleClose} form="my-form" type="submit" color="primary">
    Update User
    </Button>
    </DialogActions>
    </Dialog>
    </div>
  );
}, areEqual)
