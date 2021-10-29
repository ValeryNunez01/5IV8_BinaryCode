
function validar(){
    var nombreUsuario,contrasena;
    var toastLiveExample = document.getElementById('liveToast')

    nombreUsuario = document.getElementById('field-1').value;
    contrasena = document.getElementById('field-2').value;

    if(nombreUsuario == "" || contrasena == ""){

        var toast = new bootstrap.Toast(toastLiveExample)
        toast.show()

        return false
    }
}


function validarRegistroPaciente(){

    var toastLiveExample = document.getElementById('liveToast')
    var toastCorreo = document.getElementById('Correo')
    var toastUsuario = document.getElementById('Usuario')
    var toastContrasena = document.getElementById('Contrasena')
    var toastNombre = document.getElementById('Nombre')
    var toastApellidos = document.getElementById('Apellidos')
    var toastBox = document.getElementById('Box');

    var checked = document.forms["registroF"]["checkboxF"].checked;

    //EXPRESIONES REGULARES

    var e_nombreUsuario = new RegExp(/([a-z ,ñáéíóú]|[0-9]){5,18}/gi);
    var e_contrasena = new RegExp(/^((?=.*[~!@#$%^&*()_+=?><.,/\]])(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]))\S{8,}$/g);
    var e_correo = new RegExp(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})+$/g);
    var e_nombre = new RegExp(/^(([A-ZÁÉÍÑÓ]{1}[a-záéíñóúü]*)|([A-ZÁÉÍÑÓ]{1}[a-záéíñóúü]*,\s(de))|(((((de)|(del)|(De)|(Del)|(la)|(las)|(los))\s)?){1,2}([A-ZÁÉÍÑÓ]{1}[a-záéíñóúü\.]*))|([A-ZÁÉÍÑÓ]{1}[a-záéíñóúü]*\s)(((((de)|(del)|(De)|(Del)|(la)|(las)|(los))\s)?){1,2}([A-ZÁÉÍÑÓ]{1}[a-záéíñóúü\.]*)))$/);
    var e_apellidos = new RegExp(/^(([A-ZÁÉÍÓÚÑ]{1}[a-záéíóúüñ]*)(\s)?)((((((((de)|(del)|(la)|(las)|(los))\s)?)?){1,2})(([A-ZÁÉÍÑÓ]{1}[a-záéíñóúü\.]*)(\s([A-ZÁÉÍÑÓ]{1}[a-záéíñóúü\.]*))?){1})?)$/);


    //REGISTRO
    var r_nombreUsuario, r_contrasena, correo, nombre, appat, apmat;
    r_nombreUsuario = document.getElementById('ct').value;
    r_contrasena = document.getElementById('ct2').value;
    correo = document.getElementById('ct3').value;
    nombre = document.getElementById('ct4').value;
    appat = document.getElementById('ctp_1').value;
    apmat = document.getElementById('ctp_2').value;
    

    if(r_contrasena == "" || r_nombreUsuario == "" || correo == "" || nombre == "" || appat == "" || apmat == ""){

        var toast = new bootstrap.Toast(toastLiveExample)
        toast.show()

        return false
    }

    else if(e_nombreUsuario.test(r_nombreUsuario) === false){

        var toast = new bootstrap.Toast(toastUsuario)
        toast.show()
        
        return false
    }

    else if(e_contrasena.test(r_contrasena) === false){

        var toast = new bootstrap.Toast(toastContrasena)
        toast.show()
        
        return false
    }

    else if(e_correo.test(correo) === false){

        var toast = new bootstrap.Toast(toastCorreo)
        toast.show()
        
        return false
    }

    else if(e_nombre.test(nombre) === false){

        var toast = new bootstrap.Toast(toastNombre)
        toast.show()
        
        return false
    }

    else if(e_apellidos.test(appat) === false){

        var toast = new bootstrap.Toast(toastApellidos)
        toast.show()
        
        return false
    }

    else if(e_apellidos.test(apmat) === false){

        var toast = new bootstrap.Toast(toastApellidos)
        toast.show()
        
        return false
    }

    else if(checked == false){
        var toast = new bootstrap.Toast(toastBox)
        toast.show()
        
        return false
    }
}


function validacionInicioPaciente(){


    var toastLiveExample = document.getElementById('liveToast')
    var toastCorreo = document.getElementById('Correo')
    var toastUsuario = document.getElementById('Usuario')
    var toastContrasena = document.getElementById('Contrasena')



    //EXPRESIONES REGULARES

    var e_nombreUsuario = new RegExp(/([a-z ,ñáéíóú]|[0-9]){5,18}/gi);
    var e_contrasena = new RegExp(/^((?=.*[~!@#$%^&*()_+=?><.,/\]])(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]))\S{8,}$/g);
    var e_correo = new RegExp(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})+$/g);


    var nombreUsuario, contrasena, correo;
    nombreUsuario = document.getElementById('nombre-usuariop').value;
    contrasena = document.getElementById('contrasena-usuariop').value;
    correo = document.getElementById('correo-usuariop').value;

    if(contrasena == "" || nombreUsuario == "" || correo == ""){

        var toast = new bootstrap.Toast(toastLiveExample)
        toast.show()
        
        return false
    }

    else if(e_nombreUsuario.test(nombreUsuario) === false){

        var toast = new bootstrap.Toast(toastUsuario)
        toast.show()
        
        return false
    }

    else if(e_contrasena.test(contrasena) === false){

        var toast = new bootstrap.Toast(toastContrasena)
        toast.show()
        
        return false
    }

    else if(e_correo.test(correo) === false){

        var toast = new bootstrap.Toast(toastCorreo)
        toast.show()
        
        return false
    }
}
