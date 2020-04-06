import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Configuration3 from './Configuration3';
import Machine3 from './MachineOnsite2';
import Button from '@material-ui/core/Button';
import { useState, useEffect, useCallback, updateState} from "react";
import globalHook from 'use-global-hook';
import useGlobal from "./store";
import Widgets from './Widget';
import Users from './Users.js'
import Location2 from './Location2';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#fafafa",
    width: "100%",
  },
}));

export default function GlobalMachine() {
  const classes = useStyles();
  const theme = useTheme();
  const [globalState, globalActions] = useGlobal();
  const [value, setValue] = React.useState(0);
  const [index, setIndex] = useGlobal(
   state => state.globalMachine,
   // actions => actions.addToCounterA
 );

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar style={{display: "none"}} position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Item One"  />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={index}
        onChangeIndex={handleChangeIndex}
      >


        <TabPanel value={index} index={0} dir={theme.direction}>
      <Configuration3 />
        </TabPanel>

        <TabPanel value={index} index={1} dir={theme.direction}>
          <Machine3 />
        </TabPanel>


      </SwipeableViews>
    </div>
  );
}
