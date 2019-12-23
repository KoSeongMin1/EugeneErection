$(".mainmenu>li").mouseover(function(){
    $(".submenu, .subback").stop().slideDown();
});
$(".mainmenu>li").mouseleave(function(){
    $(".submenu, .subback").stop().slideUp();
});

var slideSpeed=2800;

$(".slide").children("a:gt(0)").hide();

var end=setInterval(function(){
    $(".slide").find("a:first").stop().fadeOut(slideSpeed)
    .next()
    .fadeIn(slideSpeed)
    .end()
    .appendTo(".slide")
},slideSpeed);

$(".onClick").click(function(){
    $("#modal").show();
});
$("#modalcontent>button").click(function(){
    $("#modal").hide();
});
