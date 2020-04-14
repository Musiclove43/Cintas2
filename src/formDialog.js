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

export default function FormDialog() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('')
  const [first, setFirst] = useState('')
  const [last, setLast] = useState('')
  const [lastError, setLastError] = useState('')
  const [firstError, setFirstError] = useState('')
  const [passError, setPassError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [globalState, globalActions] = useGlobal();
  const [allErr, setErr] = useState('')
// const errors = []
  // useEffect(() => {
  //        setErr(firstError, passError, emailError, lastError);
  //        console.log(allErr)
  //  }, [
  //     firstError//here you could pass dependencies, or leave it empty to call this effect only on first render
  //  ]);
   // console.log(errors)

const validateForm = e => {
  e.preventDefault();
  // if (first==null || first==""){
  //   setFirstError("Name can't be blank");
  // } else {
  //   setFirstError("");
  // }
  if (last==null || last==""){
    setLastError("Name can't be blank");
  } else {
    setLastError("");
  }
  if(email.length<8){
    setEmailError("Password must be at least 8 characters long.");
  } else {
    setEmailError("");
  }
  if(pass.length<8){
    setPassError("Password must be at least 8 characters long.");
    // return false;
  }
  console.log(firstError)


// console.log("errors" + errors)
// errors.forEach(element => console.log(element));

// var err = 0;
//   for (var i = 0; i < errors.length; i++) {
// console.log(errors[i])
//     //Checks fields in the array making sure they are not empty.
//     // if(errors[i] != "") {
//     //     // err++;
//     //     // setErr(err++)
//     //     // console.log(generalErr)
//     //     // return false;
//     //       console.log(errors[i])
//     // }
// }
  handleSubmit()
}

  // const forceUpdate = useCallback(() => updateState({}), []);

  const handleSubmit = () => {
// console.log(errors)
// console.log(firstError)
//
// if (first==null || first==""){
//   setFirstError("Name can't be blank");
//
// }
// if (last==null || last==""){
//   setLastError("Name can't be blank");
//
// }
// if(email.length<8){
//   setEmailError("Password must be at least 8 characters long.");
//
// }
// if(pass.length<8){
//   setPassError("Password must be at least 8 characters long.");
//
// }

    const id = Math.floor(Math.random() * Date.now())
    const data = {id, email, last, first, pass}
    globalActions.addToUsers(data)
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
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
    <Grid container spacing={3}>
    <Grid item>

    <Typography style={{paddingTop: 5, paddingBottom: 20}} component="h2" variant="h5" >USERS</Typography>
    </Grid>
    <Grid item>
    <Button variant="outlined" color="primary" onClick={handleClickOpen}>
    ADD USER +
    </Button>
    </Grid>
    <Grid style={{marginLeft: "auto"}} item >
    <Button variant="outlined" color="primary" onClick={handleClickOpen}>
    Import CSV
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
    <DialogTitle id="alert-dialog-slide-title">{"CREATE USER"}</DialogTitle>
    <DialogContent>
    <DialogContentText id="alert-dialog-slide-description">
    Let Google help apps determine location. This means sending anonymous location data to
    Google, even when no apps are running.
    </DialogContentText>
    <form method="post" id="my-form-id" onSubmit={validateForm}  noValidate>

    <Grid container spacing={3}>
    <Grid item xs={6} md={6} lg={6}>

    <TextField
    autoFocus
    margin="dense"
    id="name"
    label="First Name"
    type="email"
    error={first === ""}
    helperText={first === "" ? 'Empty field!' : ' '}

    fullWidth
    value={first}
    onChange={e => setFirst(e.target.value)}
    />
    </Grid>
    <Grid item xs={6} md={6} lg={6}>
    <TextField
    autoFocus
    margin="dense"
    id="name"
    label="Last Name"
    error={lastError}
    helperText={lastError}

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
    error={emailError}
    helperText={emailError}

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
    error={passError}
    helperText={passError}

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
    <Button form="my-form-id" type="submit" color="primary">
    Create
    </Button>
    </DialogActions>
    </Dialog>
    </div>
  );
}
