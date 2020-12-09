

const initialState = {
  token: localStorage.getItem('accessToken')
};

const loginReducer = (state = initialState, action) => {
  if (action.type === 'fetchLogin') {
    console.log("in da reducer", action.payload)
    return {
      ...state,
      token: action.payload,
    }
  }
  return state;
};

export default loginReducer;