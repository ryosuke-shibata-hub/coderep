$(document).ready(function () {
    let $selected = [];

    // 自分(.me)の1つ次に出てくる要素を取得する
    // $selected = $(".me").next();
    // 自分(.me)の1つ次に出てくる東京(.tokyo)の要素を取得する
    // $selected = $(".me").next(".tokyo");
    // 自分(.me)の次に出てくる要素を全て取得する
    // $selected = $(".me").nextAll();
    // 自分(.me)の次に出てくる大阪(.osaka)の要素を全て取得する
    // $selected = $(".me").nextAll(".osaka");
    // 自分(.me)の次に出てくる(.olivia)さんまでの要素を全て取得する
    // $selected = $(".me").nextUntil(".olivia");
    // 自分(.me)の1つ前に出てくる要素を取得する
    // $selected = $(".me").prev();
    // 自分(.me)の前に出てくる要素を全て取得する
    // $selected = $(".me").prevAll();
    // 自分(.me)の前に出てくる大阪(.osaka)の要素を全て取得する
    // $selected = $(".me").prevAll(".osaka");
    // 自分(.me)の前に出てくる(.olivia)さんまでの要素を全て取得する
    // $selected = $(".me").prevUntil(".olivia");
    // 自分(.me)と同じ階層(お隣さん)にある要素を全て取得する
    // $selected = $(".me").siblings();
    // 自分(.me)と同じ階層(お隣さん)にある要素の中で.johnの要素を取得する
    $selected = $(".me").siblings(".john");
    $selected.each(function (index) {
        $(this).addClass("bingo");
    });
    $(".count").text($selected.length);
});
