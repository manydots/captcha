var svgCaptcha = require('svg-captcha');
var express = require('express');
var router = express.Router();

router.get('/', async (request, response) => {
    response.render('index', {
        title: ':punch: ~~~',
    })
});

router.get('/captcha', function(req, res) {
    var option = {
        size: 6, //验证码长度
        width: 160,
        height: 80,
        //background: "#f4f3f2", 
        noise: 4,//干扰线条数
        fontSize: 64,
        ignoreChars: '0o1i', //验证码字符中排除'0o1i'
        //color: true // 验证码的字符是否有颜色，默认没有，如果设定了背景，则默认有        
    };

    // 验证码，有两个属性，text是字符，data是svg代码
    var code = svgCaptcha.create(option);
    // 保存到session,忽略大小写
    //req.session["randomcode"] = code.text.toLowerCase();
    console.log(code.text.toLowerCase());
    res.type('svg');
    res.send(code.data);
    
});

module.exports = router;