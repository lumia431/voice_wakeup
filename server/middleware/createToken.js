var jwt = require('jsonwebtoken')

module.exports = function(name) {
    const token = jwt.sign({
        name: name
    }, 'secret', { expiresIn: '1d' });
    console.log('服务器token:' + token)
    return token;

}