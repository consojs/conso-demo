let {Annotation} = require('conso');
let User = require('../module/User');

let {route,get, post, resource} = Annotation;

@route('/home2')
class Index2 {

    // @resource
    // user = new User('zhangsan');

    @get('/test12')
    test1(req, res, next) {
        console.log(this.user.name);
        res.render('index', {title: 'Conso'});
    }

    @get('/test22')
    test2(req, res, next) {
        res.json({username: this.user.name});
    }

    @get('/test32')
    test3(req, res, next) {
        this.user.name = 'lisi';
        res.json({username: this.user.name});
    }
}
