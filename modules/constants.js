const constants = {
  proto: 'http://',
  host: '10.0.3.2:14330',
  pathToDos: '/to_dos.json',
  pathToDoBase: '/to_dos/',
};

constants.urlToDos = constants.proto + constants.host + constants.pathToDos;
constants.urlToDoBase = constants.proto + constants.host + constants.pathToDoBase;

export default constants;
