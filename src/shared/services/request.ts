import api from '~/shared/services/api';

interface ParamsProps {
  id: number;
  difficultyLevel?: string;
}

export default {
  async get(path?: string, params?: ParamsProps, id?: string) {
    const url = `${path}${id ? `/${id}` : ''}${
      params
        ? `${params.id}&difficulty=${params.difficultyLevel}&type=multiple`
        : ''
    }`;

    return api.get(url);
  },
};

/*
padrão do path das questões:
https://opentdb.com/api.php?amount=10&category=10&difficulty=easy&type=multiple
*/
