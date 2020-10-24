export {};

// ジェネリクス適用前
// const echo = (arg: number): number => {
//   return arg;
// }

// const echo = (arg: string): string => {
//   return arg;
// }

// ジェネリクス適用後
const echo = <T>(arg: T): T => {
  return arg;
};

console.log(echo<number>(100));
console.log(echo<string>('Hello'));
console.log(echo<boolean>(true));

class Mirror<T> {
  constructor(public value: T) {}

  echo(): T {
    return this.value;
  }
}

console.log(new Mirror<number>(123).echo());
console.log(new Mirror<string>('Hello').echo());
console.log(new Mirror<boolean>(true).echo());