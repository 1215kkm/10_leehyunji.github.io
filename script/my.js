$(document).ready(function(){
      
  function full(target){
    $(target).fullpage({  //대상선택
        autoScrolling:true,
        scrollHorizontally: true,
        responsiveWidth: 1025,
        scrollOverflow:true,
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', '5thPage','6thPage','7thPage','8thPage','9thPage','10thPage','lastPage'],
        animateAnchor:false,
    
    
        //navigation:true, //네비쓸건지
        navigationPosition:'right',  //어디에위치
        afterLoad : function(anchorLink, index){   //4) afterLoad
            console.log(`현재섹션 번호는 ${index}`)

            if(index < 3){
              $('header h1 a,header .gnb li a').css({color:''})
              $('.text_wrap div span').addClass('on')
              $('.count-num').each(function() { // .count-num에 각각 적용
                var $this = $(this),
                    countTo = $this.attr('data-count');
                    // $this = 첫번째~세번째 .count-num
                    // countTo = 첫번째~세번째 .count-num의 data-count 속성의 값(777,555,333)
                
                $({ countNum: $this.text()}).animate({
                  countNum: countTo 
                  // countNum: $this.text() = 0, countNum: countTo = 777, 555, 333
                  // 0에서 countNum이 된다
                },
                {
                  duration: 900, // 애니메이션이 완료될때까지 걸리는 시간
                  easing:'linear', // 애니메이션 효과 방식
                  step: function() { // 움직임 각 스텝별로 실행될 함수
                    $this.text(Math.floor(this.countNum)+' %');
                    // Math.floor -> this.countNum의 값을 정수로 만들어준다
                  },
                  complete: function() { // 움직임이 멈춘 후 실행될 함수
                    $this.text(this.countNum+' %');
                    // this.countNum이 $this의 text값이 된다
                    //alert('finished');
                  }
                });  
              });
            }else{
              $('.text_wrap div span').removeClass('on')
            } 
            if(index == 3){
              $('.sect2_1 .left_img_box, #daon .line_btm').addClass('on')
            }else{
              $('.sect2_1 .left_img_box, #daon .line_btm').removeClass('on')

            }
            if(index == 4){
                $('header h1 a,header .gnb li a').css({color:'#8c7963'})
                $('.sect2_2 .left_img_box, #hoam .line_btm').addClass('on')
            }else{
              $('.sect2_2 .left_img_box, #hoam .line_btm').removeClass('on')
            }
            if(index == 5){
              $('header h1 a,header .gnb li a').css({color:'#EA8E3D'})
              $('.sect2_3 .left_img_box, #hpt .line_btm').addClass('on')
            }else{
              $('.sect2_3 .left_img_box, #hpt .line_btm').removeClass('on')
            }
            if(index == 6){
              $('header h1 a,header .gnb li a').css({color:'#634332'})
              $('.sect2_4 .left_img_box, #shopping .line_btm').addClass('on')
            }else{
              $('.sect2_4 .left_img_box, #shopping .line_btm').removeClass('on')
            }
            if(index == 7){
              $('header h1 a,header .gnb li a').css({color:'#588A9A'})
              $('.sect2_5 .left_img_box, #wg .line_btm').addClass('on')
            }else{
              $('.sect2_5 .left_img_box, #wg .line_btm').removeClass('on')
            }
            if(index == 8){
              $('header h1 a,header .gnb li a').css({color:'#73638C'})
              $('.sect2_6 .left_img_box, #gg .line_btm').addClass('on')
            }else{
              $('.sect2_6 .left_img_box, #gg .line_btm').removeClass('on')
            }
            if(index <= 3){
              $('header h1 a,header .gnb li a').css({color:''})
            }
            if(index == 9){
              $('#graphic1 .line_btm').addClass('on')
            }else{
              $('#graphic1 .line_btm').removeClass('on')

            }
            if(index >= 9){
              $('header h1 a,header .gnb li a').css({color:''})  
            }
            
          }
    });        
}

full('#fullpage')
// alert($(window).width())
$(window).resize(function(){
let winW = $(window).width();
if(winW < 760){
    full('');
} else {
    full('#fullpage')
}

});

  // $(window).scroll(function(){
  //   var scrT=$(window).scrollTop();
  //   var winH=$(window).height();
  //   console.log(scrT)

  // });



  // Wrap every letter in a span
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 100
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 100,
    delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 50,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.ml11',
    opacity: 0,
    duration: 300,
    easing: "easeOutExpo",
    delay: 300
  });
$('.dtl').click(function(){
  $('body').addClass('fixed');
  $('body').on('scroll touchmove mousewheel', function(event) {
  event.preventDefault();
  event.stopPropagation();
  return false;
  });
})

$('.frame').mouseover(function(){
  $('.site_img_before').hide()
}).mouseout(function(){
  $('.site_img_before').show()

})
// $('.mockup').mouseout(function(){
//   $('.site_img_before').show()
// })

$('#daon .btn_box .dtl').click(function(){
  $('#m_daon').show();
})
$('#hoam .btn_box .dtl').click(function(){
  $('#m_hoam').show();
})
$('#hpt .btn_box .dtl').click(function(){
  $('#m_hpt').show();
})
$('#shopping .btn_box .dtl').click(function(){
  $('#m_shopping').show();
})
$('#wg .btn_box .dtl').click(function(){
  $('#m_wg').show();
})
$('#gg .btn_box .dtl').click(function(){
  $('#m_gg').show();
})


$('.m_close,.m_close_btn').click(function(){
  $('.modal').hide()
  $('body').removeClass('fixed');
  $('body').off('scroll touchmove mousewheel');
})

$('#graphic2 .img_box img').mouseover(function(){
  $('#graphic2 .img_box img').css({opacity:0.8})
  $(this).css({opacity:1})
}).mouseout(function(){
  $('#graphic2 .img_box img').css({opacity:1})

})
const btn = document.getElementById('colorBtn');
btn.addEventListener('click', e => {
  let x = e.clientX - e.target.offsetLeft;
  let y = e.clientY - e.target.offsetTop;

  let ripple = document.createElement('span');
  ripple.style.left = x + 'px';
  ripple.style.top = y + 'px';
  ripple.className = "ripple_area";
  e.target.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 1000);
})

})