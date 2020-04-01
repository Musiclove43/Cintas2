/* eslint-disable no-script-url */

import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
  direction: {
    display: "flex",
    flexDirection: "row",
  },
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Machine 1</Title>
      <div className={classes.direction}>
      <ArrowDropDownIcon/>
      <Typography component="p" variant="h4">
        14%
      </Typography>
      </div>
      <Typography color="textSecondary" className={classes.depositContext}>
        on Lab Coats
      </Typography>
      <div>
        <Link color="primary" href="javascript:;">
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
}
