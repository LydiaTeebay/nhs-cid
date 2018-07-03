/* POP BOX */
;(function() {

    var $pop = $("#pop")

    $(document).on("click", "[data-pop]", function(){

        var popSrc= $(this).data("pop"),
            docW= Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
            docH= Math.max(document.documentElement.clientHeight, window.innerHeight || 0)

        $pop.addClass("visible loading").css({backgroundImage:"none"})

        $("<img/>").on("load", function() {
            var bigger = (this.width > docW || this.height > docH)
            $pop.removeClass("loading").css({
                backgroundSize: bigger ? "contain" : "auto",
                backgroundImage: "url(" + this.src + ")"
            })
        }).attr("src", popSrc)
    })

    $("#popClose").on("click", function() {
        $pop.removeClass("visible loading")
    })
}())
