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

  it('should throw an error', () => {
    const error = 'an error!';
    const action = create(async (dispatch) => {
      throw error;
    });
    expect(action()).rejects.toMatch(error);
  });
});
