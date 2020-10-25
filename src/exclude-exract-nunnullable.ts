export {};

// Exclude 除外する
type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type FunctionType = Exclude<SomeTypes, string | number>;
type NunFunctionType = Exclude<SomeTypes, DebugType>;
type TypeExcludingFunction = Exclude<SomeTypes, Function>;

// Extract 抽出する
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;
type NumFunctionTypeByExtract = Extract<SomeTypes, string | number>;
type FunctionTypeExractingFunction = Extract<SomeTypes, Function>;

// NunNullable null,undefindなどを除外
type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NunFunctionType>;