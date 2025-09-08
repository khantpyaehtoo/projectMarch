$(document).ready(function(){

    // start back to top
    $(".btn-bckttop").hide();
    $(window).scroll(function(){
        var getscrolltop = $(this).scrollTop();
        // console.log(getscrolltop);

        if(getscrolltop >= 370){
            $(".btn-bckttop").fadeIn(1000);
        }else{
            $(".btn-bckttop").fadeOut(1000);
        }
    })

    // date time
    const getyear = $('#getyear');
    const getFullYear = new Date().getFullYear();
    getyear.text(getFullYear);
});

function dropbtn(e) {
    // console.log(e.target);
    e.target.parentElement.nextElementSibling.classList.toggle('shows');
}