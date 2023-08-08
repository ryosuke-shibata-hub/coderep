$(document).ready(function () {
    let $selected = [];

    // labelタグの子要素のspanタグの中で、見えている要素を取得
    // $selected = $("label span:visible")
    // labelタグの子要素のspanタグの中で、隠れている要素を取得する
    $selected = $("label span:hidden");
    $selected.each(function (index) {
        $(this).addClass("bingo");
    });
    $(".count").text($selected.length);
});
