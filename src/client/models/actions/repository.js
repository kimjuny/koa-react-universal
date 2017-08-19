import create from './create';
import API from '../../../shared/http/api';

export const listRepositories = ({ query }) =>
  create(async (dispatch) => {
    dispatch({
      type: 'setRepositories',
      payload: {
        sync: false,
        query,
      },
    });
    const result = await API.listRepositories({ query });
    dispatch({
      type: 'setRepositories',
      payload: {
        data: result.items,
        sync: true,
        total: result.total_count,
        query,
      },
    });
  });
