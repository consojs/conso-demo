let {Annotation} = require('conso');
let User = require('../module/User');

let {route, get, post, resource} = Annotation;

@route('/home')
class index {

    @resource(User, '张三')
    user;

    @get('/test1')
    test1(ctx, next) {
        console.log(ctx.db)
        ctx.db.find({id:1});
        console.log()
        ctx.render('index', {title: 'conso'});
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
