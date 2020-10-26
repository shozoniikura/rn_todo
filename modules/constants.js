import { API_PROTO, API_HOST, API_PORT } from '@env'

const constants = {
  proto: (API_PROTO || 'http://'),
  host: (API_HOST || '10.0.3.2'),
  port: (API_PORT || '14330'),
  pathToDos: '/to_dos.json',
  pathToDoBase: '/to_dos/',
};

constants.urlToDos = `${constants.proto}${constants.host}:${constants.port}${constants.pathToDos}`;
constants.urlToDoBase = `${constants.proto}${constants.host}:${constants.port}${constants.pathToDoBase}`;

export default constants;
