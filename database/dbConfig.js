const mongoose = require("mongoose");

const dbConection = async () => {
  const MONGODB_URI = process.env.MONGODB_URI;

  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Conexion base de datos exitosa");
  } catch (error) {
    console.log(error);
    throw new Error("Error a la hora de inicializar base de datos");
  }
};

module.exports = {
  dbConection,
};
