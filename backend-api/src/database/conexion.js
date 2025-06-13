const mongoose = require("mongoose");
const dbConnection = async () => {

    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("conexión a bd exitosa")
    } catch (error) {
        console.log(error)
    }
}

module.exports = { 
    dbConnection
}