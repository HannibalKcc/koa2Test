const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();
router.get('/', (ctx) => {
    ctx.body = ctx.query;   // 获取url参数
})

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3001, () => {
    console.log('app starting at 3001');
})