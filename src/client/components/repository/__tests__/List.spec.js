import List from '../List';
import { snapshot } from '../../../../shared/test';
import configureStore from '../../../models/store';

describe('components/repository/List', () => {
  const store = configureStore({
    repository: {
      repositories: {
        total: 1,
        data: [
          {
            full_name: 'full_name',
            description: 'description',
            topics: [],
            update_at: 'update_at',
            language: 'language',
            stargazers_count: 100,
          },
        ],
      },
    },
  });

  snapshot({
    component: List,
    name: 'List',
    store,
  });
});
