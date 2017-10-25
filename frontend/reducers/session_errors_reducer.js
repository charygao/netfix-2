import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER, CLEAR_ERRORS } from '../actions/session_actions';

const SessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_ERRORS:
      return action.errors;

    case RECEIVE_CURRENT_USER:
      return [];

    case CLEAR_ERRORS:
      return [];

    default:
      return state;
  }
};

export default SessionErrorsReducer;
