module.exports = {
    buscarMed:function (conexion, datos, funcion) {
        conexion.query("SELECT * FROM MMedico WHERE SexoMed = ?", [datos.SexoMed] , funcion);
    }
}