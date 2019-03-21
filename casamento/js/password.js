$(document).ready(function(){

  $('.adviseLock').hide();
  //
  // height:auto;
  //     background-image:url(sidebar-superior.png);
  //     background-repeat:no-repeat;
  //     background-size:100% 100%;﻿

  if($(window).width() <= 520){
    $('body').css({'backgroundImage': "url('images/lock.jpg')",'backgroundRepeat':'no-repeat','backgroundSize':'100%'});
  }else{
    $('body').css({'backgroundImage': "url('images/lock-full.jpg')",'backgroundRepeat':'no-repeat','backgroundSize':'100%'});
  }

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
      $('body').css({'backgroundImage': "url('images/dust_scratches.png')",'backgroundRepeat':'repeat','backgroundSize':'auto'});
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
