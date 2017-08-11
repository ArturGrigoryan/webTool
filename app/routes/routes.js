'use strict';

const Router = require('koa-router');
const router = new Router();

router.get('/home', async function(ctx){
    await ctx.render('home', {name: 'Artur'});
});

module.exports = router;