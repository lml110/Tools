## \_deepCopy(obj) ⇒ <code>value</code>
<p>深拷贝数据-递归</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type |
| --- | --- |
| obj | <code>\*</code> | 

**Example**  
```javascript
const map = new Map();
map.set("key", "value");
map.set("ConardLi", "coder");

const set = new Set();
set.add("ConardLi");
set.add("coder");

const target = {
    field1: 1,
    field2: undefined,
    field3: {
        child: "child",
    },
    field5: {
        child: "child",
    },
    field4: [2, 4, {'lml':1}, {'lml':1}],
    field6: [2, 4, {'lml':1}, {'lml':1}],
    empty: null,
    map,
    set,
    bool: new Boolean(true),
    num: new Number(2),
    str: new String(2),
    symbol: Object(Symbol(1)),
    date: new Date(),
    reg: /\d+/,
    error: new Error(),
    func1: () => {
        let t = 0;
        console.log("coder", t++);
    },
    func2: function (a, b) {
        return a + b;
    },
};
//测试代码

const test1 = _deepCopy(target);
const test2 = _deepCopy1(target)
const test3 = JSON.parse(JSON.stringify(target))
//数组检测
target.field4.push(9);
target.field4[2].lml = 9;
target.field4[3].lml = 8;
//无限循环检测
target.lml = target
//同对象检测
target.field3.lml = 1
target.field5.lml = 2
//时间检测
target.date = new Date('2020/02/06')
target.map.set("lml", "魔尊");
target.set.add("lml", "魔尊");
target.reg = /\s+/

console.log('target: ',target);
console.log('test1: ', test1);
console.log('test2: ', test2);
console.log('test3: ', test3);
// 场景：数组，对象，循环引-自身
```
