import {Reducer} from 'redux';
import {UserTypes, UserState} from './types';

const INITIAL_STATE: UserState = {
  currentAnswer: {
    id: undefined,
    option: '',
  },
};

const reducer: Reducer<UserState> = (
  state = INITIAL_STATE,
  {type, payload},
) => {
  switch (type) {
    case UserTypes.SAVE_USER_ANSWER:
      return {
        ...state,
        option: payload.option,
      };
    case UserTypes.RESET_ANSWER:
      return {
        ...state,
        currentAnswer: INITIAL_STATE.currentAnswer,
      };
    case UserTypes.RESET_INFO:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default reducer;
