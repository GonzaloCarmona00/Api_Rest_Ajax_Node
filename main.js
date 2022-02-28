$(function(){

    let usuario1 = $("#usuarioBase");


    function buscar_usuarios(){
        console.log('Buscando Usuarios');
        
        $.ajax({
            //url: 'http://localhost:3000/users',
            url: "https://my-json-server.typicode.com/GonzaloCarmona00/Api_Rest_Ajax_Node/users",
            type: 'GET',
            dataType: 'json',

            success: function(data){
                console.log('Respuesta ok');
                console.log(data);

                for(usuario of data){
                    $("#usuariosContenedor").append(usuario1.clone());
                }
            },

            error: function(request, error){
                console.log('Ocurrio un error: ' + error);
            }
        });
    }
    buscar_usuarios();
});