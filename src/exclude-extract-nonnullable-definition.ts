export {};

// Exclude 除外する
type MyExclude = DebugType;
type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type FunctionType = Exclude<SomeTypes, string | number>;
type MyFunctionType = MyExclude;

// Extract 抽出する
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;

// NunNullable null,undefindなどを除外
type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;