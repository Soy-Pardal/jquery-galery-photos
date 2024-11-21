$(document).ready(function () {


    $('header button').click(function (e) {
        $("form").slideDown();
    });

    $('#botao-cancelar').click(function (e) {
        
        $("form").slideUp();

    });



    $('form').on('submit', function (e) {
        e.preventDefault()
        
        const urlNovaImagem = $('#url-new-image').val()
        const novoItem = $('<li style="display:none;"></li>')
        $(`<img src="${urlNovaImagem}"/>`).appendTo(novoItem)
        
        $(`
            <div class="overlay-image-link">
                <a href="${urlNovaImagem}" target"_blank" title="Ver Imagem">
                    Ver Imagem
                </a>
            </div>
        `).appendTo(novoItem)

        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn(1000) 
        $('#url-new-image').val('')


       
    })
});

