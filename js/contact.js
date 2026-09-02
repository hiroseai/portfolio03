/*
contact > form
------------------------------------------ */
$(function () {
    const $Consent = $('.js-contact-form__check-input');
    const $btnConsent = $('.js-contact-form__submit-button');
    $Consent.change(function () {
        if ($(this).is(':checked')) {
            $btnConsent.prop('disabled', false);
        } else {
            $btnConsent.prop('disabled', true);
        }
    });
});
