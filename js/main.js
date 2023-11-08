$(function () {
  //메인슬라이드
  $(".visual").slick({
    autoplay: true,
    //페이지버튼 나옴
    dots: true,
  });
  $(".event").slick({
    autoplay: true,
    //페이지버튼 나옴
    // dots: true,
    arrows: false,
  });

  //top버튼을 클릭하면 상단으로 이동
  $(".btn_top").click(function () {
    //스크로바위 위치를 0으로 이동
    $("body,html").animate({ scrollTop: 0 });
  });
});
