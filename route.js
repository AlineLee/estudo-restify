function Route(server, restify) {
  function userV1(req, res, next) {
    res.send('Usuário: João');
    return next();
  }

  function userV2(req, res, next) {
    res.send({ usuario: 'Manoel' });
    return next();
  }

  server.get('/user', restify.plugins.conditionalHandler([
    { version: '1.1.3', handler: userV1 },
    { version: '2.0.0', handler: userV2 }
  ]));

  // server.get('/user', function(req, res, next) {
  //   res.send('Usuário: Marcelo');
  //   return next();
  // });

  server.get('/uses/config', function(req, res, next) {
    res.send('Configurações do usuário');
    return next();
  });
};

module.exports = Route;
