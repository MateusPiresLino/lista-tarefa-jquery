$(document).ready(function () {
    $('#form_list').submit(function (e) { //manipulão do submit para capturar as informações do usuário
        e.preventDefault(); // impedir o recaregamento automatico

        // pegar valor que o usuário vai digitar
        const inputTarefa = $('#digitar_tarefa').val().trim(); // trim remove espaços em branco 

        //Verificar se o campo de entrada não esta vazio
        if (inputTarefa) {

            //criar um novo item de lista e o adiciona ao <ul>
            $('<li class="list_riscar">' + inputTarefa + '</li>').appendTo('ul');

            // limpar campo de entrada após adicionar tarefa
            $('#digitar_tarefa').val('');
        }
    });
    //Riscar a tarefa ao clicar nela 
    $('ul').on('click', '.list_riscar', function () {
        $(this).toggleClass('line-through');
    });
})
