import {decode} from 'html-entities';
import {
  incrementRightEasyStreak,
  incrementRightHardStreak,
  incrementRightMediumStreak,
  incrementRightStreak,
  incrementWrongEasyStreak,
  incrementWrongHardStreak,
  incrementWrongMediumStreak,
  incrementWrongStreak,
  savePreviousAnswer,
  setScoreAction,
} from '~/shared/store/ducks/user/actions';
import {UserState} from '~/shared/store/ducks/user/types';
import {OptionsProps} from '../view';
import user from '~/shared/store/';
import questions from '~/shared/store';
import {getQuestionsAction} from '../store/ducks/questions/actions';

export const _ = (array: OptionsProps[]) =>
  [...array].sort(() => Math.random() - 0.7);

export const allOptionsMixed = (
  incorrectAnswers: string[] | string | undefined,
  correctAnswer: string | undefined,
) => {
  if (incorrectAnswers !== undefined && correctAnswer !== undefined) {
    const decodedIncorrect = incorrectAnswers.map((item: string) => {
      const decoded = decode(item);
      return decoded;
    });
    const answers: OptionsProps[] = decodedIncorrect.concat(
      decode(correctAnswer),
    );
    const shuffled = _(answers);
    const newAnswersArr: OptionsProps[] = shuffled?.map((item, index) => {
      const newItem = {
        id: index,
        answer: item,
      };
      return newItem;
    });
    return newAnswersArr;
  }
  return [];
};

export const verifyAnswers = (
  correctAnswer: string | undefined,
  userAnswer: string | undefined,
  questionType: string | undefined,
  userInfo: UserState | undefined,
  categoryId: string | undefined,
) => {
  let isItRight;
  if (
    correctAnswer !== undefined &&
    userAnswer !== undefined &&
    questionType !== undefined &&
    userInfo !== undefined &&
    categoryId !== undefined
  ) {
    if (correctAnswer === userAnswer) {
      isItRight = true;
      if (userInfo.previousAnswerResult === undefined) {
        user.dispatch(incrementRightStreak(userInfo.streak.rightAnswers + 1));
      } else if (userInfo.previousAnswerResult === true) {
        user.dispatch(incrementRightStreak(userInfo.streak.rightAnswers + 1));
        if (userInfo.streak.rightAnswers % 3 === 0) {
          switch (questionType) {
            case 'easy':
              questions.dispatch(getQuestionsAction(categoryId, 'medium'));
              break;
            case 'medium':
              questions.dispatch(getQuestionsAction(categoryId, 'hard'));
              break;
            case 'hard':
              questions.dispatch(getQuestionsAction(categoryId, questionType));
              break;
            default:
              break;
          }
          user.dispatch(incrementRightStreak(0));
        }
      } else {
        user.dispatch(incrementRightStreak(0));
      }
      user.dispatch(savePreviousAnswer(isItRight));
    } else {
      isItRight = false;

      switch (userInfo.previousAnswerResult) {
        case undefined:
          user.dispatch(incrementWrongStreak(userInfo.streak.wrongAnswers + 1));
          break;
        case true:
          user.dispatch(incrementWrongStreak(0));
          break;
        case false:
          user.dispatch(incrementWrongStreak(userInfo.streak.wrongAnswers + 1));
          if (userInfo.streak.wrongAnswers % 3 === 0) {
            switch (questionType) {
              case 'easy':
                questions.dispatch(
                  getQuestionsAction(categoryId, questionType),
                );
                break;
              case 'medium':
                questions.dispatch(getQuestionsAction(categoryId, 'easy'));
                break;
              case 'hard':
                questions.dispatch(getQuestionsAction(categoryId, 'medium'));
                break;
              default:
                break;
            }
            user.dispatch(incrementWrongStreak(0));
          }
          break;
        default:
          break;
      }
      user.dispatch(savePreviousAnswer(isItRight));
    }

    switch (questionType) {
      case 'easy':
        if (isItRight) {
          user.dispatch(
            incrementRightEasyStreak(userInfo.easy.rightAnswers + 1),
          );
          break;
        }
        user.dispatch(incrementWrongEasyStreak(userInfo.easy.wrongAnswers + 1));
        break;
      case 'medium':
        if (isItRight) {
          user.dispatch(
            incrementRightMediumStreak(userInfo.medium.rightAnswers + 1),
          );
          break;
        }
        user.dispatch(
          incrementWrongMediumStreak(userInfo.medium.wrongAnswers + 1),
        );
        break;
      case 'hard':
        if (isItRight) {
          user.dispatch(
            incrementRightHardStreak(userInfo.hard.rightAnswers + 1),
          );
          break;
        }
        user.dispatch(incrementWrongHardStreak(userInfo.hard.wrongAnswers + 1));
        break;
      default:
        break;
    }
  }
};
