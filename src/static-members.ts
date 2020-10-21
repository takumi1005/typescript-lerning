export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'aaa';
  static lastName: string = 'bbb';

  static work() {
    //     "Hey, guys! This is aaa! Are you interested in TypeScript? Let's dive into TypeScript!";
    return `Hey, guys! This is ${this.firstName}! Are you interested in TypeScript? Let's dive into TypeScript!`;
  }
}

// let me = new Me();
// console.log(me.isProgrammer);

// 静的メンバへのアクセス
console.log(Me.isProgrammer);
console.log(Me.work());