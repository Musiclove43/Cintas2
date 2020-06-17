import React from 'react';
import clsx from 'clsx';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems } from './listItems';
import Chart from './Chart';
import Deposits from './Deposits';
import Title from './Title';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import Orders from './Orders';
// import Dispensers from './DashboardDispensersTable'
// import MachineHealth from './DashboardMachineHealthTable'
// import ReturnUnits from './DashboardReturnUnitsTable'
// import TableHeader from './DasboardTableHeader'
// import Users from './DashboardUserTable'
// import { Table } from '@material-ui/core';
import Box from '@material-ui/core/Box'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableHeader from './tableHeader'

// import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme: Theme) =>
createStyles({
  head: {
    backgroundColor: "#002C6F",
    color: theme.palette.common.white,
    height: "20px"
  },
  body: {
    fontSize: 14,
  },
}),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
createStyles({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}),
)(TableRow);

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
    {'Copyright © '}
    <Link color="inherit" href="https://material-ui.com/">
    Your Website
    </Link>{' '}
    {new Date().getFullYear()}
    {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  table: {
    // minWidth: 700,

  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    // padding: 30,
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  fixedHeight2: {
    height: 240,
  },
  fixedHeight: {
    height: 120,
  },
  direction: {
    display: "flex",
    flexDirection: "row",
  },
  depositContext: {
    flex: 1,
  },

}));



