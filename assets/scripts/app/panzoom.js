$("#zoom").change(function(){
    $(".panzoom .img").css("background-size", this.value + "px")
})

$('.panzoom .img').mousemove(function(e){
    var mousePosX = (e.pageX/$(window).width())*100
    $(e.target).css('background-position-x', mousePosX +'%')
    var mousePosY = (e.pageY/$(window).height())*100
    $(e.target).css('background-position-y', mousePosY +'%')
})