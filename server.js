var restify = require('restify');

function respond(req, res, next) {
  res.send('Olá ' + req.params.name);
  next();
}

var server = restify.createServer();

server.pre(function(req, res, next) {
    console.log('PRE: Antes de qqr request');
    return next();
});

server.use(restify.plugins.bodyParser());
server.use(function(req, res, next) {
    console.log('USE: Apenas após ser roteado');
    if (req.headers.info == '123') {
      return next();
    } else {
      return next(false);
    }
  }
);

server.get('/hello/:name', respond);

server.get('/', function(req, res, next) {
  console.log('aqui b');
  res.send('Página Inicial')
  return next();
});

server.post('/newuser', function(req, res, next) {
  console.log('body', req.body);
  res.send('Post - Nome = ' + req.body.name);
  return next();
});

// server.get('/user', function(req, res, next) {
//   res.send('usuário: João ');
//   return next();
// });

require('./route.js')(server, restify);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
