//闭包的作用：实现共有变量；可以做缓存；可以实现封装，属性私有化；模块化开发，防止污染全局变量
// function a(){
//     function b(){
//         var c = 100;
//         c++;
//         console.log(c);
//     };
//     return b;
// }
// var demo = a();
// demo();
// demo();
// console.log(c);
//立即执行函数（针对初始化功能函数）,自动执行完一次后自动销毁,除此之外,和普通函数没有区别
//(function(){}());W3C建议第一种(function(){})();只有表达式才能被执行符号执行,声明不可以
// var num = (function (a,b,c){
//     return a+b+c;
// }(1,2,3))
// console.log(num);
// var x = function test(){

//     console.log(123);
// }()
//被执行符号执行后,函数名相当于没有,即销毁,即立即执行,(function(){}())
//function test(a,b,c,d){console.log(a+b+c+d)}(1,2,3,4)不报错,系统解析成(看下行)
//function test(a,b,c,d){console.log(a+b+c+d)}和(1,2,3,4)两句,不报错

// function test(){
//     var arr = [];
//     for(var i = 0;i < 10;i++){
//         (function(j){
//             arr[j] = function(){
//                 console.log(j);
//             }
//         }(i))
//     }
//     return arr;
// }

// var myArr = test();
// for(var j = 0;j < 10;j++){
//     myArr[j]();
// }

//typeof不报错，typeof所返回的类型是string。在js中if后面的()里面是表达式，把function f扔进去，那么从此这个 f 就消失了，更不会是函数。
//条件语句中只有 0、undefined、null、""、false、NaN这六个为false