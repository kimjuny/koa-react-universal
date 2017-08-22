
// const isNode = (typeof process !== 'undefined') &&
//   (typeof process.versions.node !== 'undefined');

/**
 * Action creator,
 * with centralized error-handling for redux-thunk actions.
 * @param {Function(dispatch)} action
 * @return {Function(dispatch)} wrapped up async action
 */
export default function create(action) {
  return async (dispatch) => {
    try {
      await action(dispatch);
    } catch (error) {
      throw error;
    }
  };
}
