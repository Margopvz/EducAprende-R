import mongoose from "mongoose";
import dotenv from "dotenv";
import Logro from "../src/models/Achievement.js";
import { LOGROS } from '../../src/Data/achievements.js'

dotenv.config(); // lee variables del .env
const MONGODB_URI = process.env.MONGO_URI || "mongodb://localhost:27017/educaprende";


const cargarLogros = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("✅ Conectado a MongoDB");

    for (const logro of LOGROS) {
      const existe = await Logro.findOne({ id: logro.id });
      if (!existe) {
        await Logro.create(logro);
        console.log(`🟢 Logro insertado: ${logro.nombre}`);
      } else {
        console.log(`🔸 Ya existe: ${logro.nombre}`);
      }
    }

    console.log("✅ Todos los logros fueron procesados.");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error al insertar logros:", error);
    process.exit(1);
  }
};

cargarLogros();