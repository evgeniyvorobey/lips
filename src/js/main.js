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


let left = 0;
let slider = document.getElementsByClassName('slider');
let sliderContainer = document.getElementsByClassName('sliderContainer');


function autoSlider() {
    timer = this.timer;
    if ( slider.length >= 1 ) {
            let sliderWidth = slider[0].offsetWidth;
            let sliderHeight = sliderWidth;
            // let sliderContainer = document.getElementsByClassName('sliderContainer');
            slider[0].style.height = sliderHeight + "px"
        if ( document.body.offsetWidth <= 767) {
            timer = setTimeout(function(){
                left = left - sliderWidth;
                width = sliderWidth * sliderContainer[0].childElementCount;
                if (left < -(sliderWidth * (sliderContainer[0].childElementCount - 1))) {
                    left = 0;
                    clearTimeout(timer)
                }
                sliderContainer[0].style.left = left  + "px";
                autoSlider();
            },3000)
        } else if ( document.body.offsetWidth >= 768 && document.body.offsetWidth <= 1199 ) {
            slider[0].style.height = (sliderHeight / 2) + "px"
            timer = setTimeout(function(){
                left = left - sliderWidth;
                width = (sliderWidth / 2) * sliderContainer[0].childElementCount;
                if (left < -(sliderWidth * (sliderContainer[0].childElementCount - 2))) {
                    left = 0;
                    clearTimeout(timer)
                }
                sliderContainer[0].style.left = (left / 2)  + "px";
                autoSlider();
            },3500)
        } else if ( document.body.offsetWidth >= 1200 ) {
            slider[0].style.height = (sliderHeight / 3) + "px"
            timer = setTimeout(function(){
                left = left - sliderWidth;
                width = (sliderWidth / 3) * sliderContainer[0].childElementCount;
                if (left < -(sliderWidth * (sliderContainer[0].childElementCount - 3))) {
                    left = 0;
                    clearTimeout(timer)
                }
                sliderContainer[0].style.left = (left / 3)  + "px";
                autoSlider();
            },3500)
        }
    } else {
        return;
    }
}


autoSlider();