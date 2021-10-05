import {Reducer} from 'redux';
import {QuestionsTypes, QuestionsState} from './types';

const INITIAL_STATE: QuestionsState = {
  loading: false,
  questionsList: [],
  index: 0,
  score: 0,
};

const reducer: Reducer<QuestionsState> = (
  state = INITIAL_STATE,
  {type, payload},
) => {
  switch (type) {
    case QuestionsTypes.GET_QUESTIONS:
      return {
        ...state,
        loading: true,
      };
    case QuestionsTypes.GET_QUESTIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        questionsList: payload.questionsList,
      };
    case QuestionsTypes.GET_QUESTIONS_ERROR:
      return {
        ...state,
        loading: false,
      };
    case QuestionsTypes.SET_INDEX:
      return {
        ...state,
        index: payload.index,
      };

    case QuestionsTypes.SET_SCORE:
      return {
        ...state,
        score: payload.score,
      };

    default:
      return state;
  }
};

export default reducer;
