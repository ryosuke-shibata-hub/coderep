'use strict';

$(function () {
    const $username = $('#username');
    const $password = $('#password');
    const $agreement = $('#agreement');
    const $submit = $('#submit');

    //フォームチェック
    function isFormValid() {
        const isVaild = $username.val().trim()
            && $password.val().trim()
            && $agreement.prop('checked');

        $submit.attr("disabled", !isVaild);
    }

    //ページロード時にチェックを行う
    isFormValid();

    //フォームコントロールのイベントハンドラ
    $('input').on('keyup change', function () {
        isFormValid();
    });

    //フォームが送信された時にアラート表示する
    $('form').on('submit', (e) => {
        e.preventDefault();
        //登録処理を書く場合はここに書く
        alert('登録しました');
    })

})
