import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
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
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
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

  return (

          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <Chart />
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={6} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Deposits />
              </Paper>
            </Grid>
            <Grid item xs={6} md={3} lg={3}>
              <Paper className={fixedHeightPaper}>
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
            <Grid item xs={6} md={3} lg={3}>
              <Paper className={fixedHeightPaper}>
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
            <Grid item xs={6} md={3} lg={3}>
              <Paper className={fixedHeightPaper}>
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
            <Grid item xs={6} md={3} lg={3}>
              <Paper className={fixedHeightPaper}>
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
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Orders />
              </Paper>
            </Grid>
          </Grid>

  );
}
