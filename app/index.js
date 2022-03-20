const Joi = require('joi')
const express = require('express');
const app = express();
var con = require('../Base_datos/db');
app.use(express.json());
 
//settings (Coloca el puerto en el predeterminado de la computadora o por su defecto usa el 3000)
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`))

//Conecta la base de datos
con.connect(function(err) {
    if (err) throw err;
    console.log("Database connected!");
});

//CRUD

//GET
//Obtiene las tareas filtradas por el nombre del usuario(Todas las tareas que el usuario tenga asignadas son desplegadas).
app.get('/tareas/:Responsable', (req, res) => {

    let sql = `select * from gestiontareas.tareas where Responsable = '${req.params.Responsable}';`;
    con.query(sql, function(err, results){
        if(err) throw err;
        res.send(results);
    });
}); 

//Obtiene una tarea específica correspondiente a un usuario por id, el id se coloca en ruta y el nombre en postman.
app.get('/tareas/usuarios/:id', (req, res) => {
    const Responsable = req.body.Responsable

    con.query(`select * from gestiontareas.tareas where Responsable = '${Responsable}' and id = ${req.params.id}`, function(err,results){
        if(err) throw err;
        res.send(results);
    });
});

//Obtiene toda la lista de tareas
app.get('/tareas', (req, res) => {

    let sql = "select * from gestiontareas.tareas;";
    con.query(sql, function(err, results){
        if(err) throw err;
        res.send(results);
    });
});

//Obtiene una tarea por un id específico
app.get('/tareas/id/:id', (req, res) => {

    let sql = `select * from gestiontareas.tareas where id = ${req.params.id};`;
    con.query(sql, function(err, results){
        if(err) throw err;
        res.send(results);
    });
});


//POST
//Crea una tarea con todos los elementos de esta
app.post("/tareas/crear", (req, res) =>{
    const Titulo = req.body.Titulo
    const Descripcion = req.body.Descripcion
    const Estatus_Completado = req.body.Estatus_Completado
    const Fecha_entrega = req.body.Fecha_entrega
    const Comentarios = req.body.Comentarios
    const Responsable = req.body.Responsable
    const Tags = req.body.Tags

    con.query(`INSERT INTO gestiontareas.tareas (Titulo,Descripcion,Estatus_Completado,Fecha_entrega,Comentarios, Responsable, Tags) VALUES ('${Titulo}', '${Descripcion}', '${Estatus_Completado}', '${Fecha_entrega}', '${Comentarios}', '${Responsable}', '${Tags}')`, function(err,results){
        if(err) throw err;
        res.send(results);
    });
});

//PUT
//Modifica el titulo de una tarea por su id
app.put('/tareas/Titulo/:id', (req, res) => {
    const Titulo = req.body.Titulo
    con.query(`UPDATE gestiontareas.tareas SET Titulo = '${Titulo}' WHERE id = ${req.params.id}`, function(err,results){
        if(err) throw err;
        res.send(results);
    });
});

//Modifica la descripción de una tarea por su id
app.put('/tareas/Descripcion/:id', (req, res) => {
    const Descripcion = req.body.Descripcion
    con.query(`UPDATE gestiontareas.tareas SET Descripcion = '${Descripcion}' WHERE id = ${req.params.id}`, function(err,results){
        if(err) throw err;
        res.send(results);
    });
});

//Modifica el estatus de una tarea por su id
app.put('/tareas/Estatus/:id', (req, res) => {
    const Estatus_Completado = req.body.Estatus_Completado
    con.query(`UPDATE gestiontareas.tareas SET Estatus_Completado = '${Estatus_Completado}' WHERE id = ${req.params.id}`, function(err,results){
        if(err) throw err;
        res.send(results);
    });

});

//Modifica la fecha de una tarea por su id
app.put('/tareas/Fecha/:id', (req, res) => {
    const Fecha_entrega = req.body.Fecha_entrega
    con.query(`UPDATE gestiontareas.tareas SET Fecha_entrega = '${Fecha_entrega}' WHERE id = ${req.params.id}`, function(err,results){
        if(err) throw err;
        res.send(results);
    });

});

//Modifica el comentario de una tarea por su id
app.put('/tareas/Comentarios/:id', (req, res) => {
    const Comentarios = req.body.Comentarios
    con.query(`UPDATE gestiontareas.tareas SET Comentarios = '${Comentarios}' WHERE id = ${req.params.id}`, function(err,results){
        if(err) throw err;
        res.send(results);
    });
});

//DELETE
//Borra una tarea por su id
app.delete('/tareas/:id', (req, res) => {
    //Delete
    con.query(`DELETE FROM gestiontareas.tareas WHERE id = ${req.params.id}`, function(err,results){
        if(err) throw err;
        res.send(results);
    });
});