$(".slider-area").slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    customPaging: function (slider, i) {
        var thumb = $(slider.$slides[i]).data();
        return '<a class="dot">' + (i + 1) + '</a>';
    }
})