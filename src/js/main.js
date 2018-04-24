//перезагружаем страницу при изменении размера окна
// window.addEventListener('resize', function() {
//     "use strict";
//     window.location.reload();
// })

autoSlider();
let left = 0;
const slider = document.getElementsByClassName('slider');
const sliderWidth = slider['0'].offsetWidth;

function autoSlider () {
    timer = this.timer;
    timer = setTimeout(function() {
        sliderContainer = document.getElementsByClassName('sliderContainer');
        left = left - sliderWidth;
        if (left < -(sliderWidth * 4)) {
            left = 0;
            clearTimeout(timer)
        }
        sliderContainer["0"].style.left = left + 'px';
        sliderContainer["1"].style.left = left + 'px';
        sliderContainer["2"].style.left = left + 'px';
        autoSlider ();
    }, 3500);
}

// document.getElementById('myform').addEventListener('submit', function (e) {
//     e.preventDefault()
  
//     const inputContent = document.querySelectorAll("input, select, textarea")
    
//     for (i=0; i<inputContent.length; ++i) {
//       if (inputContent[i].name && inputContent[i].form === this) {
//         console.log(inputContent[i].name, inputContent[i].value)
//       }
//     }
//   })


$(document).ready(function(){
    $("#menu,#button").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1100);
    });
});

$('.datepicker-here').datepicker({
    minDate: new Date()
})