export default function Widgets() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const fixedHeight2Paper = clsx(classes.paper, classes.fixedHeight2);

  return (

    <Grid container spacing={3} direction="row"
    justify="space-between"
    alignItems="center">
    {/* Chart */}
    {/*
      <Grid item xs={12} md={8} lg={9}>
      <Paper className={fixedHeightPaper}>
      <Chart />
      </Paper>
      </Grid>
      */}


      <Grid item xs={6} md={2} lg={2}>
      <Paper className={fixedHeightPaper}>
      <React.Fragment>
      <Typography component="h4" variant="subtitle1"  gutterBottom>
      Machines Online
      </Typography>
      <Typography component="p" variant="h4">
      100%
      </Typography>
      </React.Fragment>
      </Paper>
      </Grid>

      <Grid item xs={6} md={2} lg={2}>
      <Paper className={fixedHeightPaper}>
      <React.Fragment>
      <Typography component="h4" variant="subtitle1"  gutterBottom>
      Total Active Users
      </Typography>
      <Typography component="p" variant="h4">
      150
      </Typography>
      </React.Fragment>
      </Paper>
      </Grid>

      <Grid item xs={6} md={2} lg={2}>
      <Paper className={fixedHeightPaper}>
      <React.Fragment>
      <Typography component="h4" variant="subtitle1"  gutterBottom>
      Delinquent Users
      </Typography>
      <Typography component="p" variant="h4">
      20
      </Typography>
      </React.Fragment>
      </Paper>
      </Grid>

      <Grid item xs={6} md={2} lg={2}>
      <Paper className={fixedHeightPaper}>
      <React.Fragment>
      <Typography component="h4" variant="subtitle1"  gutterBottom>
      Garments Out
      </Typography>
      <Typography component="p" variant="h4">
      300
      </Typography>
      </React.Fragment>
      </Paper>
      </Grid>

      <Grid item xs={6} md={2} lg={2}>
      <Paper className={fixedHeightPaper}>
      <React.Fragment>
      <Typography component="h4" variant="subtitle1"  gutterBottom>
      Uptime
      </Typography>
      <Typography component="p" variant="h4">
      100%
      </Typography>
      </React.Fragment>
      </Paper>
      </Grid>

      <Grid item xs={6} md={2} lg={2}>
      <Paper className={fixedHeightPaper}>
      <React.Fragment>
      <Typography component="h4" variant="subtitle1"  gutterBottom>
      User Success
      </Typography>
      <Typography component="p" variant="h4">
      67%
      </Typography>
      </React.Fragment>
      </Paper>
      </Grid>


      {/* Recent Deposits */}
      {/*
        <Grid item xs={6} md={2} lg={2}>
        <Paper className={fixedHeight2Paper}>
        <Deposits />
        </Paper>
        </Grid>
        <Grid item xs={6} md={2} lg={2}>
        <Paper className={fixedHeight2Paper}>
        <React.Fragment>
        <Title>Machine 2</Title>
        <div className={classes.direction}>
        <ArrowDropDownIcon style={{color: "#ff3838"}}/>
        <Typography component="p" variant="h4">
        23%
        </Typography>
        </div>
        <Typography color="textSecondary" className={classes.depositContext}>
        on Goggles
        </Typography>
        <div>
        <Link color="primary" href="javascript:;">
        View balance
        </Link>
        </div>
        </React.Fragment>
        </Paper>
        </Grid>
        <Grid item xs={6} md={2} lg={2}>
        <Paper className={fixedHeight2Paper}>
        <React.Fragment>
        <Title>Machine 3</Title>
        <div className={classes.direction}>
        <ArrowDropUpIcon />
        <Typography component="p" variant="h4">
        50%
        </Typography>
        </div>
        <Typography color="textSecondary" className={classes.depositContext}>
        on Masks
        </Typography>
        <div>
        <Link color="primary" href="javascript:;">
        View balance
        </Link>
        </div>
        </React.Fragment>
        </Paper>
        </Grid>
        <Grid item xs={6} md={2} lg={2}>
        <Paper className={fixedHeight2Paper}>
        <React.Fragment>
        <Title>Machine 4</Title>
        <div className={classes.direction}>
        <ArrowDropUpIcon />
        <Typography component="p" variant="h4">
        75%
        </Typography>
        </div>
        <Typography color="textSecondary" className={classes.depositContext}>
        on Shields
        </Typography>
        <div>
        <Link color="primary" href="javascript:;">
        View balance
        </Link>
        </div>
        </React.Fragment>
        </Paper>
        </Grid>
        <Grid item xs={6} md={2} lg={2}>
        <Paper className={fixedHeight2Paper}>
        <React.Fragment>
        <Title>Machine 5</Title>
        <div className={classes.direction}>
        <ArrowDropDownIcon style={{color: "#ff3838"}}/>
        <Typography component="p" variant="h4">
        40%
        </Typography>
        </div>
        <Typography color="textSecondary" className={classes.depositContext}>
        on Scrub Pants
        </Typography>
        <div>
        <Link color="primary" href="javascript:;">
        View balance
        </Link>
        </div>
        </React.Fragment>
        </Paper>
        </Grid>
        */}
        {/* Recent Orders */}
        {/*
          <Grid item xs={12}>
          <Paper className={classes.paper}>
          <Orders />
          </Paper>
          </Grid>
          */}


          {/*Tables*/}

          <Grid item xs={8}>
          <Paper className={classes.paper, classes.dispensers}>
          <TableHeader component="h4" variant="subtitle1"  gutterBottom>
          Dispensors
          </TableHeader>
          <React.Fragment>
          <TableContainer style={{padding: 30, marginTop: -35}} component={Paper}>
          <Table className={classes.table} aria-label="customized table">
          <TableHead>
          <TableRow>
          <StyledTableCell>Machine</StyledTableCell>
          <StyledTableCell align="right">Current Inventory</StyledTableCell>
          <StyledTableCell align="right">Capacity</StyledTableCell>
          <StyledTableCell align="right">Average Daily Usage</StyledTableCell>
          <StyledTableCell align="right">Days On Hand</StyledTableCell>
          </TableRow>
          </TableHead>
          <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
            <StyledTableCell component="th" scope="row">
            {row.name}
            </StyledTableCell>
            <StyledTableCell align="right">{row.calories}</StyledTableCell>
            <StyledTableCell align="right">{row.fat}</StyledTableCell>
            <StyledTableCell align="right">{row.carbs}</StyledTableCell>
            <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
          </TableBody>
          </Table>
          </TableContainer>
          </React.Fragment>
          </Paper>
          </Grid>

          <Grid item xs={4}>
          <Paper className={classes.paper, classes.returnUnits}>
          <TableHeader component="h4" variant="subtitle1"  gutterBottom>
          Return Units
          </TableHeader>
          <React.Fragment>
          <TableContainer style={{padding: 30, marginTop: -35}} component={Paper}>
          <Table className={classes.table} aria-label="customized table">
          <TableHead>
          <TableRow>
          <StyledTableCell>Machine</StyledTableCell>
          <StyledTableCell align="right">Availability</StyledTableCell>
          <StyledTableCell align="right">Capacity</StyledTableCell>
          <StyledTableCell align="right">Days To Depletion</StyledTableCell>

          </TableRow>
          </TableHead>
          <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
            <StyledTableCell component="th" scope="row">
            {row.name}
            </StyledTableCell>
            <StyledTableCell align="right">{row.calories}</StyledTableCell>
            <StyledTableCell align="right">{row.fat}</StyledTableCell>
            <StyledTableCell align="right">{row.carbs}</StyledTableCell>

            </StyledTableRow>
          ))}
          </TableBody>
          </Table>
          </TableContainer>
          </React.Fragment>
          </Paper>
          </Grid>

          <Grid item xs={8}>
          <Paper  className={classes.paper, classes.machineHealth}>
          <TableHeader>
          Machine Health
          </TableHeader>
          <React.Fragment styles={{ padding: 30}}>
          <TableContainer style={{padding: 30, marginTop: -35}} component={Paper}>
          <Table className={classes.table} aria-label="customized table">
          <TableHead>
          <TableRow>
          <StyledTableCell>Machine</StyledTableCell>
          <StyledTableCell align="right">Machine Type</StyledTableCell>
          <StyledTableCell align="right">Status</StyledTableCell>
          <StyledTableCell align="right">Alert Date & Time</StyledTableCell>
          <StyledTableCell align="right">Transation Since Last PM</StyledTableCell>
          <StyledTableCell align="right">Days Since Last PM</StyledTableCell>

          </TableRow>
          </TableHead>
          <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
            <StyledTableCell component="th" scope="row">
            {row.name}
            </StyledTableCell>
            <StyledTableCell align="right">{row.calories}</StyledTableCell>
            <StyledTableCell align="right">{row.fat}</StyledTableCell>
            <StyledTableCell align="right">{row.carbs}</StyledTableCell>
            <StyledTableCell align="right">{row.protein}</StyledTableCell>
            <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
          </TableBody>
          </Table>
          </TableContainer>
          </React.Fragment>
          </Paper>
          </Grid>

          <Grid item xs={4}>
          <Paper className={classes.paper, classes.returnUnits}>
          <TableHeader component="h4" variant="subtitle1"  gutterBottom>
          Users
          </TableHeader>
          <React.Fragment>
          <TableContainer style={{padding: 30, marginTop: -35}} component={Paper}>
          <Table className={classes.table} aria-label="customized table">
          <TableHead>
          <TableRow>
          <StyledTableCell>Dessert (100g serving)</StyledTableCell>
          <StyledTableCell align="right">Calories</StyledTableCell>
          <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>

          </TableRow>
          </TableHead>
          <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
            <StyledTableCell component="th" scope="row">
            {row.name}
            </StyledTableCell>
            <StyledTableCell align="right">{row.calories}</StyledTableCell>
            <StyledTableCell align="right">{row.fat}</StyledTableCell>

            </StyledTableRow>
          ))}
          </TableBody>
          </Table>
          </TableContainer>
          </React.Fragment>
          </Paper>
          </Grid>


          </Grid>

        );
      }
