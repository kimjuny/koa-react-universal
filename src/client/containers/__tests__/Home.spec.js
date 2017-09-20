import Home from '../Home';
import { snapshot } from '../../../shared/test';

describe('components/containers/Home', () => {
  snapshot({
    component: Home,
    name: 'Home',
  });
});
