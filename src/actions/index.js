
export const addToUsers = (store, data) => {
  const newUserValue = store.state.user.push(data);
  store.setState({ newUserValue });
};

export const deleteUsers = (store, user) =>  {
  var index = store.state.user.indexOf(user);
  if (index > -1) {
    store.state.user.splice(index, 1);
  }
}

export const editUsers = (store, user) =>  {
  var foundIndex =  store.state.user.findIndex(x => x.id == user.id);
  const highlightUser = store.state.user[foundIndex] = user;
  store.setState({ highlighted: highlightUser });
  console.log(store.state.highlighted)
}

export const updateUsers = (store, data) =>  {
  const newEmail = store.state.highlighted.email = data.email;
  const newFirst = store.state.highlighted.first = data.first;
  const newLast = store.state.highlighted.last = data.last;
  const newPass = store.state.highlighted.pass = data.pass;
  // console.log(newProp)
  // console.log(store.state)
  var activeUser = store.state.highlighted;
  var foundIndex =  store.state.user.findIndex(x => x.id == activeUser.id);
  const updatedUser = store.state.user[foundIndex] = activeUser;
  store.setState({  updatedUser });
  // console.log(newProp)
  //   // const highlightUser = user;
  //   store.setState({ highlighted: highlightUser });
}

export const openDialog = (store, open) =>  {
  const openStatus = open;
  store.setState({ open: openStatus });
}

export const addToInventory = (store, data) => {
  const newInventory = store.state.inventory.push(data);
  store.setState({ newInventory });
  console.log(store.state.inventory)
};

export const deleteInventory= (store, inventory) =>  {
  var index = store.state.inventory.indexOf(inventory);
  if (index > -1) {
    store.state.inventory.splice(index, 1);
  }
  store.setState({ inventory: store.state.inventory });
}

export const editInventory = (store, inventory) =>  {
  var foundIndex =  store.state.inventory.findIndex(x => x.id == inventory.id);
  const highlightInventory = store.state.inventory[foundIndex] = inventory;
  store.setState({ highlighted: highlightInventory});
  console.log(store.state.highlighted)
}

export const updateInventory = (store, data) =>  {
  const newTitle = store.state.highlighted.title = data.title;
  const newQty = store.state.highlighted.qty = data.qty;
  const newCredits = store.state.highlighted.credits = data.credits;
  const newSku = store.state.highlighted.sku = data.sku;
  const newFile = store.state.highlighted.file = data.file;
  const newSize = store.state.highlighted.size = data.size;

  // console.log(newProp)
  console.log(store.state.highlighted)
  var activeInventory = store.state.highlighted;
  var foundIndex =  store.state.inventory.findIndex(x => x.id == activeInventory.id);
  const updatedInventory = store.state.inventory[foundIndex] = activeInventory;
  store.setState({  updatedInventory });
  // console.log(newProp)
  //   // const highlightUser = user;
  //   store.setState({ highlighted: highlightUser });
}

export const addToken = (store, token) =>  {
  var index = store.state.token = token;
  store.setState({ token: index });
}

export const addValue= (store, data) =>  {
  var index = store.state.value = data;
  store.setState({ value: index });
}

export const swipeUser= (store, value) =>  {
  var index = store.state.swipeUser = value;
  store.setState({ swipeUser: index });
}

export const setMachine= (store, data) =>  {
  var index = store.state.setMachine = data;
  store.setState({ setMachine: index });
  console.log(store.state)
}

export const globalMachine= (store, data) =>  {
  var index = store.state.globalMachine = data;
  store.setState({ globalMachine: index });
  console.log(store.state)
}


export const handleLocation= (store, value) =>  {
  var index = store.state.location = value;
  store.setState({ location: index});
  console.log(store.state)
}

export const setProduct= (store, mainMachine, newKey, slot, inventory) =>  {

  var index = store.state.selectedValue = {[mainMachine]:newKey};

  var foundIndex =  store.state.machines.findIndex(x => x.machine == mainMachine.machine);
  const foundMachine = store.state.machines[foundIndex] ;
  // var obj = foundMachine;
  // console.log(obj)



  for (var key in foundMachine) {
    // skip loop if the property is from prototype
    if (!foundMachine.hasOwnProperty(key)) continue;

    // var obj = foundMachine[key];
    // for (var prop in obj) {
    //     // skip loop if the property is from prototype
    //     if (prop == slot) {
    //        prop = inventory
    //     }
    //
    //     // your code
    //
    // }
    Object.keys(foundMachine[key]).forEach(i => {
      if(i == slot) {
        // you have to do this to affect the actual object :)
        foundMachine[key][i] = inventory;
      }
    });
  }



  //     var keys = obj[Object.keys(obj)[0]]; //get keys from object as an array
  //
  // console.log(keys);
  //     for (var key in keys) {
  //       console.log(key, key == slot)
  //
  //       if (key == slot) {
  //         // key.splice
  //         // obj['New key'] = obj['old key'];
  //        console.log(key)
  //        selector[key] = newKey
  //        console.log(keys)
  //
  //       }
  //     }


  //     for (var i = 0; i < keys.length; i++) {
  //   if (slot == keys[i])
  //     console.log('match: ', keys[i])
  // }
  // getFirstMatching(foundMachine,slot, newKey);
  // var insertInventory = store.state.selectedValue.machine.slot

  // function getFirstMatching(foundMachine, slot,newKey) {
  //   console.log(foundMachine, slot)
  //   let result;
  //   Object.getOwnPropertyNames(foundMachine).some(key => {
  //     if (foundMachine[key] === slot) {
  //       result = key;
  //       // result = newKey
  //
  //       return true; // Stops the loop
  //
  //     } else {
  //       console.log("no match")
  //     }
  //
  //   });
  //   return result;
  //     console.log("this a result"+result)
  // }

  console.log(store.state)
}
