$(document).ready(function(){
    let money = parseInt($('#hi').val());
    $('#hi').attr('value',money);
});   

function cal(val){
    
    if(!$('#hi').val()){
        $('#hi').val(0);
        console.log("아잉");
    }
    
    let money = parseInt($('#hi').val());

    money += val;
    $('#hi').val(money);
}


function reset(){
    let money = parseInt($('#hi').val());
    money = 0;
    $('#hi').val(0);
}