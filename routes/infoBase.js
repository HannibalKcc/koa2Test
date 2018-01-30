const router = require('koa-router')(); // 这里不要加new
const conInfoBase = require('./../controller/infoBase');

const routers = router
    .get('/infoBase', conInfoBase.get)
    .get('/todo', (ctx) => {
        ctx.body = 'c199623';
    });

module.exports = {
    name: '/infoBase',
    routers
}