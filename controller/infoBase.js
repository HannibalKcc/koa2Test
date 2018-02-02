module.exports = {
    async get (ctx) {
        let res = {
            name: "koa2Test",
            description: "测试koa2的ajax反馈",
        };
        ctx.body = res;
    },
    async testPost (ctx) {
        // console.log(ctx.request.body);  // <{fileds: {}, files: {}}>
        var body = ctx.request.body.fields ? ctx.request.body.fields : ctx.request.body;
        ctx.body = {...body, title: 'Hello Post'};
    }
};
