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
    // var ad = {
    //     text: $('textarea[name="text"]').val(),
    //     contactName: $('input[name="name"]').val(),
    //     contactPhone: $('input[name="phone"]').val()
    // }

    // arrayAds.push(ad);
    // console.log(arrayAds);

    // renderAds();
    var ad = {
        text: $('textarea[name="text"]').val(),
        name: $('input[name="name"]').val(),
        phone: $('input[name="phone"]').val()
    }

    $.ajax({
        type: 'POST',
        url: 'http://localhost/api.php?add',
        data: ad,
        success: function(data) {
            initPage();
        }
    });


    
    
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


    function initPage() {
        $.ajax({
            type: 'GET',
            url: 'http://localhost/api.php?all',
            success: function(data) {
                console.log(data);

                data.map(element => {

                    var ad = {
                        text: element.text,
                        contactName: element.name,
                        contactPhone: element.phone
                    }
                
                    arrayAds.push(ad);
                    console.log(arrayAds);
                
                    renderAds();
                });
            }
        });
    }

    initPage();

});




