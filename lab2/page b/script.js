$(document).ready(function() {
    // Click trên carousel-indicators
    $('#myCarousel').on('click', '.carousel-indicators li', function () {
        var index = $(this).index();
        $('#myCarousel').carousel(index);
    });

    // Auto switch slides
    function autoSwitch() {
        var $activeSlide = $('.carousel-inner .item.active');
        var index = $activeSlide.index();
        var nextIndex = (index + 1) % $('.carousel-inner .item').length;

        // Nếu là slide cuối cùng, chuyển về slide đầu tiên
        if (nextIndex === 0) {
            $('.carousel-indicators li').removeClass('active');
            $('.carousel-indicators li').eq(0).addClass('active');
        } else {
            $('.carousel-indicators li').removeClass('active');
            $('.carousel-indicators li').eq(nextIndex).addClass('active');
        }

        $('#myCarousel').carousel(nextIndex); // Chuyển đến slide tiếp theo
    }

    // var intervalId = setInterval(autoSwitch, 3000);

    $('#myCarousel').on('slid.bs.carousel', function () {
        clearInterval(intervalId); // Dừng interval hiện tại
        intervalId = setInterval(autoSwitch, 3000); // Khởi tạo interval mới
        var index = $('.carousel-inner .item.active').index();
        $('.carousel-indicators li').removeClass('active');
        $('.carousel-indicators li').eq(index).addClass('active');
    });
});
