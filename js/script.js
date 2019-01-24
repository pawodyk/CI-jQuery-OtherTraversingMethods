$(document).ready(function(){
    
    //When a colored panel is clicked, all panels vanish

    // $(".theButton").click(function() {
    //     $(".theButton").fadeOut("slow");
    // });

    //When a colored panel is clicked, just that panel disappears

    // $(".theButton").click(function() {
    //     $(this).fadeOut("slow");
    // });

    //When a panel is clicked, all siblings fade to 10 % opacity

    $(".theButton").click(function () {
        $(this).parent().siblings().children(".theButton").fadeTo("slow", .1);
        $(this).fadeTo("slow", 1);
    });

    //When reset is clicked, all panels revert to full opacity
    
    $(".superButton").click(function() {
        console.log("reset clicked");
        $(".theButton").fadeIn("slow");
        $(".theButton").fadeTo(1, 1);
    });

    //When the mouse hovers over a panel, that panel turns black
    //When the mouse moves away, the panel reverts back to its previous colour

    // $(".theButton")
    //     .mouseenter(function() {
    //         $(this).addClass("highlight");
    //     })
    //     .mouseleave(function() {
    //         $(this).removeClass("highlight");           
    //     });

    $(".theButton").hover(
        function() {
            $(this).addClass("highlight");
        },
        function() {
            $(this).removeClass("highlight");
        }
    );

});