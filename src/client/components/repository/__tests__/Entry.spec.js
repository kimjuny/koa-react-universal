import Entry from '../Entry';
import { snapshot } from '../../../../shared/test';

describe('components/repository/Entry', () => {
  snapshot({
    component: Entry,
    name: 'Entry',
    props: {
      repository: {
        full_name: 'full_name',
        description: 'description',
        topics: [],
        update_at: 'update_at',
        language: 'language',
        stargazers_count: 100,
      },
    },
  });
});
