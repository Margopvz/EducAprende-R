const router = require("express").Router();
const { getUsers, createUser, loginUser } = require("../controllers/user.controller")
const authJWT = require("../middlewares/auth")

router.post('/login', loginUser)
router.post('/registro', createUser)
router.get('/perfil', authJWT, getUsers)

module.exports = router