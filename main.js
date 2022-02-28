$(function(){
    function buscar_productos(){
        console.log('Buscando Usuarios');
        
        $.ajax({
            url: 'http://localhost:3000/users',
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