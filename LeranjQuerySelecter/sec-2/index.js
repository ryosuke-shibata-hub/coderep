$(document).ready(function () {
    let $selected = [];

    //data-nameの属性を持つもの全てを指定
    // $selected = $("[data-name]");
    //data-nameの一致するものを取得
    // $selected = $("[data-name=brian']");
    //data-nameのそれ以外のものを取得
    // $selected = $("[data-name!='john']");
    // data-nameの値がjoで始まるやつを取得
    // $selected = $("[data-name^='jo']");
    // data-nameの値にnが含まれるやつを取得
    // $selected = $("[data-name*='n']");
    // data - nameがbrianでdata - ageが26のものを取得
    $selected = $("[data-name='brian'][data-age='26']");
    $selected.each(function (index) {
        $(this).addClass("bingo");
    });
    $(".count").text($selected.length);
});
