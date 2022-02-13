const jwt = require('jsonwebtoken')
const config = require('../config/secret')


const verification = () => {
    return (req, res, next) => {
        const role = req.body.role
        const tokenWithBearer = req.headers.authorization
        if(tokenWithBearer){
            const token = tokenWithBearer.split(' ')[1]
            // verification
            jwt.verify(token, config.secret, (err, encoded) => {
                if(err){
                    return res.status(401).send({statusCode: 401, message: 'Token not found!'})
                }else{
                    if(role == 2){
                        req.auth = encoded
                        next()
                    }else{
                        return res.status(401).send({statusCode: 401, message: 'filed otorization role !'})
                    }
                }
            })
        }else{
            return res.status(401).send({statusCode: 401, message: 'Token not found!'})
        }
    }
}

module.exports = verification