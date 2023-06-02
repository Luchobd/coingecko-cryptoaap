import app from "./app";
import dbConnect from "./config/mongo";

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => console.log(`Conectado en el puerto: ${PORT}`));

dbConnect();
