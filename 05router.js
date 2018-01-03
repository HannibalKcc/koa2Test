// 实现原生路由
const Koa = require('koa');
const app = new Koa();
const fs = require('fs');   // 实现流工作

app.use(async (ctx) => {
    let url = ctx.request.url;  // 获取扩展路径，端口号后的url
    let html = await route(url);
    ctx.body = html;
})

// fs读取html文件
function render (page) {
    return new Promise((resolve, reject) => {
        let pageUrl = './page/05router/' + page;
        fs.readFile(pageUrl, 'binary', (err, data) => {
            err ? reject(err) : resolve(data);
        });
    });
}

async function route (url) {
    let page = '404.html';
    switch (url) {
        case '/':
            page = 'index.html';
            break;
        case '/index':
            page = 'index.html';
            break;
        case '/404':
            page = '404.html';
            break;
        default:
            break;
    }
    let html = await render(page);
    return html;
}

app.listen(3001, ()=>{
    console.log('app starting at 3001');
});
