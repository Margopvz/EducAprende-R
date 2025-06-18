const router = require("express").Router();
const { updateProgress, getLogros } = require("../controllers/progress.controller")
const { getUsers, createUser, loginUser } = require("../controllers/user.controller")
const authJWT = require("../middlewares/auth")

router.post('/login', loginUser)
router.post('/registro', createUser)
router.get('/perfil', authJWT, getUsers)
router.post('/progreso', authJWT, (req, res, next) => {
  console.log('📌 authJWT pasó bien');
  next();
}, updateProgress)
router.get('/logros', getLogros)

module.exports = router