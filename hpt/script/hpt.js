// 분원안내
$('.oth_select').click(function(){
    $('.oth ul').slideToggle(200);
});

$('.oth ul li').click(function(){
    var oth = $(this).text();
    $('.oth_select i').text(oth);
    $('.oth ul').hide();
    // $('.btn_close').hide('oth_select i')
   
});


 $('.btn_close').click(function(){
    $('.oth_select i').text('분원 안내');
 })

 //gnb
 $('.gnb').mouseenter(function(){
     $('.lnb').show();
     $('.lnb_bg').show();
     $('.lnb_bg_out').show();
});

$('header h1,.oth,.top_menu,.lnb_bg_out').mouseenter(function(){
    $('.lnb').hide();
    $('.lnb_bg').hide();
    $('.lnb_bg_out').hide();
});


$('.lnb_bg').mouseleave(function(){
    $('.lnb').hide();
    $('.lnb_bg').hide();
    $('.lnb_bg_out').hide();
});

//section3 more
$('.more').mouseover(function(){
    $('.more span').show().addClass('more_spin');
});

$('.more').mouseleave(function(){
    $('.more span').hide();
});


//footer 주소
$('.add_select').click(function(){
    $('.ftr_add').slideToggle(-100);
    return false;
});

$('.add_select2').click(function(){
    $('.ftr_add2').slideToggle(-100);
    $('.ftr_add').hide();
    return false;
});

$('.ftr_add li').mouseover(function(){
    $(this).find('.add_dtl').show();
});
$('.ftr_add li').mouseleave(function(){
    $(this).find('.add_dtl').hide();
});

$('.ftr_add2 li').mouseover(function(){
    $(this).find('.add_dtl2').show();
});
$('.ftr_add2 li').mouseleave(function(){
    $(this).find('.add_dtl2').hide();
});

//위로가기

$(window).scroll(function(){
    var scrT=$(window).scrollTop(); //스크롤값
    var winH=$(window).height();

    if(scrT > 900){
        $('.go_top').stop().animate({top:scrT+winH-110});
    } else{
        $('.go_top').stop().animate({top:scrT+winH-110});
    }
});

$('.go_top').click(function(){
    $('html').animate({scrollTop:0});
})

//전화하기

$(window).scroll(function(){
    var scrT=$(window).scrollTop(); //스크롤값
    var winH=$(window).height();

    if(scrT > 900){
        $('.go_call').stop().animate({top:scrT+winH-175});
    } else{
        $('.go_call').stop().animate({top:scrT+winH-175});
    }
});
//-------------------------------------------------------------------------------------
//현재페이지 표시

var pageUrl = window.location.href;

//visual_sub 에 들어갈 제목불러오기
$('.gnb li a').each(function(){
    var gnbA = $(this).attr('href');
    if(pageUrl.indexOf(gnbA) >= 0){
        var visualText = $(this).parents('.lnb').siblings('a').text();  //1차카테고리명
        $('.text_sub strong').text(visualText);
        
        var sectionH2 = $(this).text();  //2차카테고리명
        $('#section_sub h2').text(sectionH2);

        var lnbHtml = $(this).parents('.lnb').html();  //2차카테고리 lnb안에 있는 li들 html 소스불러오기
        $('.snb').html(lnbHtml);
    };
})

$('.snb li a').each(function(){
    var snbA = $(this).attr('href');
    if(pageUrl.indexOf(snbA) != -1){
        $(this).parent().addClass('on');
    };
});

$('.side .tit').mouseover(function(){
    $(this).siblings('.on').show()
})






