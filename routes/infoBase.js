const router = require('koa-router')(); // 这里不要加new
const koaBody = require('koa-body');    // 局部处理multipart请求

const conInfoBase = require('./../controller/infoBase');

const routers = router
    .get('/infoBase', conInfoBase.get)
    .post('/testPost',
        async (ctx, next) => {
            if (ctx.request.is('multipart/*')) return await koaBody({multipart: true})(ctx, next);  // 了解中间件原理，灵活调用
            next();
        },   // 设置
        conInfoBase.testPost
    );

module.exports = {
    name: '/infoBase',
    routers
};