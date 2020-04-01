import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LocationCreate from './LocationCreate';
import { useState, useEffect, useCallback, updateState} from "react";
import globalHook from 'use-global-hook';
import useGlobal from "./store";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
    paddingTop: 5
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

export default function Location() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [globalState, globalActions] = useGlobal();

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(false);
  };

  const handleClick = () => (event) => {
    var data = 1;
    globalActions.addValue(data)
    console.log("thisssss")
  };

  return (
    <div className={classes.root}>
    <Typography style={{paddingTop: 5, paddingBottom: 20}} component="h2" variant="h5" >LOCATION</Typography>
      <ExpansionPanel onClick={handleClick()} className={classes.expClass} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>St Joseph's Hospital</Typography>
          <Typography className={classes.secondaryHeading}></Typography>
          <div style={{marginLeft: "auto", zIndex:2000, paddingTop: 5}}>
            <ChevronRightIcon style={{ zIndex:2000}} />
          </div>
        </ExpansionPanelSummary>
      </ExpansionPanel>
      <ExpansionPanel className={classes.expClass} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Denver Health</Typography>
          <Typography className={classes.secondaryHeading}>

          </Typography>
          <div style={{marginLeft: "auto", zIndex:2000}}>
            <ChevronRightIcon style={{ zIndex:2000}} />
          </div>
        </ExpansionPanelSummary>
      </ExpansionPanel>
      <ExpansionPanel className={classes.expClass} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Intermountain Healthcare</Typography>
          <Typography className={classes.secondaryHeading}>

          </Typography>
          <div style={{marginLeft: "auto", zIndex:2000}}>
            <ChevronRightIcon style={{ zIndex:2000}} />
          </div>
        </ExpansionPanelSummary>
      </ExpansionPanel>

    </div>
  );
}
