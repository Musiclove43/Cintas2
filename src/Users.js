import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LocationCreate from './LocationCreate';
import FormDialog from './formDialog';
import { useState, useEffect, useCallback, updateState} from "react";
import globalHook from 'use-global-hook';
import useGlobal from "./store";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import IconButton from '@material-ui/core/IconButton';



const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  expClass: {
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 10
  },
}));


export default function Users() {

  const classes = useStyles();
  const [globalState, globalActions] = useGlobal();
  const [user, setUser] = useGlobal(
   state => state.user,
   // actions => actions.addToCounterA
 );
  const [expanded, setExpanded] = React.useState(false);
  // const forceUpdate = useCallback(() => updateState({}), []);
  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
 // console.log("this is a state" + globalState);



function deleteUser (user) {

   console.log("this is the key "+ user);
   globalActions.deleteUsers(user);
// console.log("this state" + globalState.user)
 };



  return (
    <div className={classes.root}>
    <FormDialog/>
      {user.map((user, i) => (
      <ExpansionPanel className={classes.expClass} key={i} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          key={i}
        >
          <Typography className={classes.heading} >{user.first} {user.last}</Typography>
          <Typography className={classes.secondaryHeading}>{user.email}</Typography>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            style={{marginLeft: "auto", zIndex:1000}}

            onClick={() => deleteUser(user)}
          >
            <HighlightOffIcon style={{marginLeft: "auto", zIndex:1000}} />
          </IconButton>
        </ExpansionPanelSummary>

        <ExpansionPanelDetails>
          <Typography>
            ADD ADMINS +
          </Typography>
        </ExpansionPanelDetails>

      </ExpansionPanel>
))}
    </div>
  )
  };
