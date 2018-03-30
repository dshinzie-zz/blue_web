import * as sessionTypes from '../constants/session_constants';


export const registerUser = () => {
  return
}

export const receiveAccessToken = (keys) => ({
  type: sessionTypes.RECEIVE_ACCESS_TOKEN,
  keys
});