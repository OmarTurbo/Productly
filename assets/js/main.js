let a = $(".hero").offset().top;
let btn = document.querySelector('.fa-bars');
$(document).scroll(function () {
    if ($(this).scrollTop() > a) {
        $('header').css({ "backdrop-filter": "blur(8px)" });
    } else {
        $('header').css({ "background": "none" });
    }
});
// Show the navbar section
$(window).resize(() => {
    let width = $(window).width();

    if(width < 992){
        $(btn).click(()=>{
            if($("#navbar").css('display') === "flex"){
                $("#navbar").css("display","none")
            }else{
                $("#navbar").css("display","flex");
            }
        })
    }else{
        $("#navbar").css("display","flex");
    }
})
