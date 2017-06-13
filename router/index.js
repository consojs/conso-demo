let {Router} = require('conso');
let router = new Router();

@router.route('/')
class Index {
    constructor() {
    }

    @router.get('/')
    test1(req, res, next) {
        console.log(req.get);
        res.render('index', {title: 'Conso'});
    }

    @router.get('/test2')
    test2(req, res, next) {
        res.json({data: 'this is a json'});
    }

    @router.post('/test3')
    test3(req, res, next) {
        console.log('router:');
        console.log(req.body);
        res.json(req.body);
    }
}
