// let horizontalUnderLine = document.getElementById("horizontal-underline");
// let horizontalMenus = document.querySelectorAll(".myPageContentMenu a");
// let horizontalMenuss = document.querySelectorAll("eachMenu");
// let fst = document.getElementById('fst');

// function horizontalIndicator(e) {
//     // horizontalUnderLine.style.transition = 0.3 + 's';
//     // horizontalUnderLine.style.left = e.currentTarget.offsetLeft + "px";
//     // horizontalUnderLine.style.width = e.currentTarget.offsetWidth + "px";
//     // horizontalUnderLine.style.top = e.currentTarget.offsetTop + e.currentTarget.offsetHeight + 20 + "px";

//     if (e.target.classList[1] === "clicked"){
//         e.target.classList.remove("clicked");
//     } else{
//         for (let i = 0; i < horizontalMenus.length; i++){
//             horizontalMenus[i].classList.remove("clicked");
//         }
//         e.target.classList.add("clicked");
//     }

// }

// horizontalMenus.forEach((menu) =>
//     menu.addEventListener("click", (e) => horizontalIndicator(e))
// );

// $(document).ready(function(){
//     horizontalUnderLine.style.transition = 0 + 's';
//     horizontalUnderLine.style.left = fst.offsetLeft + "px";
//     horizontalUnderLine.style.width = fst.offsetWidth + "px";
//     horizontalUnderLine.style.top = fst.offsetTop + fst.offsetHeight + 20 + "px";
// });


