module.exports = {
    buscarReceta:function (conexion, CodCit, funcion) {
        conexion.query("SELECT * FROM DReceta WHERE CodCit = ?", [CodCit], funcion);
    },
    guardarReceta:function (conexion, CodCit, NombreCom, TallaPac, PesoPac, EdadPac, AnotaCit, funcion) {
        conexion.query("INSERT INTO DReceta (CodCit, NombreCom, TallaPac, PesoPac, EdadPac, AnotaCit) VALUES (?, ?, ?, ?, ?, ?)",[CodCit, NombreCom, TallaPac, PesoPac, EdadPac, AnotaCit], funcion);
    },
    actualizarReceta:function (conexion, CodCit, NombreCom, TallaPac, PesoPac, EdadPac, AnotaCit, funcion) {
        conexion.query("UPDATE DReceta SET NombreCom = ?, TallaPac = ?, PesoPac = ?, EdadPac = ?, AnotaCit = ? WHERE CodCit = ?", [NombreCom, TallaPac, PesoPac, EdadPac, AnotaCit, CodCit], funcion);        
    }
}