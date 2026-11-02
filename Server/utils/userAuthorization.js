const createResult = require('../utils/result')
const jwt = require('jsonwebtoken')
const config = require('../utils/config')

function userAuthorization(req, res, next)
{
    if (req.path === '/user/signin' || req.path === '/user/signup' || req.path === '/food')
        next();
    else
    {
        const token = req.headers.token;
        if (token)
        {
            try{
                const payload = jwt.verify(token,config.SECRET_KEY)
                req.headers.uid = payload.uid
                next()
            }
            catch (err)
            {
                res.send(createResult(null, 'Token is invalid! :('))
            }
        }
        else
            res.send(createResult(null,'Token is Missing! :('))
    }

}

module.exports = userAuthorization;