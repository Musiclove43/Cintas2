
export const addToUsers = (store, data) => {
  const newUserValue = store.state.user = data;
  store.setState({ newUserValue });
};

export const deleteAllUsers = (store) => {
  const newUserValue = store.state.user = [];
  store.setState({ newUserValue });
};

export const deleteUsers = (store, user) =>  {
  var index = store.state.user.indexOf(user);
  if (index > -1) {
    store.state.user.splice(index, 1);
  }
  store.setState({ user: store.state.user });
}

export const editUsers = (store, newValue) =>  {
  const newEdit = store.state.highlighted = newValue;
  store.setState({ newEdit });
}

export const activeEdit = (store, user) =>  {
  const newUserValue = store.state.activeEdit = user;
  store.setState({ newUserValue });
  // console.log(store.state.highlighted)
}

export const cellCapacity = (store, value) =>  {
  const newCellCap = store.state.cellCap = value;
  store.setState({ newCellCap });
  // console.log(store.state.highlighted)
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
  // console.log(store.state)
}

export const addUserLocation = (store, data) =>  {
  var index = store.state.userLocation= data;
  store.setState({ userLocation: index });
  console.log(store.state.userLocation)
}

export const addValue= (store, data) =>  {
  var index = store.state.value = data;
  store.setState({ value: index });
}

export const addAccount= (store, currency) =>  {
  var index = store.state.account = currency;
  store.setState({ account: index });
}

export const swipeUser= (store, value) =>  {
  var index = store.state.swipeUser = value;
  store.setState({ swipeUser: index });
}

export const setMachine= (store, value) =>  {
  // var index = store.state.setmachine = value;
  // store.setState({ setmachine: index });
  const newMachine= store.state.setmachine = value;
  store.setState({ newMachine });
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

  for (var key in foundMachine) {
    if (!foundMachine.hasOwnProperty(key)) continue;
    Object.keys(foundMachine[key]).forEach(i => {
      if(i == slot) {
        foundMachine[key][i] = inventory;
      }
    });
  }

  console.log(store.state)
}
