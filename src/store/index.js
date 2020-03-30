import React from "react";
import useGlobalHook from "use-global-hook";

import * as actions from "../actions";

const initialState = {
  user: [],
  location: [],
  inventory: [],
  open:false,
  machine1: {
    Slot1: '',
    Slot2: '',
    Slot3: '',
    Slot4: '',
    Slot5: '',
    Slot6: '',
    Slot7: '',
    Slot8: '',
  },
  // highlighted: '',
  value: 0
};

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;
