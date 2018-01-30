const Koa = require('koa');
const fs = require('fs');
const webpack = require("webpack");
const router = require('./routes/index');

const app = new Koa();

// 初始化路由中间件
app.use(router.routes()).use(router.allowedMethods());

app.listen(3001, () => {
    console.log('app starting at 3001');
});
