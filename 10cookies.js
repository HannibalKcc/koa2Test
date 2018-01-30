const Koa = require('koa');
const app = new Koa();
app.use(async (ctx) => {
    if (ctx.url === '/index') {
        ctx.cookies.set(
            'MyName',
            'huhansan',
            {
                domain: '127.0.0.1', // 写cookie所在的域名
                path: '/index',       // 写cookie所在的路径
                // maxAge与expires取最短，expires小于当前时间则无效
                maxAge: 1000 * 10,   // cookie有效时长
                expires: new Date('2016-12-31'), // cookie失效时间
                httpOnly: false,  // 是否只用于http请求中获取
                overwrite: false  // 是否允许重写
            }
        );
        ctx.body = 'Hello, cookies already set up!';
    } else {
        if (ctx.cookies.get('MyName')) {
            ctx.body = 'Hello' + ctx.cookies.get('MyName');
        } else {
            ctx.body = 'can t get any cookies';
        }
    }
});

app.listen(3001, () => {
    console.log('app starting at 3001');
})