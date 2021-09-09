const { response, request } = require('express');


const usuariosGet = (req = request, res = response) => {

    const { q, nombre = 'No name', apikey, page = 1, limit } = req.query;

    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

const usuariosPut = (req, res = response) => {
    
    const { id } = req.params;
    
    res.json({
        msg: 'put API - controlador',
        id
    });
  }

const usuariosPost = (req, res = response) => {

    const { nombre, edad } = req.body;

    res.json({
        msg: 'post API - controloador',
        nombre,
        edad
    });
  }

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - controloador'
    });
  }



module.exports ={
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}



