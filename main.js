$(function(){
    function buscar_productos(){
        console.log('Buscando Usuarios');
        
        $.ajax({
            //url: 'http://localhost:3000/users',
            url: "https://my-json-server.typicode.com/GonzaloCarmona00/Api_Rest_Ajax_Node/users",
            type: 'GET',
            dataType: 'json',

            success: function(data){
                console.log('Respuesta ok');
                console.log(data);
            },

            error: function(request, error){
                console.log('Ocurrio un error: ' + error);
            }
        });
    }

    $('#Button1').on('click', function(){
        buscar_productos();
    });
});