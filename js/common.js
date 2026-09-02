/*
header > hamburger-menu
------------------------------------------ */
$(function () {
    const $dialog = $('.js-header__menu');
    if (!$dialog.length) return;
    const $openBtn = $('.js-header__menu-open-button');
    const $closeBtn = $('.js-header__menu-close-button');
    const $hamburgerBtn = $('.js-header__hamburger-button');
    const $menuLink = $('.js-header__menu-link');
    const $body = $('.js-body');
    const activeClass = "js-header__hamburger-button-active";

    $openBtn.on('click', function () {
        $dialog[0].showModal();
        $body.addClass('is-overflow');
        $hamburgerBtn.addClass(activeClass);
    });

    function closeMenu() {
        if ($dialog[0].open) {
            $dialog[0].close();
        }
        $body.removeClass('is-overflow');
        $hamburgerBtn.removeClass(activeClass);
    }

    $closeBtn.on('click', function () {
        closeMenu();
        $openBtn.focus();
    });

    $dialog.on('click', function (event) {
        if (event.target === $dialog[0]) {
            closeMenu();
            $openBtn.focus();
        }
    });

    $dialog.on('cancel', function () {
        closeMenu();
        $openBtn.focus();
    });

    $menuLink.on('click', function () {
        closeMenu();
    });
});























