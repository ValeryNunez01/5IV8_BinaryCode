module.exports = {
    guardarUsu:function (conexion, datos, TipoUsu, IdTip, funcion) {
        conexion.query("INSERT INTO MUsuario (NomUsu, ContraUsu, CorreoUsu, TipoUsu, IdTip) VALUES (?, ?, ?, ?, ?)", [datos.NomUsu, datos.ContraUsu, datos.CorreoUsu, TipoUsu, IdTip], funcion);
    },
    buscarUsu:function (conexion, datos, funcion) {
        conexion.query("SELECT * FROM MUsuario WHERE NomUsu = ?", [datos.NomUsu], funcion);
    }
}