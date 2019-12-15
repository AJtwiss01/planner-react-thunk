const initState = {};
const authRecucer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log(action.message);
      return {
        ...state,
        authError: action.message
      };
    case "LOGIN_SUCCESS":
      console.log("LOGIN_SUCCESS");
      return {
        ...state,
        authError: null
      };
    case "SIGNOUT_SUCCESS":
      console.log("SIGNOUT_SUCCESS");
      return state;
    case "SIGNUP_SUCCESS":
      console.log('SIGNUP_SUCCESS')
      return {
        ...state,
        authError: null
      };
    case  "SIGNUP_ERROR":
    console.log('SIGNUP_ERROR')
    console.log(action.message)
    return {
        ...state,
        authError: action.message
    }
    
    default:
      return state;
  }
};

export default authRecucer;
