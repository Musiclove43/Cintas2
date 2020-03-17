


export const addToCounter = (store, email) => {
  const newCounterValue = store.state.email.push(email);
  store.setState({ newCounterValue });
};


// state => {
//       const list = state.list.push(state.value);
