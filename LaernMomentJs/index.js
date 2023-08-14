$(document).ready(function () {
    // se1-1
    // display("現在時刻", moment().format("LLLL"));

    // sec2-1
    // var now = moment();
    // display("現在時刻", now);

    // sec2-2
    // var sample = [
    //     "2017-03-22 19:21:34",
    //     "March 22 2017 19:21:34",
    //     "2017年3月22日 19時21分34秒"
    // ];

    // sample.forEach((str, index) => {
        // sec2-2
        // display("文字列" + (index + 1), moment(str));
        // sec2-3
        // display("文字列" + (index + 1), moment(str, "YYYY年MM月DD日 HH時mm分ss秒"));
        // sec2-4
    //     display("文字列" + (index + 1), moment(str, [
    //         "YYYY年MM月DD日 HH時mm分ss秒",
    //         "MMM DD YYYY HH:mm:ss",
    //         "YYYY-MM-DD HH:mm:ss"
    //     ], "en"));
    // });

    // sec2-5
    display("日時", moment({
        year: 2017,
        month: 3,
        day: 21,
    }));
});
