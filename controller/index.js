let {Annotation} = require('conso');
let User = require('../module/User');

let {route, get, post, resource} = Annotation;

@route('/home')
class Index {

    @resource
    user;

    @get('/test1')
    test1(req, res, next) {
        console.log(this.user.name);
        res.render('index', {title: 'Conso'});
    }

    @get('/test2')
    test2(req, res, next) {
        res.json({username: this.user.name});
    }

    @get('/test3')
    test3(req, res, next) {
        this.user.name = 'lisi';
        res.json({username: this.user.name});
    }
}
