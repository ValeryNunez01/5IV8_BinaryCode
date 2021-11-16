const mysql = require('mysql');
var con = mysql.createConnection({
    host: 'us-cdbr-east-04.cleardb.com',
    user: 'b9b78c2d3a36e7',
    password: '7ddbde8b',
    database: 'heroku_26f360dc3e94e97'
});
con.connect(
    (err) => {
        if (!err){
            console.log('Conexión establecida');
        }else{
            console.log('Error de conexion');
        }
    }
);
module.exports = con;