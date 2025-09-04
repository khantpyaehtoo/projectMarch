$(document).ready(function(){
    console.log('jquery');
    // start back to top
    $(".btn-bcktop").hide();
    $(window).scroll(function(){
        var getscrolltop = $(this).scrollTop();
        console.log(getscrolltop);

        if(getscrolltop >= 400){
            $(".btn-bcktop").fadeIn(1000);
        }else{
            $(".btn-bcktop").fadeOut(1000);
        }
    })
})