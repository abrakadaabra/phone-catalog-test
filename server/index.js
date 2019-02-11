import jsonServer from 'json-server';
import express from 'express';
import path from 'path';
import db from './db.json';
import config from './json-server.json';
const server = jsonServer.create();
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults(config);
server.set("port", process.env.PORT || 3001);

server.use('/static', express.static(path.join(__dirname, 'public')))

// Avoid CORS issue
server.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

server.use(middlewares);

server.use(jsonServer.rewriter({
  '/api/phones/:id': '/api/phones/:id?_embed=details'
}));

server.use('/api', router);

server.listen(server.get("port"), () => {
  console.log(`Find the server at: http://localhost:${server.get("port")}/`); // eslint-disable-line no-console
});