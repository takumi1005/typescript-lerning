export {};

class Person {
  // アクセス修飾子を書くことで初期化処理をしてくれる
  constructor(public name: string, protected age: number) {
  }
}

const me = new Person('taku', 32);
console.log(me);