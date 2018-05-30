// ------------PARALLAX------------
jQuery(document).ready(function(){
    $(window).scroll(function(e){
        parallaxScroll();
    });

    function parallaxScroll(){
        var scrolled = $(window).scrollTop();
        $('#parallax-bg-1').css('top',(0-(scrolled*.25))+'px');
        $('#parallax-bg-2').css('top',(0-(scrolled*.4))+'px');
        $('#parallax-bg-3').css('top',(0-(scrolled*.75))+'px');
        $('#parallax-bg-4').css('top',(0+(scrolled*.25))+'px');
    }
}); 








// ------------SLIDER------------
autoSlider();
let left = 0;
let slider = document.getElementsByClassName('slider');
let sliderWidth = slider[0].offsetWidth;
let sliderContainer = document.getElementsByClassName('sliderContainer');


let button = document.getElementsByTagName('button');

for (let i = 0; i < button.length; i++){
    button[i].style.width = sliderWidth / 2 + "px";
}


function autoSlider() {
    timer = this.timer;
    if ( document.body.offsetWidth < 1024) {
        timer = setTimeout(function(){
        left = left - sliderWidth;
            width = sliderWidth * sliderContainer[0].childElementCount;
            if (left < -(sliderWidth * (sliderContainer[0].childElementCount - 1))) {
                left = 0;
                clearTimeout(timer)
            }
            sliderContainer[0].style.left = left + "px";
            sliderContainer[0].style.width = width + "px";
            autoSlider();
        },3500)
    } else {
        timer = setTimeout(function(){
            left = left - sliderWidth;
            width = sliderWidth * sliderContainer[0].childElementCount;
            if (left < -(sliderWidth * (sliderContainer[0].childElementCount - 2))) {
                left = 0;
                clearTimeout(timer)
            }
            sliderContainer[0].style.left = (left / 2) + "px";
            sliderContainer[0].style.width = (width / 2) + "px";
            autoSlider();
        },3500)
    }
}


// function clickLeft(){
//     if(left == -(sliderWidth * (sliderContainer[0].childElementCount - 1))) {
//         sliderContainer[0].style.left = 0 + "px";
//     } else {
//         sliderContainer[0].style.left = left + -sliderWidth + "px";
//     }
// }

// function clickRight(){
//     if (left == 0) {
//         sliderContainer[0].style.left = -(sliderWidth * (sliderContainer[0].childElementCount - 1)) + "px";
//     } else {
//         sliderContainer[0].style.left = left + sliderWidth + "px";
//     }

// }
