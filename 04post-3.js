// 用koa中间件获取post body
const Koa = require('koa');
const app = new Koa();
const bodyparser = require('koa-bodyparser');

// 使用bodyparser中间件，新增了ctx.requset.body属性
app.use(bodyparser());

app.use(async (ctx) => {
    if (ctx.url === '/' && ctx.method === 'GET') {
        // 显示表单页面
        let html = ` 
            <h1>Koa2 request POST</h1>
            <form method="POST" action="/">
                <p>userName</p>
                <input type="text" placeholder="请输入用户名" name="userName"/> <br/>
                <p>age</p>
                <input type="text" placeholder="请输入年龄" name="age"/> <br/>
                <button type="submit">submit</button>
            </form>
        `;
        ctx.body = html;
    } else if (ctx.url === '/' && ctx.method === 'POST') {
        ctx.body = ctx.request.body;    // 中间件处理
    } else {
        ctx.body = '<h1>404!</h1>';
    }
});

// 启动
app.listen(3001, () => {
    console.log('app starting at 3001');
});