let {Annotation} = require('conso');
let User = require('../module/User');

let {route, get, post, model} = Annotation;

@route('/home')
class index {

    @model(User)
    user;

    @get('/test1')
    async test1(ctx, next) {
        ctx.file('F:/project/conso-demo/controller/index.js');
    }

    @get('/test2')
    test2(ctx, next) {
        ctx.jsonp({username: this.user.name});
        // ctx.end('qweqwe')
        // ctx.redirect('https://baidu.com');
    }

    @get('/test3')
    test3(ctx, next) {
        this.user.name = 'lisi';
        ctx.json({username: this.user.name});
    }
}
