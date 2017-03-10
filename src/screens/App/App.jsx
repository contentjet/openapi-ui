import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import OpenAPI from 'lib/components/openapi/OpenAPI';
import OpenAPISelectors from 'selectors/OpenAPISelectors';
import s from './App.css';


function App(props) {

  if (props.isLoading) return null;

  return (
    <div className={s.app}>
      <div className={s.sidebar}></div>
      <div className={s.body}>
        <OpenAPI
          info={props.info}
          servers={props.servers}
          paths={props.paths}
          security={props.security}
          externalDocs={props.externalDocs}
        />
      </div>
    </div>
  );

}
App.propTypes = {
  isLoading: PropTypes.bool,
  info: PropTypes.object.isRequired,
  servers: PropTypes.array,
  paths: PropTypes.object.isRequired,
  security: PropTypes.array,
  externalDocs: PropTypes.object,
};


const mapStateToProps = (state) => {
  return {
    isLoading: OpenAPISelectors.isLoading(state),
    info: OpenAPISelectors.getInfo(state).toJS(),
    servers: OpenAPISelectors.getServers(state).toJS(),
    paths: OpenAPISelectors.getPaths(state).toJS(),
    security: OpenAPISelectors.getSecurity(state).toJS(),
    externalDocs: OpenAPISelectors.getExternalDocs(state).toJS(),
  };
};

export default connect(mapStateToProps)(App);
