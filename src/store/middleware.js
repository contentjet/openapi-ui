import _ from 'lodash';


export const promiseMiddleware = store => next => action => {
  // This Redux middleware detects if an action's payload is a Promise
  // (specifically if it's 'thenable') and dispatches the result of the
  // Promise as a new action back into the store, appending either
  // '_COMPLETED' or '_FAILED' to the original action's type.
  if (_.isFunction(_.get(action.payload, 'then'))) {
    action.payload.then(
      (result) => {
        store.dispatch(_.assign({}, action, { type: `${action.type}_COMPLETED`, payload: result }));
        return result;
      },
      (error) => {
        store.dispatch(_.assign({}, action, { type: `${action.type}_FAILED`, payload: error }));
        return error;
      }
    );
  }
  return next(action);
};
