var array = document.body.querySelectorAll('.animate');
for (arr of array) {
    arr.classList.remove('animate');
    arr.classList.add('animated', 'fadeOutLeft')
}
var i = 0;
$(window).scroll(function() {
    if (i != array.length) {
    if ($(this).scrollTop() >= array[i].getBoundingClientRect().top) {
        array[i].classList.remove('fadeOutLeft');
        i++;
    }
    }
});