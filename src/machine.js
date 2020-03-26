import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Inventory from './Inventory'
import Logo from './scrubShirt.jpg'
import { useState, useEffect, useCallback, updateState, clearState} from "react";
import globalHook from 'use-global-hook';
import useGlobal from "./store";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import SimpleDialog from './productDialog'



const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",

  },
  spacing:{
    marginRight: 15,
    flexBasis: "22%",
    marginTop: 15,

  },

});

export default function Machine() {
  const classes = useStyles();
  const [globalState, globalActions] = useGlobal();
  // const forceUpdate = useCallback(() => updateState({}), []);

  const [inventory, setInventory] = useGlobal(
   state => state.inventory
   // state => state.highlighted,
   // actions => actions.addToCounterA
 )
  const forceUpdate = useCallback(() => updateState({}), []);
 console.log("Here we are"+ inventory)

 function deleteInventory(inventory) {
    globalActions.deleteInventory(inventory)

  };

  function editInventory(inventory) {
    // const open = true
    // globalActions.openDialog(open);
    //  globalActions.editUsers(user);
    //  console.log(globalState);

   };

  return (
    <div>

    <Typography gutterBottom variant="h5"  component="h2" >
    MACHINE 1  >  ASSIGN ITEMS
    </Typography>
    <div className={classes.root}>

    <Card className={classes.spacing} >
    <CardActionArea >
    <CardMedia

    component="img"
    alt="Contemplative Reptile"
    height="200"

    image={Logo}
    title="Contemplative Reptile"
    />
    <CardContent >
    <Typography gutterBottom variant="h5"  component="h2" >
    SLOT 1
    </Typography>
    <Typography  variant="body2" color="textSecondary" component="p">
    S, M, L, XL
    </Typography>
    </CardContent>
    </CardActionArea>
    <CardActions >
    <div style={{marginLeft: "auto"}}>
    <SimpleDialog/>
    </div>
    </CardActions>
    </Card>
    <Card className={classes.spacing} >
    <CardActionArea >
    <CardMedia

    component="img"
    alt="Contemplative Reptile"
    height="200"

    image={Logo}
    title="Contemplative Reptile"
    />
    <CardContent >
    <Typography gutterBottom variant="h5"  component="h2" >
    SLOT 1
    </Typography>
    <Typography  variant="body2" color="textSecondary" component="p">
    S, M, L, XL
    </Typography>
    </CardContent>
    </CardActionArea>
    <CardActions >
    <div style={{marginLeft: "auto"}}>
    <IconButton
      edge="start"
      color="inherit"
      //
      onClick={() => editInventory(inventory)}
    >
      <EditIcon />
    </IconButton>
    <IconButton
      edge="start"
      color="inherit"
//
      onClick={() => deleteInventory(inventory)}
    >
      <HighlightOffIcon  />
    </IconButton>
    </div>
    </CardActions>
    </Card>
    <Card className={classes.spacing} >
    <CardActionArea >
    <CardMedia

    component="img"
    alt="Contemplative Reptile"
    height="200"

    image={Logo}
    title="Contemplative Reptile"
    />
    <CardContent >
    <Typography gutterBottom variant="h5"  component="h2" >
    SLOT 1
    </Typography>
    <Typography  variant="body2" color="textSecondary" component="p">
    S, M, L, XL
    </Typography>
    </CardContent>
    </CardActionArea>
    <CardActions >
    <div style={{marginLeft: "auto"}}>
    <IconButton
      edge="start"
      color="inherit"
      //
      onClick={() => editInventory(inventory)}
    >
      <EditIcon />
    </IconButton>
    <IconButton
      edge="start"
      color="inherit"
//
      onClick={() => deleteInventory(inventory)}
    >
      <HighlightOffIcon  />
    </IconButton>
    </div>
    </CardActions>
    </Card>
    <Card className={classes.spacing} >
    <CardActionArea >
    <CardMedia

    component="img"
    alt="Contemplative Reptile"
    height="200"

    image={Logo}
    title="Contemplative Reptile"
    />
    <CardContent >
    <Typography gutterBottom variant="h5"  component="h2" >
    SLOT 1
    </Typography>
    <Typography  variant="body2" color="textSecondary" component="p">
    S, M, L, XL
    </Typography>
    </CardContent>
    </CardActionArea>
    <CardActions >
    <div style={{marginLeft: "auto"}}>
    <IconButton
      edge="start"
      color="inherit"
      //
      onClick={() => editInventory(inventory)}
    >
      <EditIcon />
    </IconButton>
    <IconButton
      edge="start"
      color="inherit"
//
      onClick={() => deleteInventory(inventory)}
    >
      <HighlightOffIcon  />
    </IconButton>
    </div>
    </CardActions>
    </Card>
    <Card className={classes.spacing} >
    <CardActionArea >
    <CardMedia

    component="img"
    alt="Contemplative Reptile"
    height="200"

    image={Logo}
    title="Contemplative Reptile"
    />
    <CardContent >
    <Typography gutterBottom variant="h5"  component="h2" >
    SLOT 1
    </Typography>
    <Typography  variant="body2" color="textSecondary" component="p">
    S, M, L, XL
    </Typography>
    </CardContent>
    </CardActionArea>
    <CardActions >
    <div style={{marginLeft: "auto"}}>
    <IconButton
      edge="start"
      color="inherit"
      //
      onClick={() => editInventory(inventory)}
    >
      <EditIcon />
    </IconButton>
    <IconButton
      edge="start"
      color="inherit"
//
      onClick={() => deleteInventory(inventory)}
    >
      <HighlightOffIcon  />
    </IconButton>
    </div>
    </CardActions>
    </Card>
    <Card className={classes.spacing} >
    <CardActionArea >
    <CardMedia

    component="img"
    alt="Contemplative Reptile"
    height="200"

    image={Logo}
    title="Contemplative Reptile"
    />
    <CardContent >
    <Typography gutterBottom variant="h5"  component="h2" >
    SLOT 1
    </Typography>
    <Typography  variant="body2" color="textSecondary" component="p">
    S, M, L, XL
    </Typography>
    </CardContent>
    </CardActionArea>
    <CardActions >
    <div style={{marginLeft: "auto"}}>
    <IconButton
      edge="start"
      color="inherit"
      //
      onClick={() => editInventory(inventory)}
    >
      <EditIcon />
    </IconButton>
    <IconButton
      edge="start"
      color="inherit"
//
      onClick={() => deleteInventory(inventory)}
    >
      <HighlightOffIcon  />
    </IconButton>
    </div>
    </CardActions>
    </Card>
    <Card className={classes.spacing} >
    <CardActionArea >
    <CardMedia

    component="img"
    alt="Contemplative Reptile"
    height="200"

    image={Logo}
    title="Contemplative Reptile"
    />
    <CardContent >
    <Typography gutterBottom variant="h5"  component="h2" >
    SLOT 1
    </Typography>
    <Typography  variant="body2" color="textSecondary" component="p">
    S, M, L, XL
    </Typography>
    </CardContent>
    </CardActionArea>
    <CardActions >
    <div style={{marginLeft: "auto"}}>
    <IconButton
      edge="start"
      color="inherit"
      //
      onClick={() => editInventory(inventory)}
    >
      <EditIcon />
    </IconButton>
    <IconButton
      edge="start"
      color="inherit"
//
      onClick={() => deleteInventory(inventory)}
    >
      <HighlightOffIcon  />
    </IconButton>
    </div>
    </CardActions>
    </Card>
    <Card className={classes.spacing} >
    <CardActionArea >
    <CardMedia

    component="img"
    alt="Contemplative Reptile"
    height="200"

    image={Logo}
    title="Contemplative Reptile"
    />
    <CardContent >
    <Typography gutterBottom variant="h5"  component="h2" >
    SLOT 1
    </Typography>
    <Typography  variant="body2" color="textSecondary" component="p">
    S, M, L, XL
    </Typography>
    </CardContent>
    </CardActionArea>
    <CardActions >
    <div style={{marginLeft: "auto"}}>
    <IconButton
      edge="start"
      color="inherit"
      //
      onClick={() => editInventory(inventory)}
    >
      <EditIcon />
    </IconButton>
    <IconButton
      edge="start"
      color="inherit"
//
      onClick={() => deleteInventory(inventory)}
    >
      <HighlightOffIcon  />
    </IconButton>
    </div>
    </CardActions>
    </Card>


    </div>
    </div>
  );
}
