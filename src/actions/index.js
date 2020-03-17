


export const addToUsers = (store, data) => {
  const newUserValue = store.state.user.push(data);
  store.setState({ newUserValue });
};


// state => {
//       const list = state.list.push(state.value);
