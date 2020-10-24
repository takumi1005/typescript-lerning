export {};

type Profile = {
  name: string;
  age?: number;
  zipCode: number;
};

// オプショナルな型に変更
type PartialType = Partial<Profile>;

// 必須な型に変更
type RequiredType = Required<Profile>;