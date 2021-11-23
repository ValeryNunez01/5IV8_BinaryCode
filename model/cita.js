module.exports = {
    buscarDisponibilidad:function (conexion, funcion) {
        conexion.query("SELECT * FROM MCita", funcion);
    },
    crearCit:function (conexion, hora, fecha, cedula, pac, funcion) {
        console.log(fecha);
        conexion.query("INSERT INTO MCita (HoraCit, FechaCit, CedulaMed, IdPac) VALUES (?, ?, ?, ?)", [hora, fecha, cedula, pac] , funcion);
    },
    cargarPac:function (conexion, IdTip, funcion) {
        conexion.query("SELECT * from mcita INNER JOIN mmedico ON mcita.CedulaMed = mmedico.CedulaMed WHERE IdPac = ?", [IdTip], funcion);
    },
    cargarMed:function (conexion, IdTip,funcion) {
        console.log(IdTip);
        conexion.query("SELECT * from mcita INNER JOIN mpaciente ON mcita.IdPac = mpaciente.IdPac WHERE CedulaMed = ?", [IdTip], funcion);
    },
    cancelarCit:function (conexion, CodCit, funcion) {
        conexion.query("DELETE FROM MCita WHERE CodCit = ?", [CodCit], funcion);
    },
    cargarCit:function (conexion, CodCit, funcion) {
        conexion.query("SELECT * from mcita INNER JOIN mpaciente ON mcita.IdPac = mpaciente.IdPac WHERE CodCit = ?", [CodCit], funcion);
    }
}