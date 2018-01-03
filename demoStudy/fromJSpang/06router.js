// 利用koa-router中间件完成路由工作
const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router
    .get('/', (ctx, next) => {
        ctx.body = 'hello world'
    })
    .get('/todo',(ctx,next)=>{
        ctx.body = 'hello todo page';
    })
    .get('*', (ctx, next) => {
        ctx.body = '404!!!!';   // 注意顺序，404路由必须放在最后
    })

app
    .use(router.routes())
    .use(router.allowedMethods());  // 遵循get而非post规则

app.listen(3001, () => {
    console.log('app starting at 3001');
})
