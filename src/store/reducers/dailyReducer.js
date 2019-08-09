const initState = {
  dailys: [],
};

const dailyReducer = (state = initState, action) => {
  if (action.type === "UPDATE_DAILYS") {
    return {
      ...state,
      dailys: action.dailys,
    };
  }
  return state;
};

export default dailyReducer;
