"use strict";

$(function () {
    const $preview = $(".preview");

    const renderer = new marked.Renderer();

    renderer.link = (href, title, text) => {
        return `<a href="${href}" target="_blank">${text}</a>`
    }

    marked.setOptions({
        renderer: renderer,
        breaks: true,
        sanitize: true,
        heighlight: (code) => {
            return hljs.highlightAuto(code).value;
        },
    });

    $(".textarea").on("input", (e) => {
        const text = e.target.value; //入力された時にその内容を取得

        const html = marked.parse(text); //HTMLに変換(markedjsを使用)

        $preview.empty().append(html); //divのpreviewクラスに追加する表示させる(empty()で以前の入力内容を削除する)
    });

    const defaultText = `# heading1
    このマークダウンエディターは\`marked\`というオープンソースのライブラリを使用しています。

    - https://github.com/markedjs/marked

    ## heading2

    markedの使い方は次のとおりで、\`marked\`に変換したい文字列を渡します。

    \`\`\`
    const text = "text";
    marked.parse(text);
    \`\`\`

    > 作成者
    > ![image](https://s3-ap-northeast-1.amazonaws.com/codeprep-migration/book/markdown-editor/codeprep.png)
    > https://codeprep.jp`;

    $("textarea").text(defaultText).trigger("input");
});
