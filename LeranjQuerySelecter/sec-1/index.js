$(document).ready(function () {
    let $selected = [];
    //ここにセレクタを書く
    // ID名で指定
    // $selected = $("#one");
    //クラス名で指定
    // $selected = $(".two");
    //タグ、要素で指定
    // $selected = $("div");
    // 最初の要素で指定
    // $selected = $("div:first");
    // n番目の要素を指定
    $selected = $("div:eq(2)");
    //マッチした要素にスタイルを付与する
    $selected.each(function (index) {
        $(this).addClass("bingo");
    });
    $(".count").text($selected.length);
});
