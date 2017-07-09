let {Annotation} = require('conso');
let User = require('../module/User');

let {route, get, post, model} = Annotation;

@route('/home')
class index {

    @model(User)
    user;

    @get('/test1')
    async test1(ctx, next) {

        let message = {
            username: 'tianzi',
            password: '654321',
            birthday: '1995-02-03',
            // address: 'shenzhen'
        };
        //创建
        let msg = await this.user.create(message);
        console.log(msg);
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
