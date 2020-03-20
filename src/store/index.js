import React from "react";
import useGlobalHook from "use-global-hook";

import * as actions from "../actions";

const initialState = {
  user: [],
  location: [],
  inventory: [],
  open:false,
  // highlighted: {
  //   guid: '',
  //   email: '',
  //   last: '',
  //   first: '',
  //   pass: '',
  // },
  highlighted: ''
};

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;
