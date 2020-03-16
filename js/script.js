$(document).ready(function(){
    var bannerHeight = $("#banner").outerHeight(true);
    $("#navbar").affix({
        offset: {
            top: bannerHeight
        }
    });
    $('.icon-social').tooltip();
    $("#navbar").on("affix.bs.affix", function () {
        $("#banner").css("margin-bottom", "52px");
    });
    $("#navbar").on("affix-top.bs.affix", function () {
        $("#banner").css("margin-bottom", "");
    });
})
