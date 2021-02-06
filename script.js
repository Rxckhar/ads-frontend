$(document).ready(function() {

    var arrayAds = Array();



    $('#modal').hide();

$("#add").click(function() {
    $('#modal').show();
});

$("#close").click(function() {
    $('#modal').hide();
});

$("#newblock").click(function() {
    var ad = {
        text: $('textarea[name="text"]').val(),
        contactName: $('input[name="name"]').val(),
        contactPhone: $('input[name="phone"]').val()
    }

    arrayAds.push(ad);
    console.log(arrayAds);

    renderAds();


    
    
    $('#modal').hide();

    $('textarea[name="text"]').val('');
    $('input[name="name"]').val('');
    $('input[name="phone"]').val('');

    });


    
    //Функция отрисовки новых объявлений
    function renderAds() {
        //Очищаем объявление
        $('#content').html('');

        //Отрисовка объявления
        arrayAds.map(ad => {
            var adhtml =
            '<div class="Content__box" id="box" >' +
                '<div class="Box__info" id="info">'+ ad.text +'</div>' +
                '<div class="Box__name" id="name">'+ ad.contactName +'</div>' +
                '<div class="Box__phone" id="phone">'+ ad.contactPhone +'</div>' +
            '</div>';
    
            $('#content').append(adhtml);
        });



        
    }

});




