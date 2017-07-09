module.exports = {
    identity: 'user', //集合的 id
    connection: 'client', //使用的连接数
    schema: true, //强制模式
    //属性(配置) ---"类似"于 Mongoose 中的 Schema
    attributes: {
        username: {
            type: 'string',
            // 校验器
            required: true,
            minLength: 6,
            maxLength: 17
        },
        password: {
            type: 'string',
            //校验器
            required: true,
            minLength: 6
        },
        birthday: {
            type: 'date',
            after: new Date('1990-01-01'),
            before: function () {
                return new Date();
            }
        },
        address: {
            type: 'string',
        },
        createTime: {
            type: 'date',
            //在某个时间点之前
            before: '2020-01-01',
            //在某个时间点之后
            after: function () {
                return new Date();
            }
        }
    },
    // 生命周期回调 --类似于Mongoose中间件
    beforeCreate: function (value, cb) {
        value.createTime = new Date();
        value.address = 'guangdongshenzhen';

        console.log('beforeCreate executed');
        return cb();
    }
};