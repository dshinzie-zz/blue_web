import * as sessionTypes from '../constants/session_constants';


export const session_nullState = {
  access_token: '',
  userInfo: {}
};

const SessionReducer = (state = session_nullState, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case sessionTypes.RECEIVE_ACCESS_TOKEN:
      newState = merge({}, state, { userInfo: action.userInfo});
      return newState;
    default:
      return state;
  }
};


export default SessionReducer;