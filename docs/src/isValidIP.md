## isValidIP(str, version) ⇒ <code>Boolean</code>
<p>是否是ip地址</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | <p>IP</p> |
| version | <code>Number</code> | <p>4 或 6 表示 ipv4或ipv6</p> |

**Example**  
```javascript
isValidIP('192.168.0.1')
console.log(isValidIP('::ffff:127.0.0.1'));
 expect(isValidIP('127.0.0.1')).toBe(true)
    expect(isValidIP('0.0.0.0')).toBe(true)
    expect(isValidIP('255.255.255.255')).toBe(true)
    expect(isValidIP('1.2.3.4')).toBe(true)
    expect(isValidIP('::1')).toBe(true)
    expect(isValidIP('2001:db8:0000:1:1:1:1:1')).toBe(true)
    expect(isValidIP('2001:41d0:2:a141::1')).toBe(true)
    expect(isValidIP('::ffff:127.0.0.1')).toBe(true)
    expect(isValidIP('::0000')).toBe(true)
    expect(isValidIP('0000::')).toBe(true)
    expect(isValidIP('1::')).toBe(true)
    expect(isValidIP('1111:1:1:1:1:1:1:1')).toBe(true)
    expect(isValidIP('fe80::a6db:30ff:fe98:e946')).toBe(true)
    expect(isValidIP('::')).toBe(true)
    expect(isValidIP('::ffff:127.0.0.1')).toBe(true)
    expect(isValidIP('0:0:0:0:0:ffff:127.0.0.1')).toBe(true)
```
