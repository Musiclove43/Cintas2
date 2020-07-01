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
import ProtectedStore from './protected-store/index';
//
// import DateFnsUtils from "@date-io/date-fns";
// import { MuiPickersUtilsProvider, KeyboardDatePicker} from "@material-ui/pickers";

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
  const [machineDesc, setmachineDesc] = useState('')
  const [cellNum, setcellNum] = useState('')

  const [token, setToken] = useGlobal(
    state => state.token,
  );
  const [account, setAccount] = useGlobal(
    state => state.account,
  );
  const [selectedDate, setSelectedDate] = React.useState(
  '2014-08-18T21:11:54'
  )

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleSubmit = e => {
    const id = Math.floor(Math.random() * Date.now())
    console.log(machineDesc)
    console.log("token" + account)
    fetch( "https://rest.garmentvendor.app/station" , {
      method: 'post',
      contentType: 'application/json',
      headers: {
        Authorization:
        'Bearer ' + ProtectedStore.get('user').Token,
      },
      body: JSON.stringify(
        {
        "stationNum": serialNumber,
        "stationTypeID": 2,
        "stationModelID": 100,
        "appVersion": "2.0.14.35",
        "macAddress": "00:1B:44:11:3A:B7",
        "ipAddress": "10.2.3.150",
        "cellColumns": 8,
        "cellRows": 2,
        "machineType": "Dispenser",
        "accountNum": account,
        "locationDescription": "Lobby",
        "floor": 1,
        "machineDescription": machineDesc,
        "statusCode": 100,
        "building": "Hospital"
     }
    )
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

  const [open, setOpen] = useState(
   false
 );


  const handleClickOpen = () => {
    setOpen(true);
    // globalActions.openDialog(open);
  };

  const handleClose = () => {
    setOpen(false);
    // globalActions.openDialog(open)
  };

  return (
    <div>
    <Button onClick={handleClickOpen} Style={{paddingLeft: 10}} variant="contained" color="secondary">
    + ADD MACHINE
    </Button>
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
    <ValidatorForm method="post" id="my-machine" onSubmit={handleSubmit} noValidate>

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

    errorMessages={['this field is required', 'email is not valid']}
    onChange={e => setAsset(e.target.value)}
    />
    </Grid>
    <Grid item xs={6} md={4} lg={4}>
    <TextValidator
    autoFocus
    margin="dense"
    id="IP Address"

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

    errorMessages={['this field is required', 'email is not valid']}
    onChange={e => setGateway(e.target.value)}
    />
    </Grid>
    <Grid item xs={6} md={4} lg={4}>
    <TextValidator
    autoFocus
    margin="dense"
    id="name"

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

    errorMessages={['this field is required', 'email is not valid']}
    onChange={e => setFirm(e.target.value)}
    />
    </Grid>
    <Grid item xs={6} md={4} lg={4}>
    <TextValidator
    autoFocus
    margin="dense"
    id="name"

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

    errorMessages={['this field is required', 'email is not valid']}
    onChange={e => setFloor(e.target.value)}
    />
    </Grid>
    <Grid item xs={6} md={4} lg={4}>
    <TextValidator
    autoFocus
    margin="dense"
    id="name"

    errorMessages={['this field is required']}
    label="Location"
    type="email"
    fullWidth
    value={location}
    onChange={e => setLocation(e.target.value)}
    />
    </Grid>

    <Grid item xs={6} md={4} lg={4}>
       {/*  <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
         disableToolbar
         variant="inline"
         format="MM/dd/yyyy"
         margin="normal"
         id="date-picker-inline"
         label="Date picker inline"
         value={selectedDate}
         onChange={handleDateChange}
         KeyboardButtonProps={{
           'aria-label': 'change date',
         }}
        />
          </MuiPickersUtilsProvider> */}

          <TextValidator
          autoFocus
          margin="dense"
          id="name"
          errorMessages={['this field is required']}
          label="Machine Description"
          type="email"
          fullWidth
          value={machineDesc}
          onChange={e => setmachineDesc(e.target.value)}
          />
        </Grid>
        <Grid item xs={6} md={4} lg={4}>

        <TextValidator
        autoFocus
        margin="dense"
        id="name"
        errorMessages={['this field is required']}
        label="CellNum"
        type="email"
        fullWidth
        value={cellNum}
        onChange={e => setcellNum(e.target.value)}
        />
      </Grid>



    </Grid>
    </ValidatorForm>
    </DialogContent>
    <DialogActions>
    <Button onClick={handleClose} color="primary">
    Cancel
    </Button>
    <Button form="my-machine" type="submit" color="primary">
    Update
    </Button>
    </DialogActions>
    </Dialog>
    </div>
  );
}
