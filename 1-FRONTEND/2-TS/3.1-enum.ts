// 枚举
// - 数字枚举的 反向映射
// - 枚举成员 访问 另一个枚举成员
// - in 遍历 枚举类型
// - in 遍历 联合类型
// type People4 = keyof typeof Enu; // 'A' | 'B' ++++++ key
// type People5 = `${Enu}`; // "2" | "3" ++++++++++++++ value

// 1
// 数字枚举 - 反向映射
// - 数字枚举，存在反向映射
// - 注意点: 如果是 常量枚举，就不存在数字反向映射，详见 3
// - 在线运行: https://www.typescriptlang.org/zh/play
enum Enum {
  A = 1, // 不赋值，默认是 0
}
let a = Enum.A; // 1
let nameOfA = Enum[a]; // "A" - 数字枚举的 反向映射
let nameOfA2 = Enum[1]; // "A" - 数字枚举的 反向映射
console.log("nameOfA", nameOfA); // "A"
console.log("nameOfA2", nameOfA2); // "A"

// 2
// 枚举中成员 使用 另一个成员的值
enum Enum2 {
  A = 1,
  B = 2 * A, // B 使用了 A 的值
}
const b = Enum2.B;
console.log("b", b); // 2

// 3
// const 枚举
// const enum xxx {...}
// - ( 常量枚举 ) 只能使用 ( 常量枚举表达式 )
// - 并且不同于常规的枚举它们在 ( 编译阶段会被删除 ) ( 编译阶段会被删除 ) ( 编译阶段会被删除 )
// - 使用场景: 为了避免 ( 在额外生成的代码上的开销 ) 和 ( 额外的非直接的对枚举成员的访问 )，我们可以使用 ( const枚举 )
// - 详见: 1-FRONTEND/2-TS/3.4-enum和const enum.ts

// 4
// 枚举类型 可以通过 in 关键字来遍历
// in
// - 1. 在 ( 类型 ) 中使用，用来遍历 ( 联合类型 和 枚举类型 )
// - 2. 在 ( 值 ) 中使用，用来判断对象中是否存在某个 key 注意包括 ( 自身属性 ) 和 ( 继承属性 )
// - 详见: 本项目/2-FRONTEND/2-TS/2-keyof-in-extends-T[K].ts
// 1
// in 遍历 枚举类型
// 相当于 type TypePeople2 = { 2: boolean; 3: boolean; }
type TypePeople2 = {
  [K in Enu]: boolean;
};
type TypePeople3 = {
  [K in keyof typeof Enu]: boolean;
};
// 2
// in 遍历 联合类型
interface People {
  name: string;
  age: number;
}
type TypePeople4 = {
  [K in keyof People]: boolean;
};
type TypePeople5 = {
  [K in keyof People]: K;
};

// ----------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------
// 5 扩展
// in
// - 1. 在 ( 类型 ) 中使用，用来遍历 ( 联合类型 和 枚举类型 )
// - 2. 在 ( 值 ) 中使用，用来判断对象中是否存在某个 key 注意包括 ( 自身属性 ) 和 ( 继承属性 )
enum Enu {
  A = 2,
  B,
}

// 2.1
// in 遍历 枚举类型 ===================================== 枚举中的 value
type People2 = {
  // ------- in 遍历枚举
  [K in Enu]: boolean;
};
// 相当于
// type People2 = {
//   2: boolean;
//   3: boolean;
// }

// 2.2
// in 遍历 联合类型
type People3 = {
  // ------- in 遍历联合类型
  [K in keyof People]: boolean;
};

// 2.3
// 返回的是枚举中的 key =================================== 枚举中的 key
type People4 = keyof typeof Enu; // 'A' | 'B' ++++++ key
type People5 = `${Enu}`; // "2" | "3" ++++++++++++++ value

// 注意区分
type People6 = keyof Enu; //  "toFixed" | "toExponential" | "toPrecision" | "toString" | "valueOf" | "toLocaleString"
