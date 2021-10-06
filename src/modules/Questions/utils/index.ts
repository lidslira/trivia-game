import {decode} from 'html-entities';
import {OptionsProps} from '../view';

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
    const answers = _(decodedIncorrect.concat(decode(correctAnswer)));
    const newAnswersArr = answers?.map((item, index) => {
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
