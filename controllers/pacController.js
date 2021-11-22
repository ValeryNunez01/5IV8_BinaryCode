const { query } = require('express');
const con = require('../config/conexion');
const paciente = require('../model/paciente');
const usuario = require("../model/usuario");
const cita = require('../model/cita');
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
                cita.cargarPac(con,MUsuario.IdTip, function (err, data) {
                    const Citas = data;
                    res.render('pantallaInicialP',{
                        MUsuario,
                        Citas
                    });
                });
            }else {
                cita.cargarMed(con,MUsuario.IdTip, function (err, data) {
                    const Citas = data;
                    console.log(data);
                    res.render('pantallaInicialM',{
                        MUsuario,
                        Citas
                    });
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
    },

    seleccionarMedico:function (req, res, next) {
        if(req.session.Selectos == undefined) {
            res.redirect('/registrarCitaV');
        }else {
            const Medicos = req.session.Selectos;
            res.render('buscarMedico', {
                Medicos
            });
        }
    },

    cancelarCit:function (req, res, next) {
        if(req.session.MUsuario == undefined){
            res.redirect('/isPaciente');
        }else{
            delete req.session.FechaCit;
            delete req.session.HoraCit;
            delete req.session.Selectos;
            res.redirect('/pantallaInicial');
        }
    },

    guardarCita:function (req, res, next) {
        if(req.session.Selectos == undefined) {
            res.redirect('/registrarCitaV');
        }else {
            cita.crearCit(con,req.session.HoraCit,req.session.FechaCit,req.body.CedulaMed, req.session.MUsuario.IdTip, function (err) {
                if(!err) {
                    delete req.session.FechaCit;
                    delete req.session.HoraCit;
                    delete req.session.Selectos;
                    res.redirect('/pantallaInicial');
                }
            });
        }
    },
    cancelarCita:function (req, res, next) {
        if(req.session.MUsuario == undefined){
            res.redirect('/isPaciente');
        }else{
            console.log(req.body.CodCit);
            cita.cancelarCit(con, req.body.CodCit, function (err) {
                if(!err){
                    res.redirect('/pantallaInicial');
                }
            });
        }
    }
}