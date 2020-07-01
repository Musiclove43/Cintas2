import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Inventory from './Inventory'
import Logo from './scrubShirt.jpg'
import { useState, useEffect, useCallback, updateState, clearState} from "react";
import globalHook from 'use-global-hook';
import useGlobal from "./store";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import SimpleDialog from './productDialog'
import SubmitDiag from './submitDiag'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Paper from '@material-ui/core/Paper';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import ReactDOM from "react-dom";
import AssignItem from './assignItem';
import ClearIcon from '@material-ui/icons/Clear';
import ProtectedStore from './protected-store/index';

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  spacing:{
    marginRight: 15,
    flexBasis: "19%",
    marginTop: 15,
    // padding: 20,
  },
  header: {
    display: "flex",
    flexDirection: "row",

  },
  button:{
    marginLeft: "auto",
    // marginRight: 100,
    marginTop: -5
  },
  formControl: {
    // margin: theme.spacing(1),
    marginLeft: 20,
    minWidth: 350,
    marginTop: -13,
    marginBottom: 50
  },
  selectEmpty: {
    // marginTop: theme.spacing(2),
  },
});
// const machines = []

export default function MachineNav(props) {
  const classes = useStyles();
  const [globalState, globalActions] = useGlobal();
  const [slot1, setSlot] = useState("slot1")
  const [slot2, setSlot2] = useState("slot2")
  const [slot3, setSlot3] = useState("slot3")
  const [reload, setReload] = useState(false);

  // const [machine, setMachine] = useState("machine1")
  const [radio, setRadio] = useState("Start")
  const [selectedMachine, setSelected] = React.useState(props);
  const [machines, setMachines] = React.useState([]);
  const [cells, setCells] = React.useState([]);

  const [account, setAccount] = useGlobal(
    state => state.account,
  );
  // console.log(props)



  useEffect(() => {
    console.log('Reloaded Machine Component');
    setMachines([])
    callAPI()
  }, [props])
  //
  // useEffect(() => {
  //   console.log('Reloaded Machine Component2');
  //   // setMachines([])
  //
  // }, [reload])

  function callAPI () {

    console.log("rerender")
    fetch( "https://rest.garmentvendor.app/stations?accountNum=" + account, {
      method: 'get',
      contentType: 'application/json',
      headers: {
        Authorization:
        'Bearer ' + ProtectedStore.get('user').Token,
      },
    })
    .then(res => res.json())
    .then(
      (result) => {
        // console.log(result)
        setMachines([...result])
        // machines.push(...result)
        console.log(machines)
      },
      (error) => {
        console.log(error)
      }
    )
  };


  const [inventory, setInventory] = useGlobal(
    state => state.inventory
    // state => state.highlighted,
    // actions => actions.addToCounterA
  )
  // const forceUpdate = useCallback(() => updateState({}), []);
  // console.log("Here we are"+ inventory)

  function deleteInventory(inventory) {
    globalActions.deleteInventory(inventory)

  };

  function editInventory(inventory) {
    // const open = true
    // globalActions.openDialog(open);
    //  globalActions.editUsers(user);
    //  console.log(globalState);
  };

  function handleRadioChange(radio) {
    // const open = true
    // globalActions.openDialog(open);
    //  globalActions.editUsers(user);
    //  console.log(globalState);
  };

  // function handleChange(radio) {
  //   // const open = true
  //   // globalActions.openDialog(open);
  //   //  globalActions.editUsers(user);
  //   //  console.log(globalState);
  // };
    const machineChange = (event) => {
    // globalActions.setMachine(value);
    setSelected(event.target.value);
    // props.onChange(event.target.value)
    // console.log(value)
    // setCells(value.cellData);
    // console.log("cell " + cells[0]);
    // globalActions.setMachine(event.target.value);
    // console.log(slot)
    // var data = {machine, slot}


  }

  function sayHello() {
    console.log("im here")
    // globalActions.setMachine(value);
    // setSelected(value)
    // console.log(value)
    // setCells(value.cellData);
    // console.log("cell " + cells[0]);

    // console.log(slot)
    // var data = {machine, slot}


  }


  function passMachineSlot(slot) {
    // console.log(slot)
    // var data = {machine, slot}
    // globalActions.setMachine(data);

  }

  const submitDiag = () => (event) => {
    const open = true
    globalActions.openDialog(open)
    // setTimeout(function(){
    //   var data = 0;
    //   globalActions.addValue(data)
    //   globalActions.openDialog(false)
    // }, 2000);
    console.log(globalState)
  };

  const handleClick = () => (event) => {
    var data = 0;
    globalActions.addValue(data)
    console.log(globalState)
  };

  const handleChange = (value) => {
    setSelected(value);
    globalActions.setMachine(value);

    // setCells(cellsExample);
    // console.log("cell " + cells[0])
  };

  function setReloads(value) {
    // selectUser.userEmail = newValue
    // const open = true
    // console.log(reload)
    // setReload(value)
    // console.log(reload)

    setCells([])
    console.log("holaaaa")
    fetch( "https://rest.garmentvendor.app/station/cells?stationNum=" + selectedMachine.stationNum, {
      method: 'get',
      contentType: 'application/json',
      headers: {
        Authorization:
        'Bearer ' + ProtectedStore.get('user').Token,
      },
    })
    .then(res => res.json())
    .then(
      (result) => {
        // setCells([])
        // console.log(result)
        setCells([...result])
        // machines.push(...result)
        // console.log(machines)
      },
      (error) => {
        console.log(error)
      }
    )

    // console.log(cells)
    // globalActions.openDialog(open);
    // console.log(selectUser)
    // globalActions.editUsers(user);
  };
  const deleteUser = (value) => {
    console.log(selectedMachine);
    console.log(value);
    fetch( "https://rest.garmentvendor.app/station/cell" , {
      method: 'post',
      contentType: 'application/json',
      headers: {
        Authorization:
        'Bearer ' + ProtectedStore.get('user').Token,
      },
      body: JSON.stringify({
        "stationNum": selectedMachine.stationNum,
        "cellNum": value,
      })
    })

    .then(res => res.json())
    .then(
      (result) => {
        console.log(result)
        setReloads(true)
      }
    )
  };



  return (

<div>
<Typography gutterBottom variant="h5"  component="h2" >
SELECT MACHINE
</Typography>
<div className={classes.header}>
<SubmitDiag style={{display: "none"}}/>
<FormControl component="fieldset">
<RadioGroup row aria-label="position" name="position" defaultValue="dispenser" onChange={handleRadioChange} >
<FormControlLabel value="dispenser" control={<Radio color="primary" />} label="Dispenser" />
<FormControlLabel value="return" control={<Radio color="primary" />} label="Return" />
</RadioGroup>
</FormControl>
<FormControl className={classes.formControl}>
<InputLabel id="demo-simple-select-label">Select Machine</InputLabel>
<Select
labelId="demo-simple-select-label"
id="demo-simple-select"
value={props.selectedMachine}
onChange={machineChange}
>
{machines.map((option) => (
  <MenuItem key={option} value={option}>
  {option.machineDescription}
  </MenuItem>
))}
</Select>
</FormControl>
<div className={classes.button} >
<Button onClick={submitDiag()}  variant="outlined" color="secondary">
Machine Details
</Button>
<Button onClick={submitDiag()} Style={{paddingLeft: 10}} variant="contained" color="secondary">
+ ADD MACHINE
</Button>
</div>
</div>
</div>

);
}
