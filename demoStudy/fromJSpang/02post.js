const Koa = require('koa');
const app = new Koa();

app.use(async (ctx) => {
    if (ctx.url === '/' && ctx.method === 'GET') {
        // 显示表单页面
        let html = `
            <h1>Koa2 request POST</h1>
            <form method="POST" action="/">
                <p>userName</p>
                <input type="text" placeholder="请输入用户名" name="userName"/> <br/>
                <button type="submit">submit</button>
            </form>
        `;
        ctx.body = html;
    } else if (ctx.url === '/' && ctx.method === 'POST') {
        ctx.body = '接收到POST请求';
    } else {
        ctx.body = '<h1>404!</h1>';
    }
});

app.listen(3001, () => {
    console.log('app starting at 3001');
});