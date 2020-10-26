export {};

const debugProfile = (name: string, age: number) => {
  console.log({ name, age })
};

debugProfile('aaa', 32);

type Profile = Parameters<typeof debugProfile>;

const profile: Profile = ['ggg', 76];

debugProfile(...profile);

// 型の定義
type MyParameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;