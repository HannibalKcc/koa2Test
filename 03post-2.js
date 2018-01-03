// 更进一步的用node原生获取POST参数
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
                <p>age</p>
                <input type="text" placeholder="请输入年龄" name="age"/> <br/>
                <button type="submit">submit</button>
            </form>
        `;
        ctx.body = html;
    } else if (ctx.url === '/' && ctx.method === 'POST') {
        let postdata = await parsePostData(ctx);
        let jsonData = transStr2Object(postdata);
        ctx.body = jsonData;
    } else {
        ctx.body = '<h1>404!</h1>';
    }
});

// 处理post请求的参数
function parsePostData (ctx) {
    return new Promise((resolve, reject) => {
        try {
            let postdata = "";
            ctx.req.addListener("data", (data) => {
                postdata += data;   // decodeURIComponent()解码中文等文字
            });
            ctx.req.on('end', () => {
                resolve(postdata);
            });
        } catch (error) {
            reject(error);
        }
    });
}
function transStr2Object (str) {
    let res = {};
    let strList = str.split('&');
    for (let [index, val] of strList.entries()) {
        let [itemKey, itemVal] = [val.split('=')[0], val.split('=')[1]]
        res[itemKey] = decodeURIComponent(itemVal);
    }
    return res;
}

// 启动
app.listen(3001, () => {
    console.log('app starting at 3001');
});