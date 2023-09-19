// keyof
// - 索引类型查询操作符
// - keyof T ------------- 索引类型查询操作符 -> 返回 T 上已知公共属性名的 联合类型，只能返回 ( 返回 T 上已知公共属性名的 联合类型 )，即 private 和 protected 都遍历不到

// 1
interface IStaff {
  name: string;
  age: number;
}
type TS = keyof IStaff;

// 2
class CStaff {
  public name: string = ""; // ----- public 任意地方都可以访问 ( 定义name的类，子类，实例 )
  private age: number = 0; // ------ private 只能在 ( 定义name的类内部访问 )，不能在 ( 子类，实例 ) 访问
  protected sex: string = ""; // --- protected 能在 ( 类，子类 ) 中访问，不能在 ( 实例 ) 上访问
}
type TS2 = keyof CStaff; // 相当于 type TS2 = "name"，只能返回 ( 返回 T 上已知公共属性名的 联合类型 )，即 private 和 protected 都遍历不到
