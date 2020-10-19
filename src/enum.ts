export {};

enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  Jun,
  July,
  August,
  September,
  October,
  November,
  December
}

console.log(Months.January);
console.log(Months.February);
console.log(Months.December);

// JSで書くと・・・
// const MonthsJs = {
//   January: 0,
//   February: 1
// }

// console.log(MonthsJs.January);
// console.log(MonthsJs.February);

enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GREEN = '#008000',
  BLUE = '#0000FF',
  // YELLOW = '#FFFF00',
  BLACK = '#000000'
}

let green = COLORS.GREEN;
console.log({ green });

// 定義していない場合に追加
enum COLORS {
  YELLOW = '#FFFF00',
  GRAY = '#808080'
}
COLORS.YELLOW;