export {};

let name = 'aaa';

name = 'bbb';

let nickname = 'aaa' as const;
nickname = 'aaa';

let profile = {
  name: 'aaa',
  height: 170
} as const;

// profile.name = 'bbb';
// profile.height = 180;