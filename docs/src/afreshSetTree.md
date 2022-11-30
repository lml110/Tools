## 一维数组生成一次性树结构
**Author**: liumouliang 2019-11-15
通过parent一次性查询
reduce 累加器  
### new 一维数组生成一次性树结构(list, parentFN, ifFN, childKey)
**Returns**: <code>Array</code> - <p>const treeList = afreshSetTree(res,cus=&gt;cus.parentId==0,(el,cus)=&gt;(el.id==cus.parentId) &amp;&amp; (el.type==1));</p>
<p>let data = [{ &quot;aa&quot;: 11, id: 1, parentId: 0 }, { &quot;aa&quot;: 22, id: 2, parentId: 1 }, { &quot;aa&quot;: 33, &quot;bb&quot;: 31, id: 3, parentId: 2 }, { &quot;aa&quot;: 33, &quot;bb&quot;: 32, id: 4, parentId: 3 }, { &quot;aa&quot;: 44, id: 5, parentId: 3 }]
let list = afreshSetTree(data, cus =&gt; cus.parentId == 0, (el, cus) =&gt; el.id == cus.parentId)
console.log(list);
// [{&quot;aa&quot;:11,&quot;id&quot;:1,&quot;parentId&quot;:0,&quot;children&quot;:[{&quot;aa&quot;:22,&quot;id&quot;:2,&quot;parentId&quot;:1,&quot;children&quot;:[{&quot;aa&quot;:33,&quot;bb&quot;:31,&quot;id&quot;:3,&quot;parentId&quot;:2,&quot;children&quot;:[{&quot;aa&quot;:33,&quot;bb&quot;:32,&quot;id&quot;:4,&quot;parentId&quot;:3},{&quot;aa&quot;:44,&quot;id&quot;:5,&quot;parentId&quot;:3}]}]}]}]</p>  

| Param | Type | Description |
| --- | --- | --- |
| list | <code>Array</code> |  |
| parentFN | <code>function</code> | <p>确认函数</p> |
| ifFN | <code>function</code> | <p>判断函数</p> |
| childKey | <code>String</code> | <p>赋值键值</p> |

