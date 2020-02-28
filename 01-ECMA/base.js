// Tip01
var s1 = "yi",
  s2 = "xue";
console.log(s1 + s2);
//  + 两侧都是字符串类型那么就连接两个字符串
var num = 34;
console.log(s1 + num);
//  + 如果其中一个是字符串 会把非字符串类型先转换成字符串类型，然后再连接

// Tip02 常用函数

var height = "178.4cm";
var n1 = parseInt(height); //转换为数值
var n2 = parseFloat(height); //转换为小数

console.log(n1, n2);

// Tip03 字符串常用函数

var str1 = "中文English,中英混合";

console.log(str1.length); // 10
console.log(str1.charAt(0)); //中
console.log(str1.charAt(str1.length - 1)); //h

// 常用来检测某个字符在不在字符串中
console.log(str1.indexOf("文")); // 1
console.log(str1.lastIndexOf("中"));
console.log(str1.substring(0, 2));
console.log(str1.replace("中文", '英文'));
console.log(str1.split(','));

// Tip05 数组
var colors = [];

typeof (colors)
colors = ['red', 'green', 'blur'];
console.log(colors[0]);
console.log(colors.length);
colors[3] = 'yellow'
colors.push("White")
console.log(colors);

colors.unshift("blank");
console.log(colors);

colors.pop();
console.log(colors);

colors.shift();
console.log(colors);

delete colors[3]
console.log(colors);

// 删除数组
colors.splice(3)
console.log(colors);

var color_2 = ['r','g','b']

var newColor = colors.concat(color_2)
console.log(newColor);
