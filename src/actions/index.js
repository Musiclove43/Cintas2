


export const addToUsers = (store, data) => {
  const newUserValue = store.state.user.push(data);
  store.setState({ newUserValue });
};


// export const deleteUsers = search(store, user.first) =>  {
//     for (var i=0; i < store.state.user.length; i++) {
//         if (store.state.user[i].first === first) {
//             return store.state.user[i];
//         };
//     };
// };

// state => {
//       const list = state.list.push(state.value);


export const deleteUsers = (store, user) =>  {
    var index = store.state.user.indexOf(user);
    if (index > -1) {
        store.state.user.splice(index, 1);
    }
}
