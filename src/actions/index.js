

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

    // const highlightUser = user;
    store.setState({ highlighted: highlightUser });
}

export const updateUsers = (store, data) =>  {
  // const newEmail = store.state.highlighted.email = data.email;

  // console.log(newProp)
  console.log(store.state)
  var activeUser = store.state.highlighted;
  var foundIndex =  store.state.user.findIndex(x => x.id == activeUser.id);
  store.setState(store.state.user[foundIndex].email = data.email )
// console.log(newProp)
  //   // const highlightUser = user;
  //   store.setState({ highlighted: highlightUser });
}


export const openDialog = (store, open) =>  {
  const openStatus = open;
  store.setState({ open: openStatus });
}
