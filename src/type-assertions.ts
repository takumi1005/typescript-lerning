export {};

let name: any = 'Abc';

// 非推奨
let length = (<string>name).length;

// 推奨
let length2 = (name as string).length;

// length = 'foo';