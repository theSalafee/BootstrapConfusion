$(document).ready(function () {
    $("#mycarousel").carousel({
        interval: 2000
    });
    $("#carouselButton").click(function () {
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        } else if ($("#carouselButton").children("span").hasClass('fa-play')) {
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');
        }
    });

    $("#reversetable").click(function () {
        $('#reservetablemodal').modal('show')
    });

    $("#loginbtn").click(function () { 
        // go to the element of id loginbtn
        // when clicked run this function
        $('#loginModal').modal('show')
        // got to the element of id loginmodal
        // show the modal
    });

});