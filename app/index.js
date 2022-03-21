const validations = require('./validations');
const express = require('express');
const app = express();
var con = require('../Base_datos/db');
app.use(express.json());
 
//settings (Coloca el puerto en el predeterminado de la computadora o por su defecto usa el 3000)
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`))

//middleware
app.use((error, req,res, next) => {
    res.status(400).json({
        status: 'error',
        message: error.message,
    });
});

//Conecta la base de datos
con.connect(function(err) {
    if (err) throw err;
    console.log("Database connected!");
});

//CRUD

//GET
//Obtiene las tareas filtradas por el nombre del usuario(Todas las tareas que el usuario tenga asignadas son desplegadas).
app.get('/tareas/:responsable', (req, res) => {

    let sql = `select * from gestiontareas.tareas where Responsable = '${req.params.responsable}';`;
    con.query(sql, function(err, results){
        if(err) throw err;
        res.json(results);
    });
}); 

//Obtiene una tarea específica correspondiente a un usuario por id, el id se coloca en ruta y el nombre en postman.
app.get('/tareas/usuarios/:id', (req, res) => {
    const responsable = req.body.responsable

    con.query(`select * from gestiontareas.tareas where responsable = '${responsable}' and id = ${req.params.id}`, function(err,results){
        if(err) throw err;
        res.json(results);
    });
});

//Obtiene toda la lista de tareas
app.get('/tareas', (req, res) => {

    let sql = "select * from gestiontareas.tareas;";
    con.query(sql, function(err, results){
        if(err) throw err;
        res.json(results);
    });
});

//Obtiene una tarea por un id específico
app.get('/tareas/id/:id', (req, res) => {

    let sql = `select * from gestiontareas.tareas where id = ${req.params.id};`;
    con.query(sql, function(err, results){
        if(err) throw err;
        res.json(results);
    });
});


//POST
//Crea una tarea con todos los elementos de esta
app.post("/tareas/crear", (req, res) =>{
    validations.createTaskValidation(req.body);
    const {titulo, descripcion, estatusCompletado, fechaEntrega, comentarios, responsable, tags} = req.body;

    con.query(`INSERT INTO gestiontareas.tareas (titulo,descripcion,estatusCompletado,fechaEntrega,comentarios, responsable, tags) VALUES ('${titulo}', '${descripcion}', '${estatusCompletado}', '${fechaEntrega}', '${comentarios}', '${responsable}', '${tags}')`, function(err,results){
        if(err) throw err;
        res.json(results);
    });
});

//PUT
//Modifica el titulo de una tarea por su id
app.put('/tareas/titulo/:id', (req, res) => {
    const titulo = req.body.titulo
    con.query(`UPDATE gestiontareas.tareas SET titulo = '${titulo}' WHERE id = ${req.params.id}`, function(err,results){
        if(err) throw err;
        res.json(results);
    });
});

//Modifica la descripción de una tarea por su id
app.put('/tareas/descripcion/:id', (req, res) => {
    const descripcion = req.body.descripcion
    con.query(`UPDATE gestiontareas.tareas SET descripcion = '${descripcion}' WHERE id = ${req.params.id}`, function(err,results){
        if(err) throw err;
        res.json(results);
    });
});

//Modifica el estatus de una tarea por su id
app.put('/tareas/estatus/:id', (req, res) => {
    const estatusCompletado = req.body.estatusCompletado
    con.query(`UPDATE gestiontareas.tareas SET estatusCompletado = '${estatusCompletado}' WHERE id = ${req.params.id}`, function(err,results){
        if(err) throw err;
        res.json(results);
    });

});

//Modifica la fecha de una tarea por su id
app.put('/tareas/fecha/:id', (req, res) => {
    const fechaEntrega = req.body.fechaEntrega
    con.query(`UPDATE gestiontareas.tareas SET fechaEntrega = '${fechaEntrega}' WHERE id = ${req.params.id}`, function(err,results){
        if(err) throw err;
        res.json(results);
    });

});

//Modifica el comentario de una tarea por su id
app.put('/tareas/comentarios/:id', (req, res) => {
    const comentarios = req.body.comentarios
    con.query(`UPDATE gestiontareas.tareas SET comentarios = '${comentarios}' WHERE id = ${req.params.id}`, function(err,results){
        if(err) throw err;
        res.json(results);
    });
});

//Modifica el responsable de una tarea por su id
app.put('/tareas/responsable/:id', (req, res) => {
    const responsable = req.body.responsable
    con.query(`UPDATE gestiontareas.tareas SET responsable = '${responsable}' WHERE id = ${req.params.id}`, function(err,results){
        if(err) throw err;
        res.json(results);
    });
});

//Modifica el tag de una tarea por su id
app.put('/tareas/tags/:id', (req, res) => {
    const tags = req.body.tags
    con.query(`UPDATE gestiontareas.tareas SET tags = '${tags}' WHERE id = ${req.params.id}`, function(err,results){
        if(err) throw err;
        res.json(results);
    });
});

//DELETE
//Borra una tarea por su id
app.delete('/tareas/:id', (req, res) => {
    //Delete
    con.query(`DELETE FROM gestiontareas.tareas WHERE id = ${req.params.id}`, function(err,results){
        if(err) throw err;
        res.json(results);
    });
});