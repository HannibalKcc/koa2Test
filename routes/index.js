const Router = require('koa-router');

const infoBase = require("./infoBase");

const routerList = [infoBase];

let routerMain = new Router();
routerList.forEach((item, index)=>{
    routerMain.use(item.name, item.routers.routes(), item.routers.allowedMethods());
});

module.exports = routerMain;