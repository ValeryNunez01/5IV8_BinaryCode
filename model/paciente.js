module.exports = {
    buscarId:function (conexion, datos, funcion) {
        conexion.query("SELECT IdPac FROM MPaciente WHERE AppPac = ? AND ApmPac = ? AND NombresPac = ?", [datos.AppPac, datos.ApmPac, datos.NombresPac] , funcion);
    },
    guardarPac:function (conexion, datos, funcion) {
        conexion.query("INSERT INTO Mpaciente (AppPac, ApmPac, NombresPac) VALUES (?, ?, ?)", [datos.AppPac, datos.ApmPac, datos.NombresPac], funcion);
    }
}