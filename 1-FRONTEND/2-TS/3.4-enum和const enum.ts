// 常量枚举
// const 枚举
// const enum xxx {...}
// - ( 常量枚举 ) 只能使用 ( 常量枚举表达式 )
// - 并且不同于常规的枚举它们在 ( 编译阶段会被删除 ) ( 编译阶段会被删除 ) ( 编译阶段会被删除 )
// - 使用场景: 为了避免 ( 在额外生成的代码上的开销 ) 和 ( 额外的非直接的对枚举成员的访问 )，我们可以使用 const枚举
// - 详见: 1-FRONTEND/2-TS/3.4-enum和const enum.ts

// 普通枚举
enum EClass {
  en = 2,
  ch,
}

// 常量枚举额
const enum EClass2 {
  en = 20,
  ch,
}

const class1 = EClass.en; // 2
const class2 = EClass[2]; // 'en'

const class3 = EClass2.en;
const class4 = EClass2["20"]; // 报错，不存在 数字枚举反向映射
