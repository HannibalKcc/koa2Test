const Koa = require('koa');
const app = new Koa();
app.use(async (ctx) => {
    let url = ctx.url;
    // 从request中接收Get请求
    let requset = ctx.request;
    let req_query = requset.query;
    let req_querystring = requset.querystring;

    // 从上下文中直接获取Get请求
    let ctx_query = ctx.query;
    let ctx_querystring  = ctx.queryString;

    ctx.body = {
        url,
        req_query,
        req_querystring,
        ctx_query,
        ctx_querystring
    }
});
app.listen(3001, () =>{
    console.log('app starting at 3001');
});
