$(document).ready(function(){

  $('.adviseLock').hide();
  $('body').css({'backgroundImage': "url('images/lock.jpg')"});

  function askPassword(again = false){
    content = again ? 'A senha informada está errada. \n\n Qual é a senha?' : 'Qual é a senha?';
    let password = prompt(content);
    return password;
  }

  function doAsk(again = false){
    password = askPassword(again);
    const sitePassword = '070719aem';

    if (password == sitePassword){
      $('#locked').hide();
      $('body').css({'backgroundImage': "url('images/dust_scratches.png')"});
      $('#free').show();
    }else{
      if(password == null){
        $('.adviseLock').show();
      }else{
        doAsk(true);
      }
    }
  }

  setTimeout(function(){
    doAsk();
  }, 600);
});
