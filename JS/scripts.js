$(document).ready(function() {

        var scrollLink = $('.scroll');

        scrollLink.click(function(e) {

            e.preventDefault();
            $('body, html').animate({
                scrollTop: $(this.hash).offset().top
            }, 1000 );
        });


    // kontaktų formos tikrinimas ar užpildyti laukeliai

    $('form').submit(function( event ) {
        event.preventDefault();
    });

    $('form .btn-info').click(function(){

        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();

        if(name == "" || email == "" || message == ""){
            
                $('#alertMessage').modal('show');  
            }
    });

    // Paslaugų skilties papildomos informacijos atidarymas su mygtuku 'Daugiau'
    $('#info1').hide();
    $('#info2').hide();
    $('#info3').hide();


    $('#btn1').click(function(){
        $('#info1').toggle();
    });

    $('#btn2').click(function(){
        $('#info2').toggle();
    });

    $('#btn3').click(function(){
        $('#info3').toggle();
    });

}); 