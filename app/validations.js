//Este archivo es para validar la obtención correcta de los datos (En este caso específico que los datos ingresados en Postman sean correctos)

function createTaskValidation(data){
    const {titulo, descripcion, estatusCompletado, fechaEntrega, comentarios, responsable, tags} = data;

    if (typeof titulo !== 'string'){
        throw new Error('El titulo debería ser un string');
    }

    if (titulo.length <= 2 && !/^[a-z]+$/i.test(titulo)) {
        throw new Error('El titulo debe ser al menos de 2 carácteres');
    }

    if (!/^[a-z]+$/i.test(titulo)) {
        throw new Error('El titulo debe contener carácteres a la a-z');
    }

    // ---

    if (typeof descripcion !== 'string'){
        throw new Error('La descripción debería ser un string');
    }

    if (descripcion.length <= 5) {
        throw new Error('La descripción debe ser al menos de 5 carácteres');
    }

    // ---

    if (!/^[0-1]+$/i.test(estatusCompletado)) {
        throw new Error('El estatus solo puede ser 0 o 1(Falso o Verdadero)');
    }

    // ---

    if (typeof fechaEntrega !== 'string') {
        throw new Error('La fecha tiene que ser en formato (aaaa/mm/dd)');
    }

    // ---
    if (typeof comentarios !== 'string'){
        throw new Error('Los comentarios deberían ser un string');
    }

    if (comentarios.length <= 5) {
        throw new Error('El comentario debe ser al menos de 5 carácteres');
    }

    // ---

    if (typeof responsable !== 'string'){
        throw new Error('El responsable debe ser un string');
    }

    if (responsable.length <= 5 && !/^[a-z]+$/i.test(responsable)) {
        throw new Error('El responsable debe ser al menos de 5 carácteres');
    }

    if (!/^[a-z]+$/i.test(responsable)) {
        throw new Error('El responsable debe contener carácteres a la a-z');
    }

    // ---

    if (typeof tags !== 'string'){
        throw new Error('El tag debe ser un string');
    }
}

module.exports = {
    createTaskValidation,
};
