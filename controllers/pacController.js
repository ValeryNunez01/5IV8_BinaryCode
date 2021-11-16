const con = require('../config/conexion');
const paciente = require('../model/paciente');
const usuario = require("../model/usuario");

module.exports = {

    index:function(req, res, next) {
        res.render('index', { title: 'Express' });
    },

    rPaciente:function(req, res, next) {
        res.render('rPaciente');
    },

    isPaciente:function(req, res, next) {
        res.render('isPaciente');
    },

    registrarPac:function(req, res, next) {
        console.log(req.body);
        usuario.buscarUsu(con, req.body, function (err, datos) {
            if (!datos) {
                console.log(datos);
                console.log(err);
                paciente.guardarPac(con, req.body, function (err) {
                    if(!err) {
                        console.log('Guardado paciente');
                        paciente.buscarId(con, req.body, function (err, datos) {
                            console.log(datos[datos.length - 1].IdPac);
                            usuario.guardarUsu(con,req.body, "p", datos[datos.length - 1].IdPac, function (err) {
                                if(!err) {
                                    console.log("Guardao");
                                    res.redirect('/isPaciente');
                                }else {
                                    console.log(err);
                                    res.redirect('/rPaciente');
                                }
                            });
                        });
                        
                    }
                });
            }else{
                res.redirect('/rPaciente');
            }
        })
    }

}