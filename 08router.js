const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();

let home = new Router();
home
    .get('/ass', async (ctx) => {
        ctx.body = 'home ass page';
    })
    .get('/todo', async (ctx) => {
        ctx.body = 'home todo page';
    })

let page = new Router();
page
    .get('/ass', async (ctx) => {
        ctx.body = 'page ass page';
    })
    .get('/todo', async (ctx) => {
        ctx.body = 'page todo page';
    })

// 父级路由
let router = new Router();
router.use('/home', home.routes(), home.allowedMethods());
router.use('/page', page.routes(), page.allowedMethods());

app
    .use(router.routes())
    .use(router.allowedMethods());  // 遵循get而非post规则

app.listen(3001, () => {
    console.log('app starting at 3001');
})
