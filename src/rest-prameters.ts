export {};

// JSのRESTパラメーター
// const sum = (...values) => {
//   console.log(values);
// };

// sum(1, 2, 3, 4, 5);

// TSのRESTパラメーター
const reducer = (accumulator: number, currentValue: number) => {
  console.log({ accumulator, currentValue });
  return accumulator + currentValue
}

const sum: (...values: number[]) => number = (...values: number[]): number => {
  return values.reduce(reducer);
};

console.log(sum(1, 2, 3, 4, 5));
