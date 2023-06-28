// console.log(123);
//变量、字面量（直接书写的值）、表达式
//程序中任意一个地方需要数据的地方，都可以使用上面的任何一种方式
//原始类型：number、string、undefined、null、boolean
//引用类型：对象（包含普通对象、数组、函数）
//对象的属性名最好都用单引号和双引号来命名，符合标识符规范和纯数字的，可以不用单引号和双引号+
// var obj = {
//     'a':{
//         'b':1,
//         'c':2
//     }
// }

// console.log(obj['a']['b']);
//obj.name是一种语法糖

// var dengBro = {
//     name: '邓哥',
//     sex: '男',
//     height: 185,
//     wifes:[
//         {name:...}
//     ]
// }

//隐式转换：数据类型不满足期望，则会进行隐式转换，不会对原始数据产生影响
//算术运算的表达式一定返回数字，当+号两端有字符串，就变成了字符串拼接了、

// false、null、undefine、0、NaN、'',只有这六个返回false
// console.log(!'');

// &&表达式和||表达式都是返回最后一个判定的数据

// function add(a,b){
//     a = +a||0;
//     b = +b||0;

// }

// BMI>25?'偏胖':BMI<20？'偏瘦':'正常';

// for(var i=0;i<a.length;i++){
//     if(a[i]===x){
//         console.log(是);
//         break
//     }else{

//     }
// }

// for(var key in obj){
//     if(typeof obj[key] == 'string'){
//         count++;
//     }
// }

// var newStus = [];
// for(var i = 0;i < students.length; i++){
//     var s = students[i];
//     if(s.name[0] === '陈'){
//         newStus.push(s);
//     }
// }
// console.log(newStus);

// var isFind = false;
// for(var i = 0;i < students.length; i++){
//     var s = students[i];
//     if(s.sex === '女' && s.age > 28){
//         isFind = true;
//         break;
//     }
// }
// if(isFind){
//     console.log('否');
// }else{
//     console.log('是');
// }

// function factorial(n){
//     var sum = 1
//     if(n<1){
//         return 0;
//     }else{
//         for(var i = 1;i <= n;i ++ ){
//         sum*=i;
//         }
//         return sum;
//     }
// }
// console.log(factorial(5));

// for(var i=1; ;i++){
//     if(factorial(i)<=1000){
//         console.log(i);
//     }else{
//         break;
//     }
// }


//函数调用与函数调用的位置没有关系，与定义函数的位置相关
//JS所有的对象都是通过构造函数产生的


function Poker(number, color){
    this.number = number;
    this.color = color;
    this.print = function(){
        if(this.number === 14){
            console.log('小王');
        }
        else if(this.number === 15){
            console.log('大王')
        } else{
        var colors = ['♥','♠','♦','♣'];
        var numbers = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
        var color = colors[this.color - 1];
        var number = numbers[this.number - 1]
        console.log(color + number)
        }
    }
}
// var p1 = new Poker(1, 1);
// p1.print();
// var a = [];
// for(var i = 1;i <= 13;i++){
//     for(var j = 1;j <= 4;j++){
//         a.push(new Poker(i,j));
//     }
// }
// a.push(new Poker(14,1))
// a.push(new Poker(15,1))
// console.log(a);
function Deck(){
    this.pokers = [];
    for(var i = 1;i <= 13;i++){
        for(var j = 1;j <= 4;j++){
            this.pokers.push(new Poker(i,j));
        }
    }
    this.pokers.push(new Poker(14,1))
    this.pokers.push(new Poker(15,1))
    this.prints = function(){
        for(var i = 0;i < this.pokers.length;i++){
            this.pokers[i].print();
        }
}
}   
var deck = new Deck();
deck.prints();