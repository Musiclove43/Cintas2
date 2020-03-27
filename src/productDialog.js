import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Inventory from './Inventory'
import Logo from './scrubShirt.jpg'
import globalHook from 'use-global-hook';
import useGlobal from "./store";

const emails = ['username@gmail.com', 'user02@gmail.com'];
const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 20

  },
  spacing:{
    marginRight: 15,
    flexBasis: "22%",
    marginTop: 15,

  },
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

function SimpleDialog(props) {
  const [globalState, globalActions] = useGlobal();
  const [inventory, setInventory] = useGlobal(
   state => state.inventory
   // state => state.highlighted,
   // actions => actions.addToCounterA
  )
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = value => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
       <div className={classes.root}>
        {inventory.map((inventory, i) => (

          <Card  button onClick={() => handleListItemClick(inventory.title)} className={classes.spacing} key={i} >
          <CardActionArea key={i} >
          <CardMedia
          key={i}
          component="img"
          alt="Contemplative Reptile"
          height="100"

          image={Logo}
          title="Contemplative Reptile"
          />
          <CardContent >
          <Typography gutterBottom variant="h5"  component="h2" >
          {inventory.title}
          </Typography>
          <Typography  variant="body2" color="textSecondary" component="p">
          S, M, L, XL
          </Typography>
          </CardContent>
          </CardActionArea>

          </Card>

        ))}

</div>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = value => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <Typography variant="subtitle1">Selected: {selectedValue}</Typography>
      <br />
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Assign Item To Slot
      </Button>
      <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
    </div>
  );
}
