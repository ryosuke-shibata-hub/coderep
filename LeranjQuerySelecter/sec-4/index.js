$(document).ready(function () {
    let $selected = [];

    // .parentの配下の全ての.child要素を取得する
    // $selected = $(".parent .child");
    // .parentの子要素である.child要素のみを取得する(childの子要素のchildは取得しない)
    // $selected = $(".parent > .child");
    // .parentのすぐ隣にある.child要素を取得する
    // $selected = $(".parent + .child");
    // .parentの後に登場する.child要素を取得する
    // $selected = $(".parent ~ .child");
    // .child要素の中で、最初の要素除外する
    // $selected = $(".child:not(:first)");
    // .parentの中で.childを持つ要素のみを取得する
    // $selected = $(".parent:has(.child)");
    // 複数のセレクタを指定する(parent要素とchildの子要素の.child要素を取得)
    $selected = $(".parent, .child > .child");

    $selected.each(function (index) {
        $(this).addClass("bingo");
    });
    $(".count").text($selected.length);
});
