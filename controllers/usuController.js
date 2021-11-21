const con = require('../config/conexion');
const usuario = require("../model/usuario");
const session = require('express-session');

module.exports = {
    validarUsu:function (req, res, next) {
        usuario.buscarUsu(con, req.body, function (err, datos) {
            if (datos.length != 0){
                if(datos[0].ContraUsu == req.body.ContraUsu){
                    req.session.MUsuario = datos[0];
                    res.redirect('/pantallaInicial');
                }else{
                    res.redirect('/isPaciente');
                }
            }else{
                res.redirect('/isPaciente');
            }
        });
    },
    cerrarSesion:function (req, res, next) {
        if(req.session.MUsuario == undefined){
            res.redirect('/isPaciente');
        }else{
            delete req.session.MUsuario;
            res.redirect('/isPaciente');
        }
    },
    actualizarUsu:function (req, res, next) {
        if(req.session.MUsuario == undefined){
            res.redirect('/isPaciente');
        }else{
            console.log(req.body);
            console.log(req.session.MUsuario);
            if(req.body.NomUsu == req.session.MUsuario.NomUsu){
                usuario.actualizarUsu(con, req.session.MUsuario, req.body, function (err) {
                    if(!err) {
                        usuario.buscarUsu(con, req.session.MUsuario, function (err, datos) {
                            req.session.MUsuario = datos[0];
                            res.redirect('/pantallaInicial');
                        });
                    }
                });
            } else {
                usuario.buscarUsu(con, req.body, function (err, datos) {
                    if(datos.length == 0){
                        usuario.actualizarUsu(con, req.session.MUsuario, req.body, function (err) {
                            if(!err) {
                                usuario.buscarUsu(con, req.body, function (err, datos) {
                                    req.session.MUsuario = datos[0];
                                    res.redirect('/pantallaInicial');
                                });
                            }
                        });
                    } else {
                        res.redirect('/pantallaInicial');
                    }
                });
            }
        }
    }
}