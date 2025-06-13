const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

const getUsers = async (req, res) => {

    try {
        const user = await User.findById(req.userId);

        if(!user){
            res.status(404).json({
                message: "Usuario no encontrado"
            })
        }
        res.status(200).json({
            message: "Usuario encontrado correctamente",
            data: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });
    } catch (error) {
        res.status(500).json({ message: 'Error al consultar usuario', error: error.message });
    }
}

const createUser = async (req, res) => {
    const {name, email, password} = req.body

    if ( !name || !email || !password ){
        res.status(400).json({
            message: "Faltan datos para registrar usuario"
        })
        return
    }

    try {
        
        const salt = bcrypt.genSaltSync();
        const passHash = bcrypt.hashSync(password, salt)

        await User.create({
            name,
            email,
            password: passHash
        })

        res.status(201).json({
            message: "usuario registrado exitosamente"
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Error al registrar usuario',
            error: error.message
        });
    }
}

    const loginUser = async (req, res) => {
        const { email, password } = req.body
    

    try {
        
        const findUser = await User.findOne({email})

        if(!findUser){
            res.status(404).json({
                message: "Usuario no encontrado"
            })
            return
        }

        const passVerify = bcrypt.compareSync(password, findUser.password)

        if(!passVerify){
            res.status(401).json({
                message: "Contraseña incorrecta"
            })
            return
        }

        const token = jwt.sign({id:findUser._id}, process.env.SECRET_JWT)

        res.status(200).json({
            message: "Usuario logueado exitosamente",
            token: token
        })

    } catch (error) {
        
    }
    }

module.exports = {
    getUsers, createUser, loginUser
}