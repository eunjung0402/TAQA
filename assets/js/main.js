$(function(){

    gsap.set('.header .text_bg',{xPercent:100})
    gsap.set('.sc_visual .title_area .wrap span',{yPercent:100})
    gsap.set('.sc_visual .group_title .text_area',{yPercent:100})
    gsap.set('.sc_visual .group_title .text_box',{xPercent:150})
    gsap.set('.sc_visual .group_title .link_box',{xPercent:150})
    gsap.set('.sc_visual .down_btn',{opacity:0})

    // 인트로모션
    introMotion = gsap.timeline({})
    introMotion
    .to('.sc_visual .title_area .wrap span',{yPercent:0})
    .to('.sc_visual .title_area .wrap',{'overflow':'visible'})
    .to('.sc_visual .group_title .text_area',{yPercent:0})
    .to('.sc_visual .group_title .text_box',{xPercent:0})
    .to('.sc_visual .group_title .link_box',{xPercent:0})
    .to('.sc_visual .down_btn',{opacity:1})


    // 스크롤시 헤더 움직임
    let defaultScrollVal = 0;
    
    scrollHeaderMotion = gsap.timeline({
      scrollTrigger:{
        trigger:'header',
        start:'10% 0%',
        end:'100% 100%',
        //markers:true,
        scrub:1,
        pause:true,
      }
    })

    scrollHeaderMotion
    .to('.header .text_bg',{xPercent:0})
    .to('.header',{'height':'68px'})


    $(window).scroll(function(){
      let realScrollVal = $(document).scrollTop();
      if(realScrollVal > 0) {
        scrollHeaderMotion.play()
      }else {
        scrollHeaderMotion.reverse()
      }
  });

    // 메뉴 서치바
    $(".gnb_search").click(function(){
      let searchBarTrue = $('.group_search').hasClass('active');
      if(searchBarTrue){
      $(".group_search").removeClass("active");
      $(".group_search").slideUp();
      $(".gnb_search .open_btn").css({"transform":"translate(-50%, -50%) scale(1)"});
      $(".gnb_search .close_btn").css({"transform":"scale(0)"});
    } else {
      $(".group_search").addClass("active");
      $(".group_search").slideDown();
      $(".gnb_search .open_btn").css({"transform":"scale(0)"});
      $(".gnb_search .close_btn").css({"transform":"translate(-50%, -50%) scale(1)"});
    }
    })
  

    // 메뉴 서브메뉴
    $(".gnb_menu").click(function(){
      $('body').addClass('no_scroll');
      $('.header .group_mobile_lnb .lnb_area').css({"visibility":"visible"})
      $('.header .lnb_bg').css({"opacity":"1","visibility":"initial"})
      $('.lnb_area').css('transform','translateX(0%)')
    })

    $(".tab_close .close_btn").click(function(){
      $('body').removeClass('no_scroll');
      $('.header .group_lnb .lnb_area').css({"visibility":"hidden"})
      $('.header .lnb_bg').css({"opacity":"0","visibility":"hidden"})
      $('.lnb_area').css('transform','translateX(100%)');
      $('.group_mobile_lnb .lnb_list').removeClass('active move');
    })

    $(".lnb_bg").click(function(){
      $('body').removeClass('no_scroll');
      $('.header .group_lnb .lnb_bg_area').css({"visibility":"hidden"})
      $('.header .lnb_bg').css({"opacity":"0","visibility":"hidden"})
      $('.lnb_area').css('transform','translateX(100%)')
    })

    // 모바일 서브메뉴 무빙
    $('header .group_mobile_lnb .link_btn').click(function(e){
      e.preventDefault();
      if($(this).siblings('.inner2')) {
        $(this).parent().parent('.inner1').css('height','auto');
        $(this).parent().parent('.inner1').addClass('move');
        $('.inner2').removeClass('active');
        $(this).siblings('.inner2').addClass('active');
      }
      if($(this).siblings('.inner3')) {
        $(this).parent().parent().parent().parent('.inner1').css('height','520px');
        $(this).parent().parent('.inner2').addClass('move active');
        $(this).siblings('.inner3').addClass('active');
      }
    })

    // 모바일 서브메뉴 백 버튼
    $('header .group_mobile_lnb .back_btn').click(function(){
      if($(this).parent().parent().parent('.inner2')){
        $(this).parent().parent().parent().parent().removeClass('move')
      }

      if($(this).parent().parent().parent('.inner3')){
        $('.inner1').css('height','auto');
        $(this).parent().parent().parent().parent().removeClass('move');
        $(this).parent().parent().removeClass('active')
      }
    })

    // pc 서브메뉴 호버시
    $('.gnb_text_item').hover(function(){
      $('.gnb .inner_wrap').css('visibility','visible');
      $('.inner1').removeClass('active');
      $(this).find('.inner1').addClass('active').siblings().removeClass('active');
    },function(){
      $('.gnb .inner_wrap').css('visibility','hidden');
      $('.inner_wrap  div').removeClass('active');
    })

    // 메뉴의 다음 페이지로 이동
    $('.sub_menu_list > .sub_menu_item > a').click(function(e){
      e.preventDefault();
      if($(this).siblings('.inner2')){
        $('.inner2').removeClass('active');
        $(this).parents('.inner1').addClass('hide');
        $(this).siblings('.inner2').addClass('active');
      }
      if($(this).siblings('.inner3')){
        $(this).parents('.inner2').addClass('hide');
        $(this).parents('.inner2').addClass('active');
        $('.inner3').removeClass('active');
        $(this).siblings('.inner3').addClass('active');
      }
      
    })

    // 메뉴의 이전 페이지로 이동
    $('.back_item').click(function(){
      if($(this).parent().parent('.inner2')){
        $(this).parent().parent().removeClass('active');
        $(this).parents('.inner1').removeClass('hide');
      }

      if($(this).parent().parent('.inner3')){
        $(this).parent().parent().removeClass('active');
        $(this).parents('.inner2').removeClass('hide');
      }
    })



    // 탭 메뉴
    $(".tab_item").click(function(){
      $(".tab_item").removeClass('active');
      $(this).addClass('active');
    })

    $('.tab_area a').click(function(e){
      e.preventDefault();

      target = $(this).attr('href');
      //console.log($(this))
      $(this).addClass('on').siblings().removeClass('on');
      $(target).addClass('on').siblings().removeClass('on');
  })

  // 스크롤 이벤트
  gsap.set('.sc_tab .info_area .desc',{yPercent:100})
  gsap.set('.sc_tab .info_area .link_btn',{yPercent:100})
  gsap.set('.tab_area',{yPercent:100, opacity:0})
  gsap.set('.swiper3',{yPercent:100,opacity:0})
  gsap.set('.swiper2',{yPercent:100,opacity:0})
  gsap.set('.sc_people .group_text .title',{yPercent:100,opacity:0})
  gsap.set('.sc_people .group_text .desc',{yPercent:100})
  gsap.set('.sc_people .group_text .link_btn',{yPercent:100,opacity:0})
  gsap.set('.sc_people .group_img',{xPercent:150})
  gsap.set('.sc_news .group_flex .linktitle_btn',{yPercent:100})
  gsap.set('.sc_news .group_flex .title',{yPercent:100,opacity:0})
  gsap.set('.sc_news .group_flex .link_btn',{yPercent:100,opacity:0})
  gsap.set('.sc_talk .talk_link',{yPercent:100,opacity:0})

  // offer section
  scTabTitleMotion = gsap.timeline({
    scrollTrigger:{
      trigger:'.sc_tab',
      start:'0% 80%',
      end:'100% 100%',
      //markers:true,
    }
  })
  scTabTitleMotion
  .addLabel('title')
  .to('.sc_tab h2.title',{yPercent:0,opacity:1},'title')
  .to('.sc_tab .info_area .desc',{yPercent:0},'title')
  


  scTabMotion1 = gsap.timeline({
    scrollTrigger:{
      trigger:'.sc_tab',
      start:'0% 30%',
      end:'100% 100%',
      //markers:true,
    }
  })
  scTabMotion1
  .to('.sc_tab .info_area .link_btn',{yPercent:0})

  scTabMotion1 = gsap.timeline({
    scrollTrigger:{
      trigger:'.tab_area',
      start:'0% 90%',
      end:'100% 100%',
      //markers:true,
    }
  })
  scTabMotion1
  .to('.tab_area',{yPercent:0,opacity:1})


  scTabMotion2 = gsap.timeline({
    scrollTrigger:{
      trigger:'.sc_tabslide',
      start:'0% 70%',
      end:'100% 100%',
      //markers:true,
    }
  })
  scTabMotion2
  .to('.swiper3',{yPercent:0,opacity:1})



  peopleMotion = gsap.timeline({
    scrollTrigger:{
      trigger:'.sc_people',
      start:'0% 50%',
      end:'100% 100%',
      //markers:true,
    }
  })
  peopleMotion
  .to('.sc_people .group_text .title',{yPercent:0,opacity:1})
  .to('.sc_people .group_text .desc',{yPercent:0})
  .to('.sc_people .group_img',{xPercent:0})
  .to('.sc_people .group_text .link_btn',{yPercent:0,opacity:1})


  // 뉴스섹션
  newsMotion = gsap.timeline({
    scrollTrigger:{
      trigger:'.sc_news',
      start:'0% 80%',
      end:'100% 100%',
      //markers:true,
    }
  })
  newsMotion
  .to('.sc_news h2.title',{yPercent:0, opacity:1})
  .to('.sc_news .group_flex .title',{yPercent:0,opacity:1})
  .to('.sc_news .group_flex .link_btn',{yPercent:0,opacity:1})
  .to('.swiper2',{yPercent:0,opacity:1})


  // talk section
  talkMotion = gsap.timeline({
    scrollTrigger:{
      trigger:'.sc_talk',
      start:'0% 80%',
      end:'100% 100%',
      //markers:true,
    }
  })
  talkMotion
  .to('.sc_talk h2.title',{yPercent:0,opacity:1})
  .to('.sc_talk .talk_link',{yPercent:0,opacity:1})


})