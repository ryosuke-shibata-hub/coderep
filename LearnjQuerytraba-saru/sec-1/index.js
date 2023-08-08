$(document).ready(function () {
    let $selected = [];

    // クラス名が.parentの子要素のみを取得する
    // $selected = $(".parent").children();
    // クラス名が.parentの子要素の中でクラス名が.childのものを取得する
    $selected = $(".parent").find(".child");

    $selected.each(function (index) {
        $(this).addClass("bingo");
    });
    $(".count").text($selected.length);
});
