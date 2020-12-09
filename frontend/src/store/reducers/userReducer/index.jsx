const initialState = {
  users: [],
};
console.log();
const userReducer = (state = initialState, action) => {
  if (action.type === 'fetchUsers') {
    console.log("in da reducer", action.payload)
    return {
      ...state,
      users: action.payload
    }
  }
  return state;
};

export default userReducer;
