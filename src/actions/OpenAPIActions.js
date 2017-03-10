import { createAction } from 'redux-actions';
import _ from 'lodash';
import refParser from 'json-schema-ref-parser';
import createHistory from 'history/createBrowserHistory';
import { operationMethods } from 'constants';


const history = createHistory();


let load = createAction('LOAD_SPEC', url => {
  let hash = window.location.hash;
  history.replace({ hash: '' });
  return refParser.dereference(url).then(result => {
    // We give each operation a uniqueId if not defined.
    _.forEach(result.paths, (pathItem) => {
      operationMethods.forEach(method => {
        let operation = _.get(pathItem, method);
        if (operation && _.isUndefined(operation.operationId)) {
          operation.operationId = _.uniqueId('operation-');
        }
      });
    });
    // Replace the hash removed above to trigger the browser to jump to the hash.
    _.delay(() => window.location.hash = hash, 200);
    return result;
  });
});


export default {
  load
};
