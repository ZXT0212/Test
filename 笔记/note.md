## Object.create（）方法
>以指定对象为原型，创建新的对象，并可以设置属性

>作用：实现对象继承
```js
var tesla=Object.create(car,{
    //添加对象新属性
    brand:{
        //设置对象属性值
        value:"特斯拉";
        //可写
        writable:true;
        //删除
        configurable:false;
        //遍历
        enumerable:true;
    }
});
```

## Object.defineProperties
>给指定对象定义属性，可配置性较强

## call/apply/bind函数
### call/apply
* call和apply：改变函数的this指向，并直接调用该函数。  
* 方法.call(对象，参数)
* 方法.apply(对象，[参数])
### bind
* 改变函数内部的this指向，创建一个新的函数，但不调用
* 方法.bind(对象)   返回一个方法
---

# ES6
## let声明变量
1. 不允许重复声明
2. 块级作用域
3. 不存在变量提升

# 模板字符
使用``声明
* 能在字符串中直接使用换行符
* 使用 ${XXX} 拼接变量


## 扩展运算符... (解包)
> <b>arr=[1,2,3,4,5] => ...arr => 1,2,3,4,5

---
## 自定义对象遍历使用迭代器 Symbol.iterator

## 生成器函数 function * name(){}  
> **`解决异步编程`**
```js
function * gen(arg){  //函数调用完之后返回迭代器对象
    console.log(arg); //直接调用gen函数不会输出，第一次调用next方法才会输出
    let result = yield "明天会更好";  //代码分隔，yield后面为返回结果
    yield "加油";
    return "Everything is ok";
}
let iterator=gen("AAA"); 
console.log(iterator.next());  //第一个next传入实参没有意义
console.log(iterator.next("BBB"));  //result接收参数
```


## Set对象 
> 存储唯一值，自动去重，实现了itertor，可以使用for...of
```js
let s=Set(1,2,32,1,2,5,6,8);
```
属性
* size 获取元素个数
  
方法
1. add(n)  加入新数据
2. delete(n) 删除数据
3. has(n)  检查有没有某个数据
4. clear()  清空

遍历set
```js
for(let v of s){
    console.log(v);
}
```
数组去重
```js
let arr=[1,2,23,4,2,21,3,1];
let s=Set(arr);
let NewArr=[...s];
```
数组取交集
```js
let arr=[1,2,23,4,2,21,3,1];
let arr1=[1,2];
let inter = [...new Set(arr)].filter(item=>new Set(arr2).has(item));
```
数组取并集
```js
let union = [...new Set([...arr,...arr1])];
```
数组差集
```js
let cha = [...new Set(arr)].filter(item=>!(new Set(arr2).has(item)));
```


## Map 存储键值对
```js
let m=new Map();
//设置
m.set({'name':'张三'},['北京','上海','广州']);
//获取
let name=m.get('name');
//检测
console.log(m.has('name'));
//清空
m.clear();
//遍历
for(let v of m){
    console.log(v);
}
```

## Class 类
```js
class Phone{
    constructor(brand){
        this.brand=brand;
    }
    static name=""手机;  //静态成员（属于类的）
    call(someone){
        console.log(`我可以打电话给${someone}');
    }
}
```

## 深拷贝和浅拷贝（数组和对象）
> 复制一份新的数据
* `浅拷贝`：新数据的改变会影响原来的数据
1. 直接复制
2. 数组（concat、slice、扩展运算符...[对象指向同一个地址]）
3. 对象使用assign方法合并
   
* ` 深拷贝`：新数据的改变不会影响原来的数据
1. 先用 `JSON.stringify` 将对象转化为字符串，再用`JSON.parse`将字符串转化为对象
**注意：JSON不能转化对象的方法数据**
2. 递归实现

