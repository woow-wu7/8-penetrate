// 泛型 - 工具类型
// - 详见: 本项目/2-FRONTEND/2-TS/_README.md/ # (二) 范型工具类型

type Color1 = "red" | "yellow";
interface Color2 {
  red: string;
  yellow: string;
}
enum color3 { // 枚举可以作为 ( 类型 )，也可以作为 ( 值 )
  one = 1,
  two,
  three
}
type color4 = [number, string, symbol]

// 1
// Record
// - 用于将 ( 一种类型属性 - 最终是联合类型 ) 映射到 ( 另一种类型 )
// - Record 的实现详见: 本项目/2-FRONTEND/2-TS/_README.md
// -- keyof 是 索引类型查询 操作符， 返回 T 上已知的公共属性名的 联合类型
// -- T[K] 是 索引访问 操作符，Color2["red"] = string
type TRecord1 = Record<Color1, boolean>; // 鼠标 hover 查看具体的类型
type TRecord2 = Record<keyof Color2, boolean>;
type TRecord3 = Record<keyof Color2, Color2["red"]>;
type TRecord4 = Record<Color1, Color2>;
type TRecord5 = Record<string, any>; // key是string类型，value是any类型
type TRecord6 = Record<keyof any, any>; // key是string | number | symbol，value是any类型
// --- 分割线 ---
type TRecord7 = Record<keyof typeof color3, string> // 相当于 type TRecord7 = { one: string; two: string; three: string; }
type TRecord8 = Record<`${color3}`, string> // 相当于 type TRecord8 = { 1: string; 2: string; 3: string; }
// --- 分割线 ---
type TRecord9 = Record<color4[number], string> // 相当于 type TRecord9 = { [x: string]: string; [x: number]: string; [x: symbol]: string; }
// --- 分割线 ---
const record1: TRecord1 = {
  red: true,
  yellow: true,
};
const record2: TRecord2 = {
  red: true,
  yellow: true,
};
const record3: TRecord3 = {
  red: "",
  yellow: "",
};
const record4: TRecord4 = {
  red: {
    red: "",
    yellow: "",
  },
  yellow: {
    red: "",
    yellow: "",
  },
};
const record5: TRecord5 = {
  name: "woow_wu7",
  age: 20,
};
const record6: TRecord6 = {
  // key是string | number | symbol，value是any类型
  name: "woow_wu7",
  age: 20,
  10: "number",
};

// 2
// Partial
// - 将 ( 类型 ) 定义的 ( 所有属性 ) 都修改为 ( 可选的 )
type TPartial1 = Partial<Color2>;
type TPartial2 = Partial<Record<"a" | "b", boolean>>;
const partial1: TPartial1 = {
  red: undefined, // red可以是 string 或 undefined
  // yellow: "", 可选了，即可以没有 yellow 和 red 属性
};
const partial2: TPartial2 = {
  // a: true,
  // b: false,
  // c: true, // a 和 b 属性可选，但是不能超过a和b的范围，即一个新属性 c 就会报错
};

// 3 
// Required
interface Color {
  a?: number;
  b?: string;
  c: string;
}
type TR = Required<Color>
const tr: TR = {
  a: 1,
  b: '2',
  c: '3'
}

// 4
// Pick
// - 从类型定义的属性中，选取 ( 指定一组的属性 )，返回一个 ( 新的类型定义 )
// - 从字面意思也能知道是 ( 摘取部分属性 )
// - 注意区分 Pick 和 Omit 和 Exclude 的区别
// -------------------------------------------------------------  Pick 和 Omit 刚好相反
type TPick1 = Pick<Color2, "red">;
type TPick2 = Pick<Color2, "red" | "yellow">;
type TPick3 = Pick<Record<"a" | "b", number>, "b">;
type TPick4 = Pick<Record<"a" | "b" | "c", string>, "a" | "c">;
type TPick5 = Pick<Record<keyof Color2, number>, "red">;
const pick1: TPick1 = {
  red: "", // 从 Color2 中选取 red 属性
  // yellow: ''// 报错，不能将类型“{ red: string; yellow: string; }”分配给类型“Pick<Color2, "red">”。对象字面量只能指定已知属性，并且“yellow”不在类型“Pick<Color2, "red">”中
};
const pick2: TPick2 = {
  red: "", // 从 Color2 中选取 red 和 yellow 属性
  yellow: "",
};
const pick3: TPick3 = {
  b: 1,
};
const pick4: TPick4 = {
  a: "",
  c: "",
};
const pick5: TPick5 = {
  red: 1,
};

