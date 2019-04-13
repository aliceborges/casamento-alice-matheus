$(document).ready(function(){

  let message = '';
  $('.confirm_send').hide();

  function validate_fields(){
    warning = true;
    message = '';

    if ($('.name').val() == ''){
      warning = false;
      message += "Preencha o seu nome!\n";
    }
    if($('.guests').val() == ''){
      warning = false;
      message += "Preencha o campo de convidados confirmados!\n";
    }

    return warning;
  }

  $('.send-email').click(function(){
    let warning = validate_fields();

    if (warning == false){
      alert(message);
    }else{
      $.ajax({
        dataType: 'json',
        url: "http://getsimpleform.com/messages/ajax?form_api_token=58f91efcc3dec97b736a527be73b9595",
        data: {
          name: $('.name').val(),
          message: $('.guests').val(),
        }
      }).done(function() {
        $('.confirm_send').show();
      });
    }
  })
});
