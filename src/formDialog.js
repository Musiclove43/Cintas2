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
import SearchBar from 'material-ui-search-bar'
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import LimitGroups from "./limitGroups"
import ImportCSV from "./importCSV"

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FormDialog() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [badge, setBadge] = useState('')
  const [first, setFirst] = useState('')
  const [last, setLast] = useState('')
  const [identification, setID] = useState('')
  const [credits, setCredit] = useState(0)
  const [department, setDepartment] = useState('')
  const [phone, setPhone] = useState('')
  const [globalState, globalActions] = useGlobal();
  const [allErr, setErr] = useState('');
  const [search, setSearch] = useState('')
  const [token, setToken] = useGlobal(
    state => state.token,

  );
  const [account, setAccount] = useGlobal(
    state => state.account,
  );


  const handleSubmit = e => {
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
        "credits": 12,
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
    globalActions.addToUsers(data)
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

    <Typography style={{paddingTop: 5, paddingBottom: 20}} component="h2" variant="h5">USERS</Typography>
    </Grid>
    <Grid item>
    <TextField
    style={{marginTop: -10}}
    label="Search"
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

    </Grid>
    <Grid style={{marginLeft: "auto"}} item >
    <Grid style={{marginLeft: "auto"}} item >
    <div style={{display: "flex", }}>
    <Button variant="contained"  color="secondary" onClick={handleClickOpen}>
    ADD USER +
    </Button>
    {/*    <ImportCSV/>
      <LimitGroups /> */}
    </div>
    </Grid>
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
    <ValidatorForm method="post" id="my-form-id" onSubmit={handleSubmit} noValidate>
    <Grid container spacing={3}>
    <Grid item xs={6} md={6} lg={6}>
    <TextValidator
    autoFocus
    margin="dense"
    label="First Name"
    type="email"
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
    label="Last Name"
    type="email"
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
    label="Telephone Number"
    type="email"
    fullWidth
    value={phone}
    validators={['required']}
    errorMessages={['this field is required', 'email is not valid']}
    onChange={e => setPhone(e.target.value)}
    />
    </Grid>
    <Grid item xs={6} md={6} lg={6}>
    <TextValidator
    autoFocus
    margin="dense"
    validators={['required']}
    errorMessages={['this field is required']}
    label="Department"
    type="email"
    fullWidth
    value={department}
    onChange={e => setDepartment(e.target.value)}
    />
    </Grid>
    <Grid item xs={6} md={6} lg={6}>
    <TextValidator
    autoFocus
    margin="dense"
    validators={['required']}
    errorMessages={['this field is required']}
    label="ID"
    type="email"
    fullWidth
    value={identification}
    onChange={e => setID(e.target.value)}
    />
    </Grid>
    <Grid item xs={6} md={6} lg={6}>
    <TextValidator
    autoFocus
    margin="dense"
    validators={['required']}
    errorMessages={['this field is required']}
    label="Credits"
    type="email"
    fullWidth
    value={credits}
    onChange={e => setCredit(e.target.value)}
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
