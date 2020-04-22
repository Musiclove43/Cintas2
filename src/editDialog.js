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


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EditDialog() {
  const [globalState, globalActions] = useGlobal();
  const [user, setUser] = useGlobal(
   state => state.user,
 );

  const [open, setOpen] = useGlobal(
   state => state.open,
 );
  const [highlight, setHighlight] = useGlobal(
   state => state.highlighted
 //   console.log("handling open"),
 // setFirst(highlight.first)
 );
 const [first, setFirst] = useState('')

 useEffect(() => {
  // var user = highlight.first
  // setFirst(user)
findUser()
//   var string = toString(clonedObj.first)
// setHighlight(clonedObj.first)
// console.log(first)
    // code to run on component mount
  })
  // const [open, setOpen] = useGlobal(false);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('')
  const [last, setLast] = useState('')




//
 function findUser() {
  if (open) {
    var clonedOb = Object.assign(highlight);
    var clonedObj=JSON.parse(JSON.stringify(clonedOb))
    setFirst(clonedObj.first)
    console.log("thisis a cloned" + clonedObj.first)


  }
//   // setIsLoading(false)
}



//  const [state, setHighlight] = useGlobal(
//   state => state.open,
//
// );
// console.log("highlight" + highlight.id)


  // const forceUpdate = useCallback(() => updateState({}), []);

  const handleSubmit = e => {
    e.preventDefault();
    console.log("email, last, first, pass")
    // const guid = Math.floor(Math.random() * Date.now())
    const data = {email, last, first, pass}
    globalActions.updateUsers(data)
    // console.log(globalState);
    // document.getElementById("my-form-id").reset();
    handleClear();
  };

  const handleClear = () => {
      setEmail('');
      setPass('')
      setFirst('')
      setLast('')
    }


  const handleClickOpen = () => {
    const open = true

    globalActions.openDialog(open);


    // console.log(globalState);
  };

  const handleClose = () => {
    // setOpen(false);

    const open = false
    globalActions.openDialog(open)
    // console.log(globalState);
  };

  return (
    <div>
    <Grid container spacing={3}>
    <Grid item xs={1.25} md={1.25} lg={1.25}>
    <Button style={{display: 'none'}}variant="outlined" color="primary" onClick={handleClickOpen}>
    ADD USER +
    </Button>
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
    <DialogContentText id="alert-dialog-slide-description">
    Let Google help apps determine location. This means sending anonymous location data to
    Google, even when no apps are running.
    </DialogContentText>
    <form method="post" id="my-form" onSubmit={handleSubmit}  noValidate>

    <Grid container spacing={3}>
    <Grid item xs={6} md={6} lg={6}>

    <TextField
    autoFocus
    margin="dense"
    id="name"
    label="First Name"
    type="email"
    fullWidth
    onChange={e => setFirst(e.target.value)}
    value={first}
    // onChange={event => {
    //     const { value } = event.target;
    //     setFirst(event.target.value);
    //   }}

    />
    </Grid>
    <Grid item xs={6} md={6} lg={6}>
    <TextField
    autoFocus
    margin="dense"
    id="name"
    label="Last Name"
    type="email"
    fullWidth
    value={last}
    onChange={e => setLast(e.target.value)}
    />
    </Grid>
    <Grid item xs={6} md={6} lg={6}>
    <TextField
    autoFocus
    margin="dense"
    id="name"
    label="Email Address"
    type="email"
    fullWidth
    value={email}
    onChange={e => setEmail(e.target.value)}
    />
    </Grid>
    <Grid item xs={6} md={6} lg={6}>
    <TextField
    autoFocus
    margin="dense"
    id="name"
    label="Password"
    type="email"
    fullWidth
    value={pass}
    onChange={e => setPass(e.target.value)}
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
}
