"use strict"

//page-1
// let=再代入できる
let message = "hello ES6";
// const=再代入できない
// const message = "hello ES6";
console.log(message);

message = "good bey";
console.log(message);

//page-2
const name = "CODEPREP";
if (true) {
    const name = "OLD CODEREP";
    console.log("----if block----");
    console.log(name);
    console.log("----------");
}

console.log(name);

var oldName = "oldName";

function hello() {
    var oldName = "oldName";
    if (true) {
        var oldName = "oldName3";
    }
    console.log(oldName);
}

hello();
console.log(oldName);

//page-3
//constで再代入不可の状態で再代入するとエラーが出るよ　
// const project = {
//     name: "CODEPREP V1.0",
// }
// console.log(project.name);

// project = {
//     name: "CODEPREP V3.0",
// }
// console.log(project.name);


//アロー関数の基本
const array = [1, 2, 3, 4, 5];
array.forEach(number => console.log(number));
//引数が二つある時
array.forEach((number, index) => console.log("index : number", index, number));
//戻り値の返し方
const doubleArray1 = array.map(number => number + number);
console.log(doubleArray1);

const doubleArray2 = array.map(number=> {
    return number + number;
});

console.log(doubleArray2);

//アロー関数とthis

function task(callback) {
    callback();
}

var ES5Chicken = {
    egg: "🥚",
    wakeup: function () {
        //関数呼び出しのthisはundefinedになるからthis.eggはundefinedになる
        //そのためbindで関数の外側のスコープをthisに設定する
        task(function () {
            console.log("ES5(こけこっこー", this.egg);
        }.bind(this));
    }
}

const ES6Chicken = {
    egg: "🥚",
    wakeup: function () {
        //アロー関数は自動的に関数の外側のスコープがthisに設定される
        task(() => {
            console.log("ES6(こけこっこー", this.egg);
        });
    }
};

ES5Chicken.wakeup();
ES6Chicken.wakeup();


//オブジェクトの分割代入
const car = {
    fuel: 60
};

const { fuel } = car;
console.log(fuel);
//別名使うとき
const car2 = {
    fuel2: 60
};

const { fuel2: myFuel } = car2;
console.log("myFuel => ", myFuel);

//ネストしたオブジェクトの分割代入
const car3 = {
    fuel3: 60,
    info: {
        model: "X-1976"
    }
};

const { fuel3, info: { model } } = car3;

console.log(fuel3);
console.log(model);

//オブジェクトの分割代入でデフォルト値を設定する
const car4 = {
    fuel4: 60,
};
const { fuel4, model4 = "名無し" } = car4;
console.log(fuel4);
console.log(model4);

//配列の分割代入
const array1 = [1, 2, 3];
const [one, two, three] = array1;

console.log(one);
console.log(two);
console.log(three);

//配列の分割代入でデフォルト値を設定する
const array2 = [1, 2, 3];
const [one1, two2, three3, four = 4] = array2;

console.log(one1);
console.log(two2);
console.log(three3);
console.log(four);


//デフォルト引数
function greeting(name = "everyone") {
    console.log("Hello" + name);
}

greeting("Tokyo");
greeting();

//Rest引数
function add(x, ...y) {
    let result = x;

    y.forEach(number => {
        result = result + number;
    });
    console.log(result);
}

add(1);
add(1, 2, 3);
add(1, 2, 3, 4, 5, 6);

// Spread演算子
const array3 = [1, 2, 3, 4];
const array4 = [10, 11, 12, 13, 14];
array3.push(...array4);
console.log(JSON.stringify(array3));

// テンプレート文字列
const message1 = `こんにちは`;
console.log(message);

const message2 = `複数行の
文字列も
こんなに簡単に定義できるなんて
テンプレート文字列って素敵！`;
console.log(message2);
// テンプレート文字列の中でプレースホルダーを使う
const name1 = "みなさん";
const message3 = `${name1} こんにちは`;
console.log(message3);
//もちろんjavascriptの式も使えるよ！
console.log(`1+1は ${1 + 1}!`);

//プロパティの諸略記法
const fuel5 = 100;
const model5 = "X-1976";

const car5 = {
    fuel5,
    model5
};
console.log(car5.fuel5);
console.log(car5.model5);

// 関数の省略記法
const fuel6 = 100;
const model6 = "X-1976";

const car6 = {
    fuel6,
    model6,
    run() {
        console.log("run");
    }
};

console.log(car6.fuel6);
console.log(car6.model6);
car6.run();

// 動的なプロパティの設定
const fuel7 = 100;
const model7 = "X-1976";
const custompropertyName = "shippedBy";

const car7 = {
    fuel7,
    model7,
    run7() {
        console.log("run");
    },
    [custompropertyName]: "1997"
};

console.log(car7.fuel7);
console.log(car7.model7);
console.log(car7.shippedBy);
car7.run7();

// クラス
