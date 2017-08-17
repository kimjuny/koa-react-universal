import create from './create';
import API from '../../../shared/http/api';

export const listRepositories = ({ query }) => {
  return create(async (dispatch) => {
    dispatch({
      type: 'setRepositories',
      payload: { sync: false },
    });
    const result = await API.listRepositories({ query });
    dispatch({
      type: 'setRepositories',
      payload: {
        data: result.items,
        sync: true,
        total: 0,
        query,
      },
    });
  });
}