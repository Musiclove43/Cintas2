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

import Paper from '@material-ui/core/Paper';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  spacing:{
    marginRight: 15,
    flexBasis: "22%",
    marginTop: 15,
    padding: 20,
  },
  header: {
    display: "flex",
    flexDirection: "row",
  },
  button:{
    marginLeft: "auto",
    marginRight: 100,
    marginTop: -5
  },
});

export default function Machine() {
  const classes = useStyles();
  const [globalState, globalActions] = useGlobal();
  const [slot1, setSlot] = useState("slot1")
  const [slot2, setSlot2] = useState("slot2")
  const [slot3, setSlot3] = useState("slot3")
  const [machine, setMachine] = useState("machine1")

  // const forceUpdate = useCallback(() => updateState({}), []);

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

function passMachineSlot(slot) {
  console.log(slot)
  var data = {machine, slot}
  globalActions.setMachine(data);

}

const submitDiag = () => (event) => {
  const open = true
  globalActions.openDialog(open)
  setTimeout(function(){
    var data = 0;
  globalActions.addValue(data)
globalActions.openDialog(false)
}, 2000);
  console.log(globalState)
};
const handleClick = () => (event) => {
  var data = 0;
  globalActions.addValue(data)
  console.log(globalState)
};

  return (
    <div>
    <div className={classes.header}>
    <SubmitDiag style={{display: "none"}}/>
    <Typography gutterBottom variant="h5"  component="h2" >
    MACHINE 1
    </Typography>
    <ChevronRightIcon/>
    <Typography gutterBottom variant="h5"  component="h2" >
    ASSIGN ITEMS
    </Typography>
    <div className={classes.button} >
    <Button onClick={handleClick()}  style={{marginRight: 5}} variant="outlined" color="primary" >
    <ArrowBackIcon />

    </Button>
    <Button onClick={submitDiag()} variant="outlined" color="primary">
    Apply Changes
    </Button>
      </div>
    </div>
    <div className={classes.root}>

    <Paper className={classes.spacing} elevation={3} >
    <Typography gutterBottom variant="h5"  component="h2" >
    SLOT 1
    </Typography>

    <Card>
    <CardActions  onClick={() => passMachineSlot("slot1")} >
    <div style={{marginLeft: "auto"}}>
    <SimpleDialog/>
    </div>
    </CardActions>
    </Card>
    </Paper>


    <Paper className={classes.spacing} elevation={3} >
    <Typography gutterBottom variant="h5"  component="h2" >
    SLOT 2
    </Typography>
    <Card>
    <CardActions onClick={() => passMachineSlot("slot2")}>
    <div style={{marginLeft: "auto"}}>
    <SimpleDialog/>
    </div>
    </CardActions>
    </Card>
    </Paper>


    <Paper className={classes.spacing} elevation={3} >
    <Typography gutterBottom variant="h5"  component="h2" >
    SLOT 3
    </Typography>
    <Card>
    <CardActions >
    <div style={{marginLeft: "auto"}}>
    <SimpleDialog/>
    </div>
    </CardActions>
    </Card>
    </Paper>

    <Paper className={classes.spacing} elevation={3} >
    <Typography gutterBottom variant="h5"  component="h2" >
    SLOT 4
    </Typography>
    <Card>
    <CardActions >
    <div style={{marginLeft: "auto"}}>
    <SimpleDialog/>
    </div>
    </CardActions>
    </Card>
    </Paper>

    <Paper className={classes.spacing} elevation={3} >
    <Typography gutterBottom variant="h5"  component="h2" >
    SLOT 5
    </Typography>
    <Card>
    <CardActions >
    <div style={{marginLeft: "auto"}}>
    <SimpleDialog/>
    </div>
    </CardActions>
    </Card>
    </Paper>

    <Paper className={classes.spacing} elevation={3} >
    <Typography gutterBottom variant="h5"  component="h2" >
    SLOT 6
    </Typography>
    <Card>
    <CardActions >
    <div style={{marginLeft: "auto"}}>
    <SimpleDialog/>
    </div>
    </CardActions>
    </Card>
    </Paper>

    <Paper className={classes.spacing} elevation={3} >
    <Typography gutterBottom variant="h5"  component="h2" >
    SLOT 7
    </Typography>
    <Card>
    <CardActions >
    <div style={{marginLeft: "auto"}}>
    <SimpleDialog/>
    </div>
    </CardActions>
    </Card>
    </Paper>

    <Paper className={classes.spacing} elevation={3} >
    <Typography gutterBottom variant="h5"  component="h2" >
    SLOT 8
    </Typography>
    <Card>
    <CardActions >
    <div style={{marginLeft: "auto"}}>
    <SimpleDialog/>
    </div>
    </CardActions>
    </Card>
    </Paper>


    </div>
    </div>
  );
}
