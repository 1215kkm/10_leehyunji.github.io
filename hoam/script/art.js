$(document).ready(function(){
    $('.gnb li:not(:last)').mouseover(function(){
        $(this).find('.lnb').show();
        $('.lnb_bg').show();
    });

    $('.gnb li').mouseout(function(){
        $('.lnb').hide();
        $('.lnb_bg').hide();
    });

    //scroll시 header smaller효과
    $(window).scroll(function(){
        
        if($('#section_wrap').length>0){
            var scrT=$(this).scrollTop();
            var winH=$(window).height();

            $('#visual iframe').css({height:(120+scrT)+'vh'});

            // if(scrT>winH){
            //     $('header').addClass('active')
            // }else{
            //     $('header').removeClass('active')
            // };

            var sec1Top=$('#section1').offset().top-158;
            var sec2Top=$('#section2').offset().top-158;
            var sec3Top=$('#section3').offset().top-158;

            if(scrT>=sec1Top){
                $('.floating_menu li').eq(1).css({background:'#fff'}).siblings('.floor').css({background:'rgba(255,255,255,0.8)'});
            };
            if(scrT>=sec2Top){
                $('.floating_menu li').eq(2).css({background:'#fff'}).siblings('.floor').css({background:'rgba(255,255,255,0.8)'});
            };
            if(scrT>=sec3Top){
                $('.floating_menu li').eq(3).css({background:'#fff'}).siblings('.floor').css({background:'rgba(255,255,255,0.8)'});
            };

            
            
        };
  
    //scroll function

    if(scrT>=600){
        // $('.arrow').css({opacity:0})
        $('.left_title span').addClass('active');
    }

    //Initialize Swiper
    var swiper = new Swiper(".mySwiper", {

        pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

    $('.img_dtl .big,.img_dtl .small').mouseover(function(){
        $(this).find('.on').show();
        $(this).find('img').css({scale:'1.13'});
        
    });
    $('.img_dtl .big,.img_dtl .small').mouseleave(function(){
        $(this).find('.on').hide();
        $(this).find('img').css({scale:'1'});
    });

    //쉬운버전
    // $('.floating_menu li').eq(1).click(function(){
    //     $('html').animate({scrollTop:'809px'});
    // });
    // $('.floating_menu li').eq(1).click(function(){
    //     $('html').animate({scrollTop:'2000px'});
    // });
    // $('.floating_menu li').eq(3).click(function(){
    //     $('html').animate({scrollTop:'3000px'});
    // });

    //2요소 위치를 찾아 적용하기***
    //  $('.floating_menu li').eq(1).click(function(){
    //      var sec1Top=$('#section1').offset().top;
    //      var hdrHeight=$('header').height();
    //      $('html').animate({scrollTop:(sec1Top-hdrHeight)});  
    //   });
    //   $('.floating_menu li').eq(2).click(function(){
    //      var sec2Top=$('#section2').offset().top;
    //      var hdrHeight=$('header').height();
    //      $('html').animate({scrollTop:(sec2Top-hdrHeight)});  
    //   });
    //   $('.floating_menu li').eq(3).click(function(){
    //      var sec3Top=$('#section3').offset().top;
    //      var hdrHeight=$('header').height();
    //      $('html').animate({scrollTop:(sec3Top-hdrHeight)});  
    //   });


    // //3번 버전 (해당x)
    //  $('.floating_menu li').click(function(){
    //     var floatIndex=$(this).index();
    //     var sectionTop=$('#section_wrap section').eq(floatIndex).offset().top;
    //     $('html').animate({scrollTop:sectionTop});  

    //  });

    //클릭한 li의 속성값 같은거 찾기

    $('.floating_menu li a').click(function(){
         var liData=$(this).attr('href');
         var secTop=$(liData).offset().top;
         $('html').animate({scrollTop:secTop-158})
        return false
        
    });
    
    //아래 화살표
    //누르면 li.floor가 하나씩 증가
    // var floorBtn=$('.floating_menu li.floor').length;

    // $('.floating_menu li.down').click(function(){
    
    // });
  

    });

});
// var snbLiW, snbLiLeft
// $('.snb li').mouseover(function(){
//     snbLiW=$(this).width();
//     snbLiLeft=$(this).position().left;

//     $('.underline').stop().animate({width:snbLiW, left:snbLiLeft},200)
// });
// function snbLine(no_move){
//     snbLiW=$('.snb li.active').width();
//     snbLiLeft=$('.snb li.active').position().left;
//     $('.underline').stop().animate({width:snbLiW, left:snbLiLeft},no_move);
    

// }

// snbLine()

// $('.snb li').mouseout(function(){
//     snbLine();
// });

// $(window).resize(function(){
//     snbLine(0);
// });








