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
import { useState, useEffect, useCallback, updateState, clearState} from "react";
import globalHook from 'use-global-hook';
import useGlobal from "./store";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import EditInventory from './editInventory';




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

export default function ImgMediaCard() {
  const classes = useStyles();
  const [globalState, globalActions] = useGlobal();
  // const forceUpdate = useCallback(() => updateState({}), []);

  const [inventory, setInventory] = useGlobal(
   state => state.inventory
   // state => state.highlighted,
   // actions => actions.addToCounterA
 )
 //  const forceUpdate = useCallback(() => updateState({}), []);
 // console.log("Here we are"+ inventory)

 function deleteInventory(inventory) {
    globalActions.deleteInventory(inventory)

  };

  function editInventory(inventory) {
    console.log("clicked")
    const open = true
    globalActions.openDialog(open);
     globalActions.editInventory(inventory);
    //  console.log(globalState);

   };

  // function getRandomImg(inventory){
  //   console.log(inventory)
  //   if (inventory.title == "pants") {
  //     return Pants
  //   } else {
  //   var arr = []
  //   arr.push(Logo,Pants)
  //   console.log(arr)
  //   return arr[Math.floor(Math.random() * arr.length)]
  // };
  // }

  return (
    <div>
    <Inventory/>
    <EditInventory/>
    <div className={classes.root}>
    {inventory.map((inventory, i) => (
    <Card className={classes.spacing} key={i} >
    <CardActionArea key={i} >
    <CardMedia
    key={i}
    component="img"
    alt="Contemplative Reptile"
    height="200"

    image={inventory.file}
    title="Contemplative Reptile"
    />
    <CardContent >
    <Typography gutterBottom variant="h5"  component="h2" >
    {inventory.title}
    </Typography>
    <Typography  variant="body2" color="textSecondary" component="p">
    QTY: {inventory.qty}
    </Typography>
    <Typography  variant="body2" color="textSecondary" component="p">
    Size: {inventory.size}
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
    ))}

    </div>
    </div>
  );
}
