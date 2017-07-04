let {Annotation} = require('conso');
let User = require('../module/User');

let {route, get, post, resource} = Annotation;

@route('/home')
class index {

    @resource(User, '张三')
    user;

    @get('/test1')
    test1(ctx, next) {
        console.log(this.user.name);
        // ctx.render('index', {title: 'conso'});
        ctx.end('qweqwe')
        // ctx.redirect('https://baidu.com');
    }

    @get('/test2')
    test2(ctx, next) {
        ctx.jsonp({username: this.user.name});
    }

    @get('/test3')
    test3(ctx, next) {
        this.user.name = 'lisi';
        ctx.json({username: this.user.name});
    }
}
