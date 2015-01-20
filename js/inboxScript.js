/**
 * Created by Rema on 1/20/2015.
 */
$(function() {

    var newHash      = "",
        $mainContent = $("#diff-content");
        //$pageWrap    = $("#page-wrap"),
        //baseHeight   = 0;

    //$pageWrap.height($pageWrap.height());
    //baseHeight = $pageWrap.height() - $mainContent.height();

    $(".nav").delegate("a", "click", function() {
        window.location.hash = $(this).attr("href");
        return false;
    });

    $(window).bind('hashchange', function(){

        newHash = window.location.hash.substring(1);

        if (newHash) {
            $mainContent
                .find(".mails-box")
                .fadeOut(100, function() {
                    $mainContent.hide().load(newHash + ".mails-box", function() {
                        $mainContent.fadeIn(100, function() {
                            //$pageWrap.animate({
                                //height: baseHeight + $mainContent.height() + "px"
                            //});
                        });
                        $("nav a").removeClass("current");
                        $(".nav a[href="+newHash+"]").addClass("current");
                    });
                });
        };

    });

    $(window).trigger('hashchange');

});