const Koa = require('koa');
const views = require('koa-views');
const path = require('path');   // node本身有
const app = new Koa();

app.use(views(path.join(__dirname, './views/11views'), {
    extension: 'ejs'    // 声明使用的模板，默认html
}));

app.use(async (ctx) => {
    let title = 'Hello World!';
    await ctx.render('index', {title});
});

app.listen(3001, () => {
    console.log('app starting at 3001');
})