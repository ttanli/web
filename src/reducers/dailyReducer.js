const initState = {
  dailys: [],
};

const shirtsReducer = (state = initState, action) => {
  if (action.type === "UPDATE_DAILYS") {
    return {
      ...state,
      dailys: action.dailys,
    };
  }
  return state;
};

export default shirtsReducer;
