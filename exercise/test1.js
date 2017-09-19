/**
 * Created by Administrator on 2017-06-30.
 */
//创建object实例的两种方法
//使用new操作符后跟object构造函数
var person1 = new Object();
person.name = "ngyuen";
person.age = 21;
console.log(person1.name);
console.log(person1.age);
//对象字面量
var person2={
    name : "ngyuen2",
    age : 20
};
console.log(person2.name);
console.log(person2.age);