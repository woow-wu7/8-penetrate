// const 断言
// - 让一个 对象 中的所有属性 只读
// - 让一个 数组 只读

// 1
// 对象只读属性
const obj = {
  name: "woow_wu7",
  age: 10,
};

const obj2 = {
  name: "woow_wu7",
  age: 10,
} as const; // const 断言，属性不能被修改

obj.age = 20; // 正确，普通的对象属性可以被修改
obj2.age = 20; // 报错，无法为“age”赋值，因为它是只读属性。--- 即 as const 断言后，对象类型的数据的属性变成只读

// 2
// 数组是只读数组
const arr = [1, 3] as const;
arr[1] = 2;
// const arr: readonly [1, 3]
// 无法为“1”赋值，因为它是只读属性。ts(2540)

arr.push(1);
// 类型“readonly [1, 3]”上不存在属性“push”
