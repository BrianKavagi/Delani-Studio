$(document).ready(function () {
    $("#design img").show();
    $("#design").click(function () {
        $("#design p").toggle();
 
    });
 });
 $(document).ready(function () {
    $("#development").show();
    $("#development").click(function () {
        $("#development p").toggle();
 
    });
 });
 $(document).ready(function () {
    $("#product").show();
    $("#product").click(function () {
        $("#product p").toggle();
 
    });
 });
 /$(document).ready(function() {
    $('.textOne').hide();
    $('.imageOne').animate({
        opacity:1
 
    });
 
    $('.imageOne').hover(function() {
        $(this).stop().animate({opacity:.4},200);
        $('.textOne').fadeIn();
 
    }, function() {
        $(this).stop().animate({opacity:1},500)
        $('.textOne').fadeOut();
    });