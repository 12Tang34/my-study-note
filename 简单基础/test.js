//布尔值转换：undefined、null、NaN、""、0、false==>false
//parseInt转换为整形数字parseInt（demo，16）；以16进制为基底转换为10进制；parseFloat
//a.toString();String();
//isNaN会把东西先放在Number()里，再比对
//isNaN(“abc”)=>Number("abc")=>true
//可正常计算的范围   小数点前16位，后16位
var str = "abcd";
str.length = 2;
console.log(str)

//call、apply可以改变this指向
//call需要把实参按照形参的个数传进去，apply需要传一个arguments[]

//继承的圣杯模式
function inherit(Target,Origin){
    function F(){};
    F.prototype = Origin.prototype;
    Target.prototype = new F();
    Target.prototype.constructor = Target;
    Target.prototype.uber = Origin.prototype;
}

Father.prototype.lastName = "Deng";
function Father(){
}
function Son(){
}
inherit(Son,Father)
var son = new Son();
var Father = new Father();