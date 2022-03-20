# Gestion_Tareas
Un programa hecho en Node.JS con framework RESTful apoyado de Express que obtiene, crea, modifica y borra una lista de tareas asignadas a ciertos usuarios, es importante que para el uso de esta y la comprobación se utilice POSTMAN y como base de datos MySQL Workbench.

## Ruta de Postman de GET
http://localhost:'PORT'/tareas/

http://localhost:'PORT'/tareas/usuarios/:id

http://localhost:'PORT'/tareas/:Responsable

http://localhost:'PORT'/tareas/id/:id

## Ruta de Postman de POST
http://localhost:'PORT'/tareas/crear


## Ruta de Postman de PUT
http://localhost:'PORT'/tareas/Titulo/:id

http://localhost:'PORT'/tareas/Descripcion/:id

http://localhost:'PORT'/tareas/Estatus/:id

http://localhost:'PORT'/tareas/Fecha/:id

http://localhost:'PORT'/tareas/Comentarios/:id

## Ruta de Postman DELETE
http://localhost:'PORT'/tareas/:id


## Instalación

```bash
// npm
npm i express
npm i mysql

// En el archivo
const express = require('express');
const app = express();
app.use(express.json());
```

## Base de datos y PORT

```bash
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
