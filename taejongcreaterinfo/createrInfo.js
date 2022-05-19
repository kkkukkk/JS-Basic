/**
 * 
 */

$(".input-box input").on("focus", function () {
    $(this).attr("placeholder", "");
    $val = $(this).val();
    $box = $(this).closest(".input-box");

    if ($val.length == 0) {
        $(".input-box__msg").removeClass("hide");
        $($box).css({ border: "1px solid var(--red)" });
        $(".input-box__length").css({ color: "var(--red)" });
    }
});

$(".input-box input").on("blur", function () {
    $(this).attr("placeholder", "창작자님의 이름을 입력해주세요");
});

$(".input-box input").on("input", function () {
    $val = $(this).val();
    $box = $(this).closest(".input-box");

    $(".input-box__length").text($val.length + "/20");

    if ($val.length == 0) {
        $(".input-box__msg").removeClass("hide");
    } else {
        $(".input-box__msg").addClass("hide");
    }
    if ($val.length == 0 || $val.length > 20) {
        $($box).css({ border: "1px solid var(--red)" });
        $(".input-box__length").css({ color: "var(--red)" });
    } else {
        $($box).css({ border: "1px solid var(--black)" });
        $(".input-box__length").css({ color: "var(--light-gray)" });
    }
});

$(".creater-introduction__text-box textarea").on("input", function () {
    var $textBox = $(".creater-introduction__text-box");
    var $textArea = $textBox.find("textarea");

    if ($textArea.val().length < 10) {
        $(".text-box__msg").removeClass("hide");
    } else {
        $(".text-box__msg").addClass("hide");
    }

    if ($textArea.val().length < 10 || $textArea.val().length > 300) {
        $textBox.css({ border: "1px solid var(--red)" });
    } else {
        $textBox.css({ border: "1px solid var(--black)" });
    }

    $(".text-box__length").text($textArea.val().length + "/300");
});

$("#admheader").load("cpHeader.jsp");


/////////////////추가부분/////////////////

function pnCert() {
    let innerArea = document.getElementById("certInputTarget");
    let btnArea1 = document.getElementById("certInputBtnTarget1");
    let btnArea2 = document.getElementById("certInputBtnTarget2");
    let timer = document.getElementById("timer");
    let sendBtn = document.getElementById('certSendBtn');
    let certBtn = document.getElementById('certBtn');
    

    ////////////////타이머 부분///////////////////////////////////
    let time = 179;
    processID = setInterval(function () {
        if (time < 0) {
            certBtn.disabled=true;
            certBtn.style.pointerEvents = "none";
            certBtn.style.backgroundColor = "grey";
            clearInterval(processID);
            return;
        }
        let mm = String(Math.floor(time / 60)).padStart(2, "0");
        let ss = String(time % 60).padStart(2, "0");
        let result = mm + ":" + ss;
        document.getElementById("timeLimit").innerText = result;
        time--;
    }, 1000);

    sendBtn.style.pointerEvents = "none";
    sendBtn.disabled = true;
    sendBtn.style.backgroundColor = "grey";

    innerArea.innerHTML = "<div class='certInput'><input type='text' placeholder='인증번호 입력' onfocus='this.placeholder=\"\"' onblur='this.placeholder=\"인증번호 입력\"'></div>";
    btnArea1.innerHTML = "<button class='certOutBtn' onclick='reSend()'>재전송</button>";
    btnArea2.innerHTML = "<button class='certOutBtn' id='certBtn'>인증</button>";
    timer.innerHTML = "<div id='timeLimit'>03:00</div>";
    
};

function reSend(){
    // 인증번호 재 전송
    if(confirm('인증번호를 재 전송 하시겠습니까?')){
    ////////////////////재 전송 타이머 부분//////////////////////////
    document.getElementById("timeLimit").innerHTML = "03:00";
    let time = 179;
    clearInterval(processID);
    processID = setInterval(function () {
        if (time < 0) {
            certBtn.disabled = true;
            certBtn.style.pointerEvents = "none";
            certBtn.style.backgroundColor = "grey";
            clearInterval(processID);
            return;
        }
        let mm = String(Math.floor(time / 60)).padStart(2, "0");
        let ss = String(time % 60).padStart(2, "0");
        let result = mm + ":" + ss;
        document.getElementById("timeLimit").innerText = result;
        time--;
    }, 1000);

    }else{
    }
}

let certArea = document.getElementById("auth-wrap");
let certAreaOri = document.getElementById("auth-wrap").innerHTML;


function auth__btn() {
    certArea.innerHTML = "<div class='certForm'><div class='certInput'><input type='text' placeholder='전화번호 입력 (-를 제외하고 입력해 주세요)' onfocus='this.placeholder=\"\"' onblur='this.placeholder=\"전화번호 입력 (-를 제외하고 입력해 주세요)\"'></div><div class='certBtnWrap'><button onclick='pnCert()' class='certInputBtn' id='certSendBtn'>인증번호 전송</button></div></div><div class='certBtnOut'><div id=\"certInputTarget\"></div><div class='timer' id='timer'></div><div id=\"certInputBtnTarget1\"></div><div id=\"certInputBtnTarget2\"></div><div><button class='certOutBtn' onclick='reSetBtn()'>취소</button></div></div>";
};

function reSetBtn(){   
    certArea.innerHTML = certAreaOri;
    if(processID){
        clearInterval(processID);
    }
};

//////////////////2차 추가//////////////////////

let accountArea = document.getElementById("account-wrap");
let accountAreaOri = document.getElementById("account-wrap").innerHTML;

function account__btn() {

    accountArea.innerHTML = "<div class='accountForm'><div class='accountInput'><input type='text' placeholder='계좌번호 입력' onfocus='this.placeholder=\"\"'onblur='this.placeholder=\"계좌번호 입력\"'></div><div class='accountBtnWrap'><button onclick='acCert()' class='accountInputBtn' id='accountSendBtn'>계좌 등록</button></div></div><div class='accountBtnOut'><div><button class='accountOutBtn' onclick='acreSetBtn()'>취소</button></div></div>";

};

function acreSetBtn(){
    accountArea.innerHTML = accountAreaOri;
}

function acCert(){
    if(confirm('계좌를 등록하시겠습니까?')){

    }else{}
}