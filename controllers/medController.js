const con = require('../config/conexion');
const session = require('express-session');
const medico = require('../model/medico');
const cita = require('../model/cita');
const receta = require('../model/receta');
const { disable } = require('../app');

module.exports = {
    buscarMedico:function (req, res) {
        if(req.session.MUsuario == undefined){
            res.redirect('/isPaciente');
        }else{
            medico.buscarMed(con, req.body, function (err, datos) {
                if(!datos){
                    res.redirect('/registrarCitaV');
                }else{
                    cita.buscarDisponibilidad(con, function (err, data) {
                        let cedulas = [];
                        let disponibleP = true;
                        for(let i=0;i<datos.length;i += 1){
                            let disponibleM = true;
                            for(let j=0;j<data.length;j += 1){
                                data[j].FechaCit = "" + data[j].FechaCit;
                                if(data[j].FechaCit.length == 57) {
                                    let ano = data[j].FechaCit.substring(11,15);
                                    let mes;
                                    switch(data[j].FechaCit.substring(4,7)){
                                        case "Jan":
                                            mes = "01";
                                        break;
                                        case "Feb":
                                            mes = "02";
                                        break;
                                        case "Mar":
                                            mes = "03";
                                        break;
                                        case "Apr":
                                            mes = "04";
                                        break;
                                        case "May":
                                            mes = "05";
                                        break;
                                        case "Jun":
                                            mes = "06";
                                        break;
                                        case "Jul":
                                            mes = "07";
                                        break;
                                        case "Aug":
                                            mes = "08";
                                        break;
                                        case "Sep":
                                            mes = "09";
                                        break;
                                        case "Oct":
                                            mes = "10";
                                        break;
                                        case "Nov":
                                            mes = "11";
                                        break;
                                        case "Dec":
                                            mes = "12";
                                        break;
                                    }
                                    let dia = data[j].FechaCit.substring(8,10);
                                    data[j].FechaCit = "" + ano + "-" + mes + "-" + dia;
                                }else if(data[j].FechaCit.length == 13) {
                                    continue;
                                }
                                if(datos[i].CedulaMed == data[j].CedulaMed && req.body.FechaCit == data[j].FechaCit && req.body.HoraCit == data[j].HoraCit) {
                                    disponibleM = false;
                                }
                                if(req.session.MUsuario.IdTip == data[j].IdPac && req.body.FechaCit == data[j].FechaCit && req.body.HoraCit == data[j].HoraCit){
                                    disponibleP = false;
                                }
                            }
                            if(disponibleM && disponibleP){
                                cedulas.push(datos[i]);
                            }else {
                                console.log("Te la bañaste maestro");
                            }
                        }
                        if(disponibleP){
                            req.session.FechaCit = req.body.FechaCit;
                            req.session.HoraCit = req.body.HoraCit;
                            req.session.Selectos = cedulas;
                            res.redirect('/seleccionarMedico');
                        }else {
                            res.redirect('/registrarCitaV')
                        }
                    });
                }
            });
        }
    },
    editarReceta:function (req, res, next) {
        if(req.session.MUsuario == undefined){
            res.redirect('/isPaciente');
        }else {
            cita.cargarCit(con, req.body.CodCit, function (err, data) {
                const dataPac = data;
                const codCit = req.body.CodCit;
                let modo = 'g';
                receta.buscarReceta(con, codCit, function (err, dato) {
                    if(dato.length == 0) {
                        modo = 'g';
                        res.render('editarReceta', {
                            dataPac,
                            codCit,
                            modo
                        });
                    }else {
                        const existentes = dato;
                        modo = 'a';
                        res.render('editarReceta', {
                            dataPac,
                            codCit,
                            modo,
                            existentes
                        });
                    }
                });
            });
        }
    },
    guardarReceta:function (req, res, next) {
        if(req.session.MUsuario == undefined){
            res.redirect('/isPaciente');
        }else {
            console.log(req.body);
            receta.guardarReceta(con,req.body.CodCit,req.body.NombreCom,req.body.TallaPac,req.body.PesoPac,req.body.EdadPac,req.body.AnotaCit, function (err, data) {
                if(!err){
                    res.redirect('/pantallaInicial');
                }
            });
        }
    },
    actualizarReceta:function (req, res, next) {
        if(req.session.MUsuario == undefined){
            res.redirect('/isPaciente');
        }else {
            console.log(req.body);
            receta.actualizarReceta(con,req.body.CodCit,req.body.NombreCom,req.body.TallaPac,req.body.PesoPac,req.body.EdadPac,req.body.AnotaCit,function (err, data) {
                if(!err){
                    res.redirect('/pantallaInicial');
                }
            });
        }
    }
}