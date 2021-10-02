import {Reducer} from 'redux';
import {QuestionsTypes, QuestionsState} from './types';

const INITIAL_STATE: QuestionsState = {
  loading: false,
  questionsList: {
    category: '',
    type: '',
    difficulty: '',
    question: '',
    correct_answer: '',
    incorrect_answers: [''],
  },
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

    default:
      return state;
  }
};

export default reducer;
