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
  const [email, setEmail] = useGlobal(
   state => state.email,
   // actions => actions.addToCounterA
 );
  const [expanded, setExpanded] = React.useState(false);
  // const [email, setEmail] = useState(globalState.email);
  // const onChangeData = (key, value, id) => {
 //  const nextState = email.map(a => a.id === id ? { ...a, [key]: value } : a);
 //  const [email, setEmail] = useState(nextState);
 // };
  const forceUpdate = useCallback(() => updateState({}), []);


  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
 console.log("this is a state" + globalState.email)




  return (
    <div className={classes.root}>
    <FormDialog/>
      {email.map((email, i) => (
      <ExpansionPanel className={classes.expClass} key={i} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          key={i}
        >
          <Typography className={classes.heading} key={i}>{email}</Typography>
          <Typography className={classes.secondaryHeading}></Typography>
        </ExpansionPanelSummary>

        <ExpansionPanelDetails>
          <Typography>
            ADD ADMINS +
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
))};
    </div>
  )
  };
