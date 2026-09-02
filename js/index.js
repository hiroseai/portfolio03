/*
top > topics
------------------------------------------ */
$(function () {
    $('.c-post-card__title').each(function () {
        const lineHeight = parseFloat($(this).css('line-height'));
        const elementHeight = $(this).height();
        if (elementHeight > lineHeight * 1.1) {
            $(this).addClass('c-post-card__title--multi-line');
        }
    });
});