//Q1 変数

let nickname = 'ごっしー';
let age = '28';
let nickname_age = '私のニックネームは' + nickname + 'です。年齢は' + age + 'です。';

console.log(nickname_age);

//Q2 配列

let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];

let tamplateText = `私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`;
console.log(tamplateText);

//Q3 オブジェクト

let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

console.log(user.age);

//Q4 配列　オブジェクト

let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

console.log(playerList[1].favorites[1]);

//Q5 四則演算

let sum = playerList[0].age + playerList[1].age + playerList[2].age;

console.log(sum / playerList.length);

//Q6 関数

function sayHello() {
  console.log('Hello');
}

sayHello();

let sayWorld = function() {
  console.log('World');
}

sayWorld();

//Q7　メソッド

user['birthday'] = '2000-09-27';
user['sayHello'] = function() {
  console.log('Hello！');
}

user.sayHello();

//Q8 引数
let calc = {
  add: function(x, y) {
    console.log(x + y);
  },
  subtrack: function(x, y) {
    console.log(x - y);
  },
  multiply: function(x, y) {
    console.log(x * y);
  },
  divide: function(x, y) {
    console.log(x / y);
  }
};

calc.add(5, 2);
calc.subtrack(12, 2);
calc.multiply(7, 7);
calc.divide(25, 5);

//Q9 返り値

function remainder(x, y){
  let surplus = x % y;
  return surplus;
}

console.log('5を3で割った余りは' + remainder(5, 3) + 'です。');

//Q10 スコープ

//関数外で変数xを参照しようとしているが、変数xはfoo()関数内で宣言された
//ローカル関数であるため、そのスコープ外では、認識されない。
//そのため、x is not definedというエラーが発生している。

//応用問題

//Q1 標準組み込みオブジェクト

let random = Math.floor(Math.random() * 10);
console.log(random);

//Q2 コールバック関数

setTimeout(function() {
  console.log('Hello World!');
}, 3000);

//Q3 if
let num = 0;

if (num > 0) {
  console.log('num is greater than 0');
} else if (num < 0) {
  console.log('num is less than 0');
} else if (num === 0) {
  console.log('num is 0');
}

//Q4 for 

let numbers = [];

for (let i = 0; i < 100; i++) {
  numbers.push(i);
}

console.log(numbers);

//Q5 for × if

let mixed = [4, '2', 5, '8', '9', 0, 1];

for (let i = 0; i < mixed.length; i++) {
  let element = mixed[i];

  if (typeof element === 'number') {
    element % 2 === 0 ? console.log('even') : console.log('odd');
  } else {
    console.log('not number');
  }
}


