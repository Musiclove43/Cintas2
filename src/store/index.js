import React from "react";
import useGlobalHook from "use-global-hook";

import * as actions from "../actions";

const initialState = {
  user: [],
  location: [],
  inventory: [{id: 1387568269588,
    title: "Scrub Shirt",
    qty: "98098",
    credits: "98098",
    sku: "098098",
    file: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAr4A",
    size: "Small"}],
    machines: [{machine1: {
      slot1: '',
      slot2: 'this has info',
      slot3: '',
      slot4: '',
      slot5: '',
      slot6: '',
      slot7: '',
      slot8: '',
    }},  {machine2: {
      slot1: '',
      slot2: '',
      slot3: '',
      slot4: '',
      slot5: '',
      slot6: '',
      slot7: '',
      slot8: '',
    }}],
    token:'',
    open:false,
    highlighted: '',
    activeEdit: '',
    account: '',
    value: 0,
    userSwipe: 0,
    location: '',
    setmachine: '',
    setCells: [{cellNum: "cell1"},{inventory: "cell2"},{inventory: "cell3"},{inventory: "cell4"},{inventory: "cell5"},{inventory: "cell6"},{inventory: "cell7"}],
    cellCap: ''
  };

  const useGlobal = useGlobalHook(React, initialState, actions);

  export default useGlobal;
