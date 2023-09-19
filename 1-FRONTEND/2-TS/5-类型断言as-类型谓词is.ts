// 1
// is - 类型谓词 - 类型保护
// - 类型谓词 is
// - parameterName is Type
// - parameterName 必须是来自当前函数签名里的一个 ( 参数名 )，一般用于 ( 返回值 - 缩小范围 )
// - 使用场景
//  - 当一个函数返回值是boolean时
//    - function isStr(s: any): s is string { return typeof s === 'string'; }
//    - 让我们明确地告诉TypeScript，如果isStr为真，参数的类型就是字符串类型
//    - 这里是把函数的参数 s 从 any 范围缩小到 string 类型
//  - 通常用在给联合类型确定一个具体的类型

// 2
// as - 类型断言
// 类型断言有两种方式
// - let strLength: number = (someValue as string).length;
// - let strLength: number = (<string>someValue).length;
// - 唯一区别是，在JSX中，尖扩号与JSX语法冲突，只能使用as关键字

interface Bird {
  fly();
  layEggs();
}

interface Fish {
  swim();
  layEggs();
}

// is
function isFish(pet: Fish | Bird): pet is Fish {
  return (<Fish>pet).swim !== undefined;
  // return (pet as Fish).swim !== undefined 这两种写法都可以
}

// is
function isStringFn(arg: number | string): arg is string {
  return typeof arg === "string";
}

// as
function fn(arg: number | string): string {
  return arg as string;
}
fn(1).length;
