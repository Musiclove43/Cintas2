

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

// export const editUsers = (store, user) =>  {
//   var foundIndex =  store.state.user.findIndex(x => x.user == user);
//     store.state.user[foundIndex] = user;
//     console.log(user);
//     // const highlightUser = user;
//     // store.setState({ highlighted: highlightUser });
// }


export const openDialog = (store, open) =>  {
  const openStatus = open;
  store.setState({ open: openStatus });
}
