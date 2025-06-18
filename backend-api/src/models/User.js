const mongoose = require("mongoose");

const { model, Schema } = mongoose;

const userSchema = new Schema({
    name: { type: String, 
            required: true 
        },
    email: { type: String, 
            required: true,
            unique: true 
        },
    password: { type: String,
                required: true 
            },
    achievements: [
         {
        id: {
            type: String, // Usamos string porque tus logros tienen IDs como "math_3"
            required: true
        },
        date: { type: Date, default: Date.now }
        }
    ],
    progresoPorAsignatura: {
        matematicas: {
            respuestasCorrectas: { type: Number, default: 0 },
            totalIntentos: { type: Number, default: 0 }
        },
        historia: {
            respuestasCorrectas: { type: Number, default: 0 },
            totalIntentos: { type: Number, default: 0 }
        },
        ingles: {
            respuestasCorrectas: { type: Number, default: 0 },
            totalIntentos: { type: Number, default: 0 }
        },
        ciencias: {
            respuestasCorrectas: { type: Number, default: 0 },
            totalIntentos: { type: Number, default: 0 }
        }
    },

}, {
    timestamps: true
});

const User = model('User', userSchema)
module.exports = User