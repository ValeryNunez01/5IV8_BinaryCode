module.exports = {
    guardarUsu:function (conexion, datos, TipoUsu, IdTip, funcion) {
        conexion.query("INSERT INTO MUsuario (NomUsu, ContraUsu, CorreoUsu, TipoUsu, IdTip) VALUES (?, ?, ?, ?, ?)", [datos.NomUsu, datos.ContraUsu, datos.CorreoUsu, TipoUsu, IdTip], funcion);
    },
    buscarUsu:function (conexion, datos, funcion) {
        conexion.query("SELECT * FROM MUsuario WHERE NomUsu = ?", [datos.NomUsu], funcion);
    },
    actualizarUsu:function (conexion, past, newer, funcion) {
        conexion.query("UPDATE MUsuario SET NomUsu = ?, CorreoUsu = ?, ContraUsu = ? WHERE IdTip = ?", [newer.NomUsu, newer.CorreoUsu, newer.ContraUsu, past.IdTip], funcion);
    }
}