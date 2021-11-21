const { query } = require('express');
const con = require('../config/conexion');
const paciente = require('../model/paciente');
const usuario = require("../model/usuario");
const session = require('express-session');

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
        
        usuario.buscarUsu(con, req.body, function (err, datos) {
            if (datos.length == 0) {
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
    },

    avisoDePrivacidad:function (req, res, next) {
        res.render('avisoDePrivacidad');
    },

    terminosCondicionesUso:function (req, res, next) {
        res.render('terminosCondicionesUso');
    },

    pantallaInicial:function (req, res, next) {
        if(req.session.MUsuario == undefined){
            res.redirect('/isPaciente');
        }else{
            const MUsuario = req.session.MUsuario;
            if(MUsuario.TipoUsu == 'p'){
                res.render('pantallaInicialP',{
                    MUsuario
                });
            }else {
                res.render('pantallaInicialM',{
                    MUsuario
                });
            }
        }
    },

    registrarCitaV:function (req, res, next) {
        if(req.session.MUsuario == undefined){
            res.redirect('/isPaciente');
        }else{
            res.render('registrarCita');
        }
    }
}