// 5
// Omit
// - 忽略某个属性
// - 注意区分 Pick 和 Omit 和 Exclude 的区别
// ------------------------------------------------------------- Pick 和 Omit 刚好相反
type TOmit1 = Omit<Color2, "red">;
type TOmit2 = Omit<Record<"a" | "b" | "c", boolean>, "a" | "b">;
const omit1: TOmit1 = {
  // 忽略 red 属性，则只剩下 yellow 属性
  yellow: "",
};
const omit2: TOmit2 = {
  c: true,
};

// 6
// Exclude
// - Exclude 就是将前面类型的与后面类型对比，( 过滤出前面独有的属性 )
// - 注意区分 Pick 和 Omit 和 Exclude 的区别
const exclude1: Exclude<"a" | "1" | "2", "a" | "y" | "z"> = "1"; // str 的类型是 "1" | "2"，即从前面中去除后面中有的属性

// 7
// ReadOnly
// - 将类型 T 中包含的属性设置为readonly，并返回一个新类型
const readonly1: Readonly<Color2> = {
  red: "",
  yellow: "",
};
readonly1.red = "11"; // 不能修改，只读，这里报错
// 扩展
// 除了使用 Readonly<Color2>能做到只读外，也可以直接设置 interface Color2 { readonly red: string; }

// 8
// ReadonlyArray
// 8.1
type TReadonlyArray = ReadonlyArray<any>;
const readonlyArr: TReadonlyArray = ["1", 1];
readonlyArr[0] = "11"; // 报错，类型“TReadonlyArray”中的索引签名仅允许读取。
// 8.2
// 在React的useEffect函数签名中
// function useEffect(effect: EffectCallback, deps?: DependencyList): void
//   - type EffectCallback = () => (void | (() => void | undefined))
//   - type DependencyList = ReadonlyArray<any>
// 7.3
function foo1(arr: ReadonlyArray<string>) {
  arr.slice(); // okay
  arr.push("hello!"); // error!，只读
}
// 在最新的 typescript3.4 版本中可以使用下面的写法
function foo2(arr: readonly string[]) {
  arr.slice(); // okay
  arr.push("hello!"); // error! 只读
}
function foo3(arr: readonly string) {
  // 报错，仅允许对数组和元组字面量类型使用 "readonly" 类型修饰符。ts(1354)
}

// 9
// Parameters
function fn8(arg: { a: number; b: string }): void {}
type TP1 = Parameters<typeof fn8>;
// 相当于
// type TP1 = [
//   arg: {
//     a: number;
//     b: string;
//   }
// ];

// 9
// ReturnType
function fn9(s: string) {
  return { a: 1, b: s };
}
type T14 = ReturnType<typeof fn9>; // { a: number, b: string }
type T10 = ReturnType<() => string>; // string -- 这里传入的是 函数签名，即传入是 函数的类型
type T2 = ReturnType<(s: string) => number[]>; // number[]
type T11 = ReturnType<(s: string) => void>; // void
type T12 = ReturnType<<T>() => T>; // {}
type T13 = ReturnType<<T extends U, U extends number[]>() => T>; // number[]
type T15 = ReturnType<any>; // any
type T16 = ReturnType<never>; // any
type T17 = ReturnType<string>; // Error
type T18 = ReturnType<Function>; // Error

// 10
// Uppercase
// Lowercase
type Name = "woow_wu7";
type UpperName = Uppercase<Name>; // 相当于 type UpperName = "WOOW_WU7"

// 11
// InstanceType
class Fn1 {}
type TInstance = InstanceType<typeof Fn1>; // 相当于 type TInstance = Fn
type TInstance2 = InstanceType<any>; // any
type TInstance3 = InstanceType<never>; // any
type TInstance4 = InstanceType<string>; // Error
type TInstance5 = InstanceType<Function>; // Error

// 12
// Awaited
type AAA1 = Awaited<Promise<string>>; // string
type AAA2 = Awaited<Promise<Promise<number>>>; // number - 不管嵌套有多深，都可以得到参数类型
type AAA3 = Awaited<boolean | Promise<number>>; //  number | boolean

// 13
// NonNullable
// 去除 null 和 undefined 类型
type T0 = NonNullable<string | number | undefined>; // type T0 = string | number
type T1 = NonNullable<string[] | null | undefined>; // type T1 = string[]
     