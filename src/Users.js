import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LocationCreate from './LocationCreate';
import FormDialog from './formDialog';
import EditDialog from './editDialog';
import { useState, useEffect, useCallback, updateState} from "react";
import globalHook from 'use-global-hook';
import useGlobal from "./store";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';



const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
    paddingTop: 13
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
    paddingTop: 13

  },
  expClass: {

    marginBottom: 10
  },
}));


export default function Users() {
 //  const [open, setOpen] = useGlobal(
 //   state => state.open,
 // );
  const classes = useStyles();
  const [globalState, globalActions] = useGlobal();
  const [user, setUser] = useGlobal(
   state => state.user,
   // state => state.highlighted,
   // actions => actions.addToCounterA
 );
  const [expanded, setExpanded] = React.useState(false);
  // const forceUpdate = useCallback(() => updateState({}), []);
  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
 // console.log("this is a state" + globalState);
function deleteUser (user) {
   globalActions.deleteUsers(user);
 };

 function editUser (user) {
   const open = true
   globalActions.openDialog(open);
    globalActions.editUsers(user);
    console.log(globalState);



  };



  return (
    <div className={classes.root}>
    <FormDialog/>
    <EditDialog/>
      {user.map((user, i) => (
      <ExpansionPanel className={classes.expClass} key={i} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary
          aria-controls="panel1bh-content"
          id="panel1bh-header"
      
        >
          <Typography className={classes.heading} >{user.first} {user.last}</Typography>
          <Typography className={classes.secondaryHeading}>{user.email}</Typography>
          <div style={{marginLeft: "auto", zIndex:2000}}>
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
          </div>
        </ExpansionPanelSummary>
      </ExpansionPanel>
))}
    </div>
  )
  };
