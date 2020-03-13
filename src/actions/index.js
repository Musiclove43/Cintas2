


export const addToCounter = (store, email) => {
  const newCounterValue = store.state.email + email;
  store.setState({ email: email });
};
