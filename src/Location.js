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

export default function Location() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [globalState, globalActions] = useGlobal();

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleClick = () => (event) => {
    var data = 1;
    globalActions.addValue(data)
    console.log("thisssss")
  };

  return (
    <div className={classes.root}>
    <LocationCreate/>
      <ExpansionPanel onClick={handleClick()} className={classes.expClass} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>St Joseph's Hospital</Typography>
          <Typography className={classes.secondaryHeading}></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Global Reporting
          </Typography>
        </ExpansionPanelDetails>
        <ExpansionPanelDetails>
          <Typography>
            Machines Onsite
          </Typography>
        </ExpansionPanelDetails>
        <ExpansionPanelDetails>
          <Typography>
            ADD USERS TO THIS LOCATION
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className={classes.expClass} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Denver Health</Typography>
          <Typography className={classes.secondaryHeading}>

          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Global Reporting
          </Typography>
        </ExpansionPanelDetails>
        <ExpansionPanelDetails>
          <Typography>
            Machines Onsite
          </Typography>
        </ExpansionPanelDetails>
        <ExpansionPanelDetails>
          <Typography>
            ADD USERS TO THIS LOCATION
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className={classes.expClass} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Intermountain Healthcare</Typography>
          <Typography className={classes.secondaryHeading}>

          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          Global Reporting
          </Typography>
        </ExpansionPanelDetails>
        <ExpansionPanelDetails>
          <Typography>
            Machines Onsite
          </Typography>
        </ExpansionPanelDetails>
        <ExpansionPanelDetails>
          <Typography>
            ADD USERS TO THIS LOCATION
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className={classes.expClass} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Personal data</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
            vitae egestas augue. Duis vel est augue.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
