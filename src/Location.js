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
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

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
    setExpanded(isExpanded ? panel : false);
  };

  const handleClick = (value) => (event) => {
    var data = 1;
    globalActions.addValue(data)
      globalActions.swipeUser(value)

  };

  const handleLocation = (value) => (event) => {

      globalActions.handleLocation(value)
      console.log(globalState.location)

  };

  return (
    <div className={classes.root}>
    <Typography style={{paddingTop: 5, paddingBottom: 20}} component="h2" variant="h5" >LOCATION</Typography>
    <ExpansionPanel  className={classes.expClass} onChange={handleChange('panel1')}>
    <ExpansionPanelSummary
    expandIcon={<ExpandMoreIcon />}
    aria-controls="panel1bh-content"
    id="panel1bh-header"
    onClick={handleLocation('ST. JOSEPHS HOSPITAL')}
    >
    <Typography  className={classes.heading}>ST. JOSEPH'S HOSPITAL</Typography>
    <Typography className={classes.secondaryHeading}></Typography>

    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
    <List component="nav" className={classes.root} aria-label="mailbox folders">
    <ListItem onClick={handleClick(0)} button>
    <ListItemText primary="View Reporting" />
    <div style={{marginLeft: "auto", zIndex:2000}}>
    <ChevronRightIcon style={{ zIndex:2000}} />
    </div>
    </ListItem>
    <Divider />
    <ListItem onClick={handleClick(1)} button divider>
    <ListItemText primary="Manage Users" />
    <div style={{marginLeft: "auto", zIndex:2000}}>
    <ChevronRightIcon style={{ zIndex:2000}} />
    </div>
    </ListItem>
    <ListItem onClick={handleClick(2)}  button>
    <ListItemText primary="Machines Onsite" />
    <div style={{marginLeft: "auto", zIndex:2000}}>
    <ChevronRightIcon style={{ zIndex:2000}} />
    </div>
    </ListItem>
    </List>
    </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel className={classes.expClass} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
    <ExpansionPanelSummary
    expandIcon={<ExpandMoreIcon />}
    aria-controls="panel2bh-content"
    id="panel2bh-header"
    onClick={handleLocation('DENVER HEALTH')}

    >
    <Typography className={classes.heading}>DENVER HEALTH</Typography>
    <Typography className={classes.secondaryHeading}>
    </Typography>

    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
    <List component="nav" className={classes.root} aria-label="mailbox folders">
    <ListItem onClick={handleClick(0)} button>
    <ListItemText primary="Reporting" />
    <div style={{marginLeft: "auto", zIndex:2000}}>
    <ChevronRightIcon style={{ zIndex:2000}} />
    </div>
    </ListItem>
    <Divider />
    <ListItem onClick={handleClick(1)} button divider>
    <ListItemText primary="Manage Users" />
    <div style={{marginLeft: "auto", zIndex:2000}}>
    <ChevronRightIcon style={{ zIndex:2000}} />
    </div>
    </ListItem>
    <ListItem onClick={handleClick(2)}  button>
    <ListItemText primary="Machines Onsite" />
    <div style={{marginLeft: "auto", zIndex:2000}}>
    <ChevronRightIcon style={{ zIndex:2000}} />
    </div>
    </ListItem>
    </List>
    </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel className={classes.expClass} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
    <ExpansionPanelSummary
    expandIcon={<ExpandMoreIcon />}
    aria-controls="panel3bh-content"
    id="panel3bh-header"
    onClick={handleLocation('INTERMOUNTAIN HEALTHCARE')}
    >
    <Typography className={classes.heading}>INTERMOUNTAIN HEALTHCARE</Typography>
    <Typography className={classes.secondaryHeading}>

    </Typography>

    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
    <List component="nav" className={classes.root} aria-label="mailbox folders">
    <ListItem onClick={handleClick(0)} button>
    <ListItemText primary="Reporting" />
    <div style={{marginLeft: "auto", zIndex:2000}}>
    <ChevronRightIcon style={{ zIndex:2000}} />
    </div>
    </ListItem>
    <Divider />
    <ListItem onClick={handleClick(1)} button divider>
    <ListItemText primary="Manage Users" />
    <div style={{marginLeft: "auto", zIndex:2000}}>
    <ChevronRightIcon style={{ zIndex:2000}} />
    </div>
    </ListItem>
    <ListItem onClick={handleClick(2)}  button>
    <ListItemText primary="Machines Onsite" />
    <div style={{marginLeft: "auto", zIndex:2000}}>
    <ChevronRightIcon style={{ zIndex:2000}} />
    </div>
    </ListItem>
    </List>
    </ExpansionPanelDetails>
    </ExpansionPanel>

    </div>
  );
}
