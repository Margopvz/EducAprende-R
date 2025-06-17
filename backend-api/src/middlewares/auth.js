const jwt = require('jsonwebtoken');

const authJWT = (req, res, next) =>{
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if(!token){
        return res.status(401).json({
            message: "Acceso denegado"
        })
    }

    
    try {
        const decodedToken = jwt.verify(token, process.env.SECRET_JWT)

        req.userId = decodedToken.id

    next()
    } catch (error) {
        return res.status(401).json({
            message: "Token inválido",
            error: error.message
        })
    }
}

module.exports = authJWT