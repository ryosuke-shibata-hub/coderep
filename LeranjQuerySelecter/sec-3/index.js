$(document).ready(function () {
    let $selected = [];

    //全てのinput要素を取得
    // $selected = $(":input");
    // 入力フィールドがtextのものを取得
    // $selected = $(":text")
    //チェックボックスのみを取得
    // $selected = $(":checkbox");
    //ラジオのみ取得
    // $selected = $(":radion");
    // ボタンのみを取得
    // $selected = $(":button");
    //チェックされている要素を取得
    $selected = $(":checked");
    $selected.each(function (index) {
        $(this).addClass("bingo");
    });
    $(".count").text($selected.length);
});
