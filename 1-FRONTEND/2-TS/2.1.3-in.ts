// in
// 1.类型中使用: 遍历 联合类型, 枚举类型
// 2.对象中使用: 遍历对象的属性

// 1
// 遍历联合类型
interface IScore {
  en: string;
  ch: string;
}
type TScore = {
  [P in keyof IScore]: number;
};
type TScore2 = {
  [P in keyof IScore]: P;
};

// 2
// 遍历联合类型
type TAA = "a" | "b" | "c";
type TAA1 = {
  [P in TAA]: number;
};
type TAA2 = {
  [P in TAA]: P;
};

// 3
// 遍历枚举类型
enum EColor {
  red = 999,
  blue,
}
type EColor2 = {
  [P in EColor]: number;
};
type EColor3 = {
  [P in keyof typeof EColor]: number;
};
type EColor4 = keyof typeof EColor; // key ------- type EColor4 = "red" | "blue"
type EColor5 = `${EColor}`; // value ------------- type EColor5 = "999" | "1000" // 注意: 这里 number 会转成 string

// 4
type TKey = keyof any; // string | number | symbol
type TPeople7 = {
  [K in keyof any]: boolean;
};
