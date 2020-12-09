const initialState = {
  user: [],
};
console.log();
const oneUserReducer = (state = initialState, action) => {
  if (action.type === 'fetchOneUser') {
    console.log("in da reducer", action.payload)
    return {
      ...state,
      user: action.payload
    }
  }
  return state;
};

export default oneUserReducer;