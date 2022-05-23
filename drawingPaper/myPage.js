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


function acyncMovePage(url) {
    // ajax option
    let ajaxOption = {
        url: url,
        async: true,
        type: "GET",
        dataType: "html",
        cache: false
    };

    $.ajax(ajaxOption).done(function (data) {
        document.location.href = url;

    });
}

// $(document).ready(function(){
//     $('#myPageContentLower').load("myPageProfile.html");

// });

// 메뉴에 언더바 슬라이딩 애니메이션
$(document).ready(function() {
    var classes = ['myProfile', 'myPage2', 'myPage3', 'myPage4'];
    var cls = R.find(function(v) {
    return location.href.indexOf(v) !== -1
    }, classes);
    
    if (cls)
    $('.myPageContentMenu').find('.' + cls).addClass('on');
    
});

function toggleChange(e) {
    switch (e) {
        case 1:
            let i = document.getElementById("profileContentImageContainer");
            let t1 = document.getElementById("profileToggleBtn1");
            if (t1.value == "n") {
                i.innerHTML = '<div class="myPageProfileOuterWrapper"><div class="myPageProfileImageContainer"><div class="myPageProfileImageWrapper"><div class="myPageProfileImageBox"><div class="myPageProfileImage" id="profileContentImage">박</div></div></div></div><div class="changeProfileImageWrapper"><div class="changeProfileImage"><span color="gray10" type="line"><input type="file" name="changeProfileImage" accept=".jpg,.jpeg,.png,.gif"><label for="changeProfileImage">파일 업로드</label></span></div><div class="profileImageExplaination">250 x 250 픽셀에 최적화되어 있으며, 10Mb 이하의 JPG, GIF, PNG 파일을 지원합니다.</div></div></div><div class="changeProfileSaveButton"><button><span class="changeProfileSaveButtonName">저장</span></button></div>';
                t1.value = "y";
                t1.innerHTML = "취소";
            } else {
                i.innerHTML = '<div id="profileContentImageContainer"><div id="profileContentImage" class="profileSmallImageWrapper"><div class="myPageProfileImageWrapper"><div class="myPageProfileImageBox"><div class="myPageProfileImage">박</div></div></div></div></div>';
                t1.value = "n";
                t1.innerHTML = "변경";
            }
            break;
        case 2:
            let n = document.getElementById("profileContentName");
            let t2 = document.getElementById("profileToggleBtn2");
            if (t2.value == "n") {
                n.innerHTML = '<div class="changeProfileForm"><div class="changeProfileInfo"><input type="text" value="이름"></div><div class="changeProfileSaveButton"><button><span class="changeProfileSaveButtonName">저장</span></button></div></div>';
                t2.value = "y";
                t2.innerHTML = "취소";
            } else {
                n.innerHTML = '<div class="profileContent" id="profileContentName">이름입니다</div>';
                t2.value = "n";
                t2.innerHTML = "변경";
            }
            break;
        case 3:
            let d = document.getElementById("profileContentIntro");
            let t3 = document.getElementById("profileToggleBtn3");
            if (t3.value == "n") {
                d.innerHTML = '<div class="changeProfileForm"><div class="changeProfileInfo" id="profileIntroChange"><textarea id="profileIntroChange1" placeholder="자기소개를 입력해주세요" onfocus="this.placeholder=\'\'" onblur="this.placeholder=\'자기소개를 입력해주세요\'"></textarea></div><div class="changeProfileSaveButton"><button><span class="changeProfileSaveButtonName">저장</span></button></div></div>';
                t3.value = "y";
                t3.innerHTML = "취소";
            } else {
                d.innerHTML = '<div class="profileContent" id="profileContentIntro">등록된 소개가 없습니다.</div>';
                t3.value = "n";
                t3.innerHTML = "변경";
            }
            break;
        case 4:
            let o = document.getElementById("profileContentProjectOpen");
            let t4 = document.getElementById("profileToggleBtn4");
            if (t4.value == "n") {
                if (!$('#profileProjectOpenButton').attr('checked')) {
                    o.innerHTML = '<div class="profileProjectOpenCheckForm"><input type="checkbox" id="profileProjectOpenButton" class="profileProjectOpenButton" style="cursor:pointer;"><label class="openCheckButtonLabel">등록한 프로젝트를 공개합니다.</label></div><div class="changeProfileSaveButton"><button onclick="openCheckSave()"><span class="changeProfileSaveButtonName">저장</span></button></div></div>';
                } else {
                    o.innerHTML = '<div class="profileProjectOpenCheckForm"><input type="checkbox" id="profileProjectOpenButton" class="profileProjectOpenButton" style="cursor:pointer;" checked><label class="openCheckButtonLabel">등록한 프로젝트를 공개합니다.</label></div><div class="changeProfileSaveButton"><button onclick="openCheckSave()"><span class="changeProfileSaveButtonName">저장</span></button></div></div>';
                }
                t4.value = "y";
                t4.innerHTML = "취소";
            } else {
                if (!$('#profileProjectOpenButton').prop('checked')) {
                    o.innerHTML = '<label class="openCheckButtonLabel">등록한 프로젝트를 공개하지 않습니다.</label>';
                } else {
                    o.innerHTML = '<input type="checkbox" id="profileProjectOpenButton" class="profileProjectOpenButton" checked disabled><label class="openCheckButtonLabel">등록한 프로젝트를 공개합니다.</label>';
                }
                t4.value = "n";
                t4.innerHTML = "변경";
            }
            break;
    }

}

function openCheckSave() {

    let o = document.getElementById("profileContentProjectOpen");
    let t4 = document.getElementById("profileToggleBtn4");

    if (!$('#profileProjectOpenButton').prop('checked')) {
        o.innerHTML = '<label class="openCheckButtonLabel">등록한 프로젝트를 공개하지 않습니다.</label>';
    } else {
        o.innerHTML = '<input type="checkbox" id="profileProjectOpenButton" class="profileProjectOpenButton" checked disabled><label class="openCheckButtonLabel">등록한 프로젝트를 공개합니다.</label>';
    }
    t4.value = "n";
    t4.innerHTML = "변경";
}

