const Koa = require('koa');
const fs = require('fs');
const webpack = require("webpack");
const bodyParser = require('koa-bodyparser');   // 不包含multipart/form-data解析
const router = require('./routes/index');

const app = new Koa();

app.use(bodyParser({}));

// 初始化路由中间件
app.use(router.routes()).use(router.allowedMethods());

app.listen(3001, () => {
    console.log('app starting at 3001');
});
