// unknown 类型
// - 定义
//   - unknown 类型，是 any 类型对应的安全类型
//   - 所有类型都可以被归为 any，所有类型也都可以被归为 unknown
//   - 这使得 unknown 成为 TypeScript 类型系统的另一种顶级类型（另一种是 any）
// - 特点
//   - unknown 类型只能被赋值给 any 类型和 unknown 类型本身
//   - 任意类型的值都可以赋值给 unknown 类型的值，这点 any 和 unknown 一样
// - 问题
//   - 问题: unknown 和 any 的区别？
//   - 回答:
//     - unknown: unknown 必须要在判断完它是什么类型之后，才能继续用
//     - any: any 会绕过类型检查，对 any 类型的值执行操作之前，我们不必进行任何检查

// 推荐使用 unknown 而不是 any

// 英语
// 和 sum
// 差 difference
// 积 product
// 商 quotient

// 1
// unknown
const unk: unknown = 1;
const product = unk * unk; // --------------------------- 报错，unknown在使用时必须指定 具体的类型
const product2 = (unk as number) * (unk as number); // -- 正确

// 2
// any
const unk2: any = 2;
const product3 = unk2 * unk2; // ------------------------ 正确，any不会进行类型检查
