

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

export const addValue= (store, data) =>  {
    var index = store.state.value = data;

    store.setState({ value: index });
}
