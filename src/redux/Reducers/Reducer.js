import { USER_LOGIN_FAIL, USER_LOGIN_SUCESS, USER_LOGOUT } from '../actions/ActionLogin.js'

const initialState = {
  user: {},
  isLogin: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCESS:
      return {
        user: action.payload,
        isLogin: true
      };
    case USER_LOGIN_FAIL:
      return {
        ...state,
        user: null,
        isLogin: false
      };
    case USER_LOGOUT:
      return {
        ...state,
        user: null,
        isLogin: false
      };
    default:
      return state
  }
};

export default reducer