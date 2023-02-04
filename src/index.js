// /*
// const、let等の変数宣言
// */
// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書き可能
// val2 = "let変数を上書き"
// console.log(val2);

// // letは再宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数"
// console.log(val3);

// // // const変数は上書き不可
// // val3 = "const変数を上書き";

// const val3 = "const変数を再宣言"

// constで定義したオブジェクトはプロパティの変更が可能、基本constで定義する
// const val4 = {
//     name: "じゃけぇ",
//     age: 28,
// };
// val4.name = "jak";
// console.log(val4);

// constで定義した配列はプロパティの変更が可能、基本constで定義する
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

// /**
//  * テンプレート文字列
//  */
// const name = "じゃけぇ";
// const age = "28";
// // 「私の名前はじゃけぇです。年齢は28歳です。」

// // 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// const message2 = '私の名前は${name}です。年齢は${age}です。';
// console.log(message2);

/**
 * アロー関数
 */
// 従来の関数 ()は引数入れる 2種類とも同じ関数
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// // アロー関数 functionはいらない =>からアロー関数と呼ばれる
// // 引数の()は省略できる
// const func2 = (str) => {
//   return str;
// };
// // returnは省略できる
// const func2 = str => str;
// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//     return num1 + num2;
// };
// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10, 20));

// const myProfile = {
//     name: "じゃけぇ",
//     age: 28,
// }

// const message1 = '名前は${myProfile.name}です。年齢は${myProfile.age}歳です。';
// console.log(message1);

// // 分割代入で指定のプロパティを抜き出せる
// const { name, age } = myProfile;
// const message２ = '名前は${name}です。年齢は${age}歳です。';
// console.log(message2);

// const myProfile = ['じゃけぇ,', 28];

// const message3 = '名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。';
// console.log(message3);

// // nameにじゃけぇ、ageに28が入ってくる
// const [name, age] = myProfile;
// const message4 = '名前は${name}です。年齢は${age}歳です。'
// console.log(message4);

/**
 * デフォルト値、引数など
 */
// 引数なしで関数を呼び出すとundefinedになる、デフォルト値を設定しておけば回避できる
// const sayHello = (name = "ゲスト")  => console.log('こんにちは！${name}さん！');
// sayHello();

/**
 * スプレッド構文 ...
 */
// 配列の展開 配列ではなく数字の羅列にすることで引数の取り出しが楽になる
// const arr1 = [1, 2];
// console.log(arr1);
// // [1, 2]
// console.log(...arr1);
// // 1 2

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// // まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// // 1
// console.log(num2);
// // 2
// console.log(arr3);
// // [3, 4, 5]

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// [10, 20]
// console.log(arr4);
// [10, 20]

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);
// [10, 20, 30, 40]

// スプレッド構文を使わないと、大元の配列の値が変わってしまう
// const arr8 = arr4;
// console.log(arr8);
// // [10, 20]
// arr8[0] = 100;
// console.log(arr4);
// [100, 20]

/**
 * mapやfilterを使った配列の処理
 */
// const nameArr = ["田中", "山田", "じゃけぇ"];
// for (let index = 0; index < nameArr.length; index++) {
//     console.log('${index + 1}番目は${nameArr[index]}です');
// }
// 田中 山田 じゃけぇ

// nameに田中、山田、じゃけぇが順番に入って新しい配列を返す
// const nameArr2 = nameArr.map((name)=>{
//    return name;
// });
// console.log(nameArr2);
// ["田中", "山田", "じゃけぇ"]

// 配列で返さないパターン 第２引数のindexには配列番号が順に入ってくる
// nameArr.map((name, index) => console.log('${index + 1}番目は${name}です'));
// 田中 山田 じゃけぇ

// filterは特定の条件の値を抽出して新しい配列を返す 今回は奇数の値を返す
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//     return num % 2 === 1;
// });
// console.log(newNumArr);
// [1, 3, 5]

// const newNameArr = nameArr.map((name) => {
//     if (name === "じゃけぇ") {
//         return name
//     } else {
//         return '${name}さん'
//     }
// })
// console.log(newNameArr);
// ["田中さん", "山田さん", "じゃけぇ"]

/**
 * 三項演算子
 */
// ある条件 ? 条件がtrueの時 : 条件がfalseの時 1は0より大きいのでtrueで返る
// const val1 = 1 > 0 ? 'trueです' : 'falseです';
// console.log(val1);
// trueです

// const num = 1300;
// console.log(num.toLocaleString());
// 1,300

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
// console.log(formattedNum);
// 1,300

// const checkSum = (num1, num2) => {
//     return num1 + num2 > 100 ? '100を超えています!!' : '許容範囲内です';
// }
// console.log(checkSum(50, 60));

/**
 * 論理演算子の本当の意味を知ろう
 */
// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//     console.log("1か2はtrueになります");
// }
// if (flag1 && flag2) {
//     console.log("1か2はtrueになります");
// }

// || は左側がfalseなら右側を返す nullはfalseで返される
// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee);
// 金額未設定です

// &&は左側がtrueなら右側を返す
// const num2 = null;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);
// null
