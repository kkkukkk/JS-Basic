//������ ��ũ

$(document).ready(function () {
    $("#header").load("../html/pieceHeader.html");
    $("#admheader").load("../html/adminHeader.html");
    // $("#nav").load("../html/pieceNav.html");
    // $("#sideBar").load("/html/pieceSidebar.html");
    $("#footer").load("../html/pieceFooter.html");
  });
  
  // ������ ����  �̺�Ʈ
  // �¿��� cee
  $(document).ready(function () {
    $("label[for='sideBtn1']").click(function () {
      $("#nav").toggleClass("on");
    });
  });
  
  // ��ũ�� �̺�Ʈ
  // header action
  $(window).scroll(function () {
    if ($(this).scrollTop() == 0) $("#header").css("opacity", "1");
    else $("#header").css("opacity", ".4");
  });
  
  //
  //popupShift
  function popup() {
    //�˾� �ڽ� ����
    $("#popupBox").css("display", "block");
  }