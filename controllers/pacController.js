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
        console.log(req.body);
        res.send('recived');
    }

}