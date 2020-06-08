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
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SubmitDiag() {

  const [manufacturer, setManu] = useState('');
  const [modelNumber, setModel] = useState('')
  const [serialNumber, setSerial] = useState('')
  const [assetNumber, setAsset] = useState('')

  const [ipAddress, setIP] = useState('')
  const [macAddress, setMac] = useState('')
  const [subnet, setSubnet] = useState('')
  const [contSoftware, setSoftware] = useState('')
  const [plcSoftware, setPLC] = useState('')
  const [gateway, setGateway] = useState('')
  const [department, setDepartment] = useState('')
  const [firmware, setFirm] = useState('')
  const [globalState, globalActions] = useGlobal();
  const [building, setBuilding] = useState('');
  const [installDate, setInstall] = useState('');
  const [floor, setFloor] = useState('')
  const [location, setLocation] = useState('')
  const [token, setToken] = useGlobal(
    state => state.token,

  );
  const [account, setAccount] = useGlobal(
    state => state.account,
  );


  const handleSubmit = e => {
    const id = Math.floor(Math.random() * Date.now())
    // const data = {id, email, last, first, badge}
    console.log("token" + account)
    fetch( "https://rest.garmentvendor.app/user" , {
      method: 'post',
      contentType: 'application/json',
      headers: {
        Authorization:
        'Bearer ' + globalState.token.Token,
      },
      body: JSON.stringify({
        "email": "",
        "firstName": "",
        "lastName": "",
        "accountNum": globalState.account,
        "department": "",
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
    // globalActions.addToUsers(data)
    handleClose()
    handleClear();
  };

  const handleClear = () => {
    // setEmail('');
    // setBadge('')
    // setFirst('')
    // setLast('')
  }

  function handleRadioChange(radio) {
    // const open = true
    // globalActions.openDialog(open);
    //  globalActions.editUsers(user);
    //  console.log(globalState);
  };

  const [open, setOpen] = useGlobal(
   state => state.open,
 );


  const handleClickOpen = () => {
    const open = false
    globalActions.openDialog(open);
  };

  const handleClose = () => {
    const open = false
    globalActions.openDialog(open)
  };

  return (
    <div>

    <Dialog
    open={open}
    TransitionComponent={Transition}
    keepMounted
    onClose={handleClose}
    aria-labelledby="alert-dialog-slide-title"
    aria-describedby="alert-dialog-slide-description"
    >
    <DialogTitle id="alert-dialog-slide-title">{"MACHINE CONFIGURTION"}</DialogTitle>
    <DialogContent>
    <ValidatorForm method="post" id="my-form-id" onSubmit={handleSubmit} noValidate>

    <Grid container spacing={3}>
    <Grid item xs={6} md={12} lg={12}>
    <FormControl component="fieldset">
    <RadioGroup row aria-label="position" name="position" defaultValue="dispenser" onChange={handleRadioChange} >
    <FormControlLabel value="dispenser" control={<Radio color="primary" />} label="Dispenser" />
    <FormControlLabel value="return" control={<Radio color="primary" />} label="Return" />
    </RadioGroup>
    </FormControl>
    </Grid>
    <Grid item xs={6} md={4} lg={4}>

    <TextValidator
    autoFocus
    margin="dense"
    id="name"
    label="Manufacturer"
    type="email"
    validators={['required']}
    errorMessages={['this field is required']}
    fullWidth
    value={manufacturer}
    onChange={e => setManu(e.target.value)}
    />
    </Grid>
    <Grid item xs={6} md={4} lg={4}>
    <TextValidator
    autoFocus
    margin="dense"
    id="name"
    label="Model Number"
    type="email"
    validators={['required']}
    errorMessages={['this field is required']}
    fullWidth
    value={modelNumber}
    onChange={e => setModel(e.target.value)}
    />
    </Grid>
    <Grid item xs={6} md={4} lg={4}>
    <TextValidator
    autoFocus
    margin="dense"
    id="name"
    label="Serial Number"
    type="email"
    fullWidth
    value={serialNumber}
    validators={['required']}
    errorMessages={['this field is required', 'email is not valid']}
    onChange={e => setSerial(e.target.value)}
    />
    </Grid>
    <Grid item xs={6} md={4} lg={4}>
    <TextValidator
    autoFocus
    margin="dense"
    id="name"
    label="Asset Number"
    type="email"
    fullWidth
    value={assetNumber}
    validators={['required']}
    errorMessages={['this field is required', 'email is not valid']}
    onChange={e => setAsset(e.target.value)}
    />
    </Grid>
    <Grid item xs={6} md={4} lg={4}>
    <TextValidator
    autoFocus
    margin="dense"
    id="IP Address"
    validators={['required']}
    errorMessages={['this field is required']}
    label="IP Address"
    type="email"
    fullWidth
    value={ipAddress}
    onChange={e => setIP(e.target.value)}
    />
    </Grid>
    <Grid item xs={6} md={4} lg={4}>
    <TextValidator
    autoFocus
    margin="dense"
    id="name"
    validators={['required']}
    errorMessages={['this field is required']}
    label="Mac Address"
    type="email"
    fullWidth
    value={macAddress}
    onChange={e => setMac(e.target.value)}
    />
    </Grid>
    <Grid item xs={6} md={4} lg={4}>
    <TextValidator
    autoFocus
    margin="dense"
    id="name"
    label="Subnet"
    type="email"
    fullWidth
    value={subnet}
    validators={['required']}
    errorMessages={['this field is required', 'email is not valid']}
    onChange={e => setSubnet(e.target.value)}
    />
    </Grid>
    <Grid item xs={6} md={4} lg={4}>
    <TextValidator
    autoFocus
    margin="dense"
    id="name"
    label="Gateway"
    type="email"
    fullWidth
    value={gateway}
    validators={['required']}
    errorMessages={['this field is required', 'email is not valid']}
    onChange={e => setGateway(e.target.value)}
    />
    </Grid>
    <Grid item xs={6} md={4} lg={4}>
    <TextValidator
    autoFocus
    margin="dense"
    id="name"
    validators={['required']}
    errorMessages={['this field is required']}
    label="PLC Software Version"
    type="email"
    fullWidth
    value={plcSoftware}
    onChange={e => setPLC(e.target.value)}
    />
    </Grid>
    <Grid item xs={6} md={4} lg={4}>
    <TextValidator
    autoFocus
    margin="dense"
    id="name"
    validators={['required']}
    errorMessages={['this field is required']}
    label="Controller Version"
    type="email"
    fullWidth
    value={contSoftware}
    onChange={e => setSoftware(e.target.value)}
    />
    </Grid>
    <Grid item xs={6} md={4} lg={4}>
    <TextValidator
    autoFocus
    margin="dense"
    id="name"
    label="Firmware Version"
    type="email"
    fullWidth
    value={firmware}
    validators={['required']}
    errorMessages={['this field is required', 'email is not valid']}
    onChange={e => setFirm(e.target.value)}
    />
    </Grid>
    <Grid item xs={6} md={4} lg={4}>
    <TextValidator
    autoFocus
    margin="dense"
    id="name"
    validators={['required']}
    errorMessages={['this field is required']}
    label="Building"
    type="email"
    fullWidth
    value={building}
    onChange={e => setBuilding(e.target.value)}
    />
    </Grid>
    <Grid item xs={6} md={4} lg={4}>
    <TextValidator
    autoFocus
    margin="dense"
    id="name"
    validators={['required']}
    errorMessages={['this field is required']}
    label="Department"
    type="email"
    fullWidth
    value={department}
    onChange={e => setDepartment(e.target.value)}
    />
    </Grid>
    <Grid item xs={6} md={4} lg={4}>
    <TextValidator
    autoFocus
    margin="dense"
    id="name"
    label="Floor"
    type="email"
    fullWidth
    value={floor}
    validators={['required']}
    errorMessages={['this field is required', 'email is not valid']}
    onChange={e => setFloor(e.target.value)}
    />
    </Grid>
    <Grid item xs={6} md={4} lg={4}>
    <TextValidator
    autoFocus
    margin="dense"
    id="name"
    validators={['required']}
    errorMessages={['this field is required']}
    label="Location"
    type="email"
    fullWidth
    value={location}
    onChange={e => setLocation(e.target.value)}
    />
    </Grid>

    <Grid item xs={6} md={4} lg={4}>
    <TextValidator
    autoFocus
    margin="dense"
    id="Install Date"
    validators={['required']}
    errorMessages={['this field is required']}
    label="Credits"
    type="email"
    fullWidth
    value={installDate}
    onChange={e => setInstall(e.target.value)}
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
    Update
    </Button>
    </DialogActions>
    </Dialog>
    </div>
  );
}
