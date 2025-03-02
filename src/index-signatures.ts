export {};

interface Profile {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile : Profile = { name: 'aaa', underTwenty: false };

// How to write index signatures
// { [ index: typeForIndex ]: typeForValue }
profile.name = 'aaa';
profile.age = 32;
profile.nationality = 'Japan';