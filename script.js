$(function(){

    //アコーディオンメニューの実装//
    
    //ナビメニューをホバーするとアコーディオンメニューがスライド登場する※早めに//
    $(function(){               
      $('.accordion-menu').mouseenter(function(){     
        $(this).next('.accordion-nav').slideToggle('fast');
      }); 
    });

    //ナビメニューからマウスを離すとアコーディオンメニューが消える//
    //※この時点ではアコーディオンメニューにホバーしても消える//
    $(function(){               
      $('.accordion-menu').mouseleave(function(){     
        $(this).next('.accordion-nav').hide();
      }); 
    });

    //アコーディオンメニュー上にカーソルがある限りはすべて表示されっぱなし//
    $(function(){               
      $('.accordion-nav').mouseenter(function(){     
        $(this).show();
      }); 
    });

    //アコーディオンメニューからマウスを外すと消える※早めに//
    $(function(){               
      $('.accordion-nav').mouseleave(function(){     
        $(this).hide('fast');
      }); 
    });


  //ハンバーガーメニューのボタンの実装//
  $(function(){
    $(".p-hamburger").on("click",function(){
     $(this).toggleClass("is-open");
    });
  });

  //+のメニューの開け閉め（レスポンシブ）
  $(function(){
    $(".p-hamburger").on("click",function(){
     $(".accordion-content").toggleClass("open");
    });
  });

  //ウインドウサイズが変わったときにアコーディオンを閉じる

$(function(){
  $(window).resize(function(event){
   $(".p-hamburger").removeClass("is-open");
   $(".accordion-content").removeClass("open");
  });
});

  //レスポンシブでホバーしたら+が-に変わる
$(function(){               
  $(".accordion-content li").mouseenter(function(){     
    $(this).children(".accordion-menu").addClass("open");
  }); 
});


 //レスポンシブでマウスアウトしたら+に戻る
$(function(){               
  $(".accordion-content li").mouseleave(function(){     
    $(this).children(".accordion-menu").removeClass("open");
  }); 
 });
 
}); //最初のfunctionのかっこ//