function acyncMovePage(url){
    // ajax option
    let ajaxOption = {
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

$(document).ready(function(){
    $('#myPageContentLower').load("myPageProfile.html");

});

$('nav a').on('click', function(){
    $(this).addClass('on');
    $(this).siblings().removeClass('on');
    $('nav div > span').css({width: this.offsetWidth + 'px'});
    $('nav div > span').css({left: this.offsetLeft + 'px'});
});

function checkWebPage(){
    if($("#urlInput").val() == ""){
        alert("URL??? ??????????????????.");
        $("#urlInput").focus();
        return false;
    }
    let urlInput =  $("#urlInput").val();
    const Url = /((\w+)[.])+(asia|biz|cc|cn|com|de|eu|in|info|jobs|jp|kr|mobi|mx|name|net|nz|org|travel|tv|tw|uk|us)(\/(\w*))*$/i;
    let urlRes = Url.test(urlInput);

    let urlCheck = document.getElementById("urlCheck");
    let urlCheckForm = document.getElementById("urlCHeckForm");

    if(!urlRes){
        $('#urlCheck').css({color: 'red'});
        $('#urlCheckForm').css({border: '1px solid red'});
        urlCheck.innerHTML = "????????? URL??? ???????????????!"
    }else if(urlRes){
        $('#urlCheck').css({color: 'green'});
        $('#urlCheckForm').css({border: '1px solid rgb(230, 230, 230)'});
        urlCheck.innerHTML = "?????? ????????? URL ?????????."
    }

}



    



function toggleChange(e)
{      
    let i = document.getElementById("profileContentImageContainer");
    let n = document.getElementById("profileContentName");
    let u = document.getElementById("profileContentUrl");
    let d = document.getElementById("profileContentIntro");
    let uu = document.getElementById("profileContentWebPage");
    let o = document.getElementById("profileContentProjectOpen");

    var iOri = document.getElementById("profileContentImageContainer").innerHTML;
    var nOri = document.getElementById("profileContentName").innerHTML;
    var uOri = document.getElementById("profileContentUrl").innerHTML;
    var dOri = document.getElementById("profileContentIntro").innerHTML;
    var uuOri = document.getElementById("profileContentWebPage").innerHTML;
    var oOri = document.getElementById("profileContentProjectOpen").innerHTML;
    switch(e){
        case 1:
            let t1 = document.getElementById("profileToggleBtn1");
            console.log("?????????");
            if(t1.value=="n"){
                i.innerHTML='<div class="myPageProfileOuterWrapper"><div class="myPageProfileImageContainer"><div class="myPageProfileImageWrapper"><div class="myPageProfileImageBox"><div class="myPageProfileImage" id="profileContentImage">???</div></div></div></div><div class="changeProfileImageWrapper"><div class="changeProfileImage"><span color="gray10" type="line"><input type="file" name="changeProfileImage" accept=".jpg,.jpeg,.png,.gif"><label for="changeProfileImage">?????? ?????????</label></span></div><div class="profileImageExplaination">250 x 250 ????????? ??????????????? ?????????, 10Mb ????????? JPG, GIF, PNG ????????? ???????????????.</div></div></div><div class="changeProfileSaveButton"><button><span class="changeProfileSaveButtonName">??????</span></button></div>';
                t1.value="y";
                t1.innerHTML="??????";
            }else{
                i.innerHTML=iOri;
                t1.value="n";
                t1.innerHTML="??????";
            }
            break;
        case 2:
            let t2 = document.getElementById("profileToggleBtn2");
            console.log("??????");
            if(t2.value=="n"){
                n.innerHTML='<div class="changeProfileForm"><div class="changeProfileInfo"><input type="text" value="??????"></div><div class="changeProfileSaveButton"><button><span class="changeProfileSaveButtonName">??????</span></button></div></div>';
                t2.value="y";
                t2.innerHTML="??????";
            }else{
                n.innerHTML=nOri;
                t2.value="n";
                t2.innerHTML="??????";
            } 
            break;
        case 3:
            let t3 = document.getElementById("profileToggleBtn3");
            console.log("URL");
            if(t3.value=="n"){
                u.innerHTML='<div class="changeProfileForm"><div class="changeProfileInfo"><input type="text" value="URL"></div><div class="changeUrlExplain">????????? ????????? ???????????? ????????? ????????? ???????????????. ??? ) tumblbug.com/u/???????????????</div><div class="changeProfileSaveButton"><button><span class="changeProfileSaveButtonName">??????</span></button></div></div>';
                t3.value="y";
                t3.innerHTML="??????";
            }else{
                u.innerHTML=uOri;
                t3.value="n";
                t3.innerHTML="??????";
            }
            break;
        case 4:
            let t4 = document.getElementById("profileToggleBtn4");
            console.log("??????");
            if(t4.value=="n"){
                d.innerHTML='<div class="changeProfileForm"><div class="changeProfileInfo" id="profileIntroChange"><textarea id="profileIntroChange1" placeholder="??????????????? ??????????????????" onfocus="this.placeholder=\'\'" onblur="this.placeholder=\'??????????????? ??????????????????\'"></textarea></div><div class="changeProfileSaveButton"><button><span class="changeProfileSaveButtonName">??????</span></button></div></div>';
                t4.value="y";
                t4.innerHTML="??????";
            }else{
                d.innerHTML=dOri;
                t4.value="n";
                t4.innerHTML="??????";
            }
            break;
        case 5:
            let t5 = document.getElementById("profileToggleBtn5");
            console.log("????????????");
            if(t5.value=="n"){
                uu.innerHTML='<div class="changeProfileForm"><div class="changeProfileUrl"><div id="urlCheckForm" class="changeProfileInfo"><input type="text" id="urlInput" value="????????????"></div><button class="changeProfileUrlButton" color="gray10" onclick="checkWebPage()">URL ??????</button></div><span id="urlCheck"></span><div class="changeProfileSaveButton"><button><span class="changeProfileSaveButtonName">??????</span></button></div></div>';
                t5.value="y";
                t5.innerHTML="??????";
            }else{
                uu.innerHTML=uuOri;
                t5.value="n";
                t5.innerHTML="??????";
            }
            break;
        case 6:
            let t6 = document.getElementById("profileToggleBtn6");
            console.log("??????/?????????");
            if(t6.value=="n"){
                if(!$('#profileProjectOpenButton').attr('checked')){
                    o.innerHTML='<div class="profileProjectOpenCheckForm"><input type="checkbox" id="profileProjectOpenButton" class="profileProjectOpenButton" style="cursor:pointer;"><label class="openCheckButtonLabel">????????? ??????????????? ???????????????.</label></div><div class="changeProfileSaveButton"><button onclick="openCheckSave()"><span class="changeProfileSaveButtonName">??????</span></button></div></div>';
                }else{
                    o.innerHTML='<div class="profileProjectOpenCheckForm"><input type="checkbox" id="profileProjectOpenButton" class="profileProjectOpenButton" style="cursor:pointer;" checked><label class="openCheckButtonLabel">????????? ??????????????? ???????????????.</label></div><div class="changeProfileSaveButton"><button onclick="openCheckSave()"><span class="changeProfileSaveButtonName">??????</span></button></div></div>';
                }
                t6.value="y";
                t6.innerHTML="??????";
            }else{
                if(!$('#profileProjectOpenButton').prop('checked')){
                    o.innerHTML='<label class="openCheckButtonLabel">????????? ??????????????? ???????????? ????????????.</label>';
                }else{
                    o.innerHTML='<input type="checkbox" id="profileProjectOpenButton" class="profileProjectOpenButton" checked disabled><label class="openCheckButtonLabel">????????? ??????????????? ???????????????.</label>';
                }
                t6.value="n";
                t6.innerHTML="??????";
            }
            break;
    }

}

function openCheckSave(){
    let t6 = document.getElementById("profileToggleBtn6");

    if(!$('#profileProjectOpenButton').prop('checked')){
        o.innerHTML='<label class="openCheckButtonLabel">????????? ??????????????? ???????????? ????????????.</label>';
    }else{
        o.innerHTML='<input type="checkbox" id="profileProjectOpenButton" class="profileProjectOpenButton" checked disabled><label class="openCheckButtonLabel">????????? ??????????????? ???????????????.</label>';
    }
    t6.value="n";
    t6.innerHTML="??????";
}
