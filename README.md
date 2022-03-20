# Gestion_Tareas
Un programa hecho en Node.JS con framework RESTful apoyado de Express que obtiene, crea, modifica y borra una lista de tareas asignadas a ciertos usuarios.

## Instalación

```bash
// npm
npm i express
npm i mysql

// En el archivo
const express = require('express');
const app = express();
app.use(express.json());

//Para usar la base de datos y el puerto
//settings (Coloca el puerto en el predeterminado de la computadora o por su defecto usa el 3000)
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`))

//Conecta la base de datos
con.connect(function(err) {
    if (err) throw err;
    console.log("Database connected!");
});

```
