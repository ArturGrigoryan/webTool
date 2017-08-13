'use strict';

const Router = require('koa-router');
const router = new Router();

router.get('/home', async function(ctx){
    await ctx.render('home', {name: 'Artur'});
});

router.get('/fb', async function(ctx){
    await ctx.render('config-fb', {name: 'Artur'});
});

module.exports = router;