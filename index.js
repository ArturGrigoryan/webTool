'use strict';

const Router = require('koa-router');
const router = new Router();

router.get('/home', function(ctx){
    console.log(ctx);
});