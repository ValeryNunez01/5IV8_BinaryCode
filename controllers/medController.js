const con = require('../config/conexion');
const session = require('express-session');

module.exports = {
    buscarMedico:function (req, res, next) {
        if(req.session.MUsuario == undefined){
            res.redirect('/isPaciente');
        }else{
            const MUsuario = req.session.MUsuario;
            console.log(MUsuario);
            console.log(req.body);
        }
    }
}