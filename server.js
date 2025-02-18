require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "¡Bienvenido a la API!" });
});

app.post("/cancion", (req, res) => {
    const {nombre, artista, genero} = req.body;

    res.status(200).json({
        message: "Canción creada exitosamente",
        data: {nombre, artista, genero}
    })
})

app.get("/informacion", (req, res) => {
    res.json({ message: "Brandon Tejaxún - 202112030" })
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
