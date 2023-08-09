$(document).ready(function () {
    let $selected = [];


    // クラス名が.childの1つ上の親の1つ次にある要素を取得する
    // $selected = $(".child").parent().next();
    // クラス名が.childの1つ上の親と同じ階層にあるクラス名が(.three)の要素を取得する
    // $selected = $(".child").parent().siblings(".three");
    // クラス名が.childの1つ上の親と同じ階層にあるクラス名が(.three)の子要素でクラス名が(.friend)の要素を取得する
    $selected = $(".child").parent().siblings(".three").find(".friend");
    $selected.each(function (index) {
        $(this).addClass("bingo");
    });
    $(".count").text($selected.length);
});
