const router = require("express").Router();
const { updateProgress } = require("../controllers/progress.controller")
const { getUsers, createUser, loginUser } = require("../controllers/user.controller")
const authJWT = require("../middlewares/auth")

router.post('/login', loginUser)
router.post('/registro', createUser)
router.get('/perfil', authJWT, getUsers)
router.post('/progreso', authJWT, updateProgress)

module.exports = router