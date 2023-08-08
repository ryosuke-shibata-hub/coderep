$(document).ready(function () {
    let $selected = [];

    // クラス名が.childの親を取得してみましょう。
    // $selected = $(".child").parent();
    // クラス名が.childの鈴木家(.suzuki)の親を取得する
    // $selected = $(".child").parent(".suzuki");
    // クラス名が.childの全ての親を取得する
    // $selected = $(".child").parents();
    // クラス名が.childの全ての佐藤家(.sato)の親を取得する
    // $selected = $(".child").parents(".sato");
    // クラス名が.childのから一番近い佐藤家(.sato)の人物を取得する
    // $selected = $(".child").closest(".sato");
    // クラス名が.childのから佐藤家(.sato)までの親をすべて取得する
    $selected = $(".child").parentsUntil(".sato");

    $selected.each(function (index) {
        $(this).addClass("bingo");
    });
    $(".count").text($selected.length);
});
