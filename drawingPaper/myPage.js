let horizontalUnderLine = document.getElementById("horizontal-underline");
let horizontalMenus = document.querySelectorAll(".myPageContentMenu a");

function horizontalIndicator(e) {
    horizontalUnderLine.style.left = e.currentTarget.offsetLeft + "px";
    horizontalUnderLine.style.width = e.currentTarget.offsetWidth + "px";
    horizontalUnderLine.style.top = e.currentTarget.offsetTop + e.currentTarget.offsetHeight + 16 + "px";
    
    if (e.target.classList[1] === "clicked"){
        e.target.classList.remove("clicked");
    } else{
        for (var i = 0; i < horizontalMenus.length; i++){
            horizontalMenus[i].classList.remove("clicked");
        }
        e.target.classList.add("clicked");
    }
    
}


horizontalMenus.forEach((menu) =>
    menu.addEventListener("click", (e) => horizontalIndicator(e))
);


function acyncMovePage(url){
    // ajax option
    var ajaxOption = {
            url : url,
            async : true,
            type : "GET",
            dataType : "html",
            cache : false
    };
    
    $.ajax(ajaxOption).done(function(data){
        $('#myPageContentLower').children().remove();
        $('#myPageContentLower').html(data);
    });
}