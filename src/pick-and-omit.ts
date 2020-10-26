export {};

// Pick 既存の型から必要なものを抜き出す
type DetailedProfile = {
  name: string;
  height: number;
  weight: number;
};

type SimpleProfile = Pick<DetailedProfile, 'name' | 'weight' >;

// Omit 特定の型を除外
type SmallProfile = Omit<DetailedProfile, 'height'>;

type MyOmit = Pick<DetailedProfile,'name' | 'weight' >;
type MySmallProfile = MyOmit;
