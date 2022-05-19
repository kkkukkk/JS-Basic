/**
 * 
 */

 $(function () {
   
    $(window).scroll(() => {
       let scrollTop = $(window).scrollTop();
       if (Math.round(scrollTop) > 105) {
          $(".tab-menu--box").css({ position: "fixed" });
          $(".tab-menu--box").css({ top: 64 });
          $(".tab-menu--box").css({ transition: "0.1s" });
       } else {
          $(".tab-menu--box").css({ position: "static" });
       }
    });
 })
 
 
 $(function () {
   let $info = $(location).attr("href");
   let arr = $info.split("/");
   let page = arr[arr.length - 1];
 //  console.log('aa')
 //  console.log(page);
   switch (page) {
     case "defaultInfo.html":
       $(".default-info").addClass("cur-page");
       break;
     case "fundingPlan.html":
       $(".funding-plan").addClass("cur-page");
       break;
     case "projectPlan.html":
       $(".project-plan").addClass("cur-page");
       break;
     case "createrInfo.html":
       $(".creater-info").addClass("cur-page");
       break;
   }
 });
 
 $(".tab_menu a").on("click", () => {
   $(this).closest("li").addClass("cur-page");
 });
 
 $(".creater-area__select").on("click", function () {
   if ($(this).find(".sido, .gugun").hasClass("hide")) {
     $(this).find(".sido, .gugun").removeClass("hide");
   } else {
     $(this).find(".sido, .gugun").addClass("hide");
   }
 });
 
 $(document).on("click", ".sido button, .gugun button", function () {
   $input = $(this).closest(".creater-area__select").find("input");
   console.log($input.attr("value", $(this).val()));
   $input.attr($(this).val());
 });

// a에 클릭 시 on클래스를 넣어주고 다른 자식들엔 지워줌
// span 부분에 현재 선택된 a의 길이만큼 width
// 시작 위치를 현재 선택된 a의 왼쪽 offset만큼 
// 스타일을 추가해줌
// 부모에 relative, 자식(span 부분)에 absolute를 걸어서
// 시작위치 left: 0 px
// offsetLeft는 현재 a가 왼쪽 0부터 떨어진 정도
 $('nav a').on('click', function(){
    $(this).addClass('on');
    $(this).siblings().removeClass('on');
    $('nav div > span').css({width: this.offsetWidth + 'px'});
    $('nav div > span').css({left: this.offsetLeft + 'px'});
});