import { combineReducers } from 'redux';
import types from './types';
import environments from './environments';
import document from './document';
import brands from './brands';


export default combineReducers({
  types,
  environments,
  document,
  brands,
});
