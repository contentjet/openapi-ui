import { createSelector } from 'reselect';


export const getSpec = (state) => state.getIn(['openapi', 'spec']);


export const isLoading = (state) => state.getIn(['openapi', 'isLoading']);


export const getInfo = createSelector(getSpec, spec => spec.get('info'));


export const getServers = createSelector(getSpec, spec => spec.get('servers'));


export const getPaths = createSelector(getSpec, spec => spec.get('paths'));


export const getSecurity = createSelector(getSpec, spec => spec.get('security'));


export const getTags = createSelector(getSpec, spec => spec.get('tags'));


export const getExternalDocs = createSelector(getSpec, spec => spec.get('externalDocs'));


export default {
  isLoading,
  getInfo,
  getServers,
  getPaths,
  getSecurity,
  getTags,
  getExternalDocs
};
