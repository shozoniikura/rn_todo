const constants = {
  proto: 'http://',
  host: '10.0.3.2:14330',
  pathToDos: '/to_dos.json',
};

constants.urlToDos = constants.proto + constants.host + constants.pathToDos;

export default constants;
