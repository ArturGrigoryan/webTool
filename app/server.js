'use strict';

const Koa = require('koa');
const koaStatic = require('koa-static');
const views = require('koa-views');
const session = require('koa-session');
const path = require('path');

const server = new Koa();

const router = require("./routes/routes.js");
const passport = require('./services/passport');
const config = require('../config/config');

server
    .use(views(path.join(__dirname, '/view'), {extension: 'ejs'}))
    .use(koaStatic('./public'))
    .use(session(server))
    .use(router.routes())
    .use(router.allowedMethods());

module.exports = server;
