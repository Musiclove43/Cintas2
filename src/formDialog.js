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
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FormDialog() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [badge, setBadge] = useState('')
  const [first, setFirst] = useState('')
  const [last, setLast] = useState('')
  const [department, setDepartment] = useState('')
  const [phone, setPhone] = useState('')
  const [globalState, globalActions] = useGlobal();
  const [allErr, setErr] = useState('')
  const [token, setToken] = useGlobal(
    state => state.token,
    // state => state.highlighted,
    // actions => actions.addToCounterA
  );
  const [account, setAccount] = useGlobal(
    state => state.account,
  );

  // console.log(globalState)
  // const errors = []
  // useEffect(() => {
  //        setErr(firstError, passError, emailError, lastError);
  //        console.log(allErr)
  //  }, [
  //     firstError//here you could pass dependencies, or leave it empty to call this effect only on first render
  //  ]);
  // console.log(errors)

  const handleSubmit = e => {

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
    const data = {id, email, last, first, badge}
    console.log("token" + account)
    fetch( "https://rest.garmentvendor.app/user" , {
      method: 'post',
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
        "department": department,
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

    //   fetch( "https://rest.garmentvendor.app/users?location=testLocation" , {
    //     method: 'get',
    //     contentType: 'application/json',
    //     headers: {
    //       Authorization:
    //       'Bearer ' + token,
    //     },
    //
    //   })
    //
    //   .then(res => res.json())
    //   .then(
    //     (result) => {
    //
    //       console.log(result)
    //     },
    //   // Note: it's important to handle errors here
    //   // instead of a catch() block so that we don't swallow
    //   // exceptions from actual bugs in components.
    //   (error) => {
    //     console.log(error)
    //   }
    // )

    // fetch( "https://rest.garmentvendor.app/user?email=testuser13@email.com" , {
    //   method: 'delete',
    //   contentType: 'application/json',
    //   headers: {
    //     Authorization:
    //     'Bearer ' + token,
    //   },
    //
    // })

    //   fetch( "https://rest.garmentvendor.app/users?location=testLocation" , {
    //     method: 'get',
    //     contentType: 'application/json',
    //     headers: {
    //       Authorization:
    //       'Bearer ' + token,
    //     },
    //
    //   })
    //
    //   .then(res => res.json())
    //   .then(
    //     (result) => {
    //
    //       console.log(result)
    //     },
    //   // Note: it's important to handle errors here
    //   // instead of a catch() block so that we don't swallow
    //   // exceptions from actual bugs in components.
    //   (error) => {
    //     console.log(error)
    //   }
    // )

    //   .then(res => res.json())
    //   .then(
    //     (result) => {
    //
    //       console.log(result)
    //     },
    //   // Note: it's important to handle errors here
    //   // instead of a catch() block so that we don't swallow
    //   // exceptions from actual bugs in components.
    //   (error) => {
    //     console.log(error)
    //   }
    // )


    // console.log(this.state.items.result);

    globalActions.addToUsers(data)
    // console.log(globalState);
    // document.getElementById("my-form-id").reset();
    handleClose()
    handleClear();
  };

  const handleClear = () => {
    setEmail('');
    setBadge('')
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
    <ValidatorForm method="post" id="my-form-id" onSubmit={handleSubmit} noValidate>

    <Grid container spacing={3}>
    <Grid item xs={6} md={6} lg={6}>

    <TextValidator
    autoFocus
    margin="dense"
    id="name"
    label="First Name"
    type="text"
    validators={['required']}
    errorMessages={['this field is required']}
    fullWidth
    value={first}
    onChange={e => setFirst(e.target.value)}
    />
    </Grid>
    <Grid item xs={6} md={6} lg={6}>
    <TextValidator
    autoFocus
    margin="dense"
    id="name"
    label="Last Name"
    type="text"
    validators={['required']}
    errorMessages={['this field is required']}

    fullWidth
    value={last}
    onChange={e => setLast(e.target.value)}
    />
    </Grid>
    <Grid item xs={6} md={6} lg={6}>
    <TextValidator
    autoFocus
    margin="dense"
    id="name"
    label="Email Address"
    type="email"
    fullWidth
    value={email}
    validators={['required', 'isEmail']}
    errorMessages={['this field is required', 'email is not valid']}
    onChange={e => setEmail(e.target.value)}
    />
    </Grid>
    <Grid item xs={6} md={6} lg={6}>
    <TextValidator
    autoFocus
    margin="dense"
    id="name"
    validators={['required']}
    errorMessages={['this field is required']}
    label="Password"
    type="password"
    fullWidth
    value={badge}
    onChange={e => setBadge(e.target.value)}
    />
    </Grid>
    <Grid item xs={6} md={6} lg={6}>
    <TextValidator
    autoFocus
    margin="dense"
    id="name"
    label="Telephone Number"
    type="tel"
    fullWidth
    value={phone}
    validators={['required']}
    onChange={e => setPhone(e.target.value)}
    />
    </Grid>
    <Grid item xs={6} md={6} lg={6}>
    <TextValidator
    autoFocus
    margin="dense"
    id="name"
    validators={['required']}
    errorMessages={['this field is required']}
    label="Department"
    type="text"
    fullWidth
    value={department}
    onChange={e => setDepartment(e.target.value)}
    />
    </Grid>

    </Grid>
    </ValidatorForm>
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
