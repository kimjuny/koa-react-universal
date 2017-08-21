import create from '../create';
import configureStore from '../../store';

const store = configureStore();
const dispatch = store.dispatch;

describe('models/actions/create', () => {
  it('should create an async action (promise)', () => {
    const action = create(async (dispatch) => {});
    expect(action).toBeDefined();
    expect(action()).toBeInstanceOf(Promise);
  });
});
