module.exports = {
    async get (ctx) {
        let res = {
            name: "koa2Test",
            description: "测试koa2的ajax反馈",
        };
        ctx.body = res;
    }
};
