## deepMerge(target, ...sources) ⇒ <code>Object</code>
<p>深层合并对象</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>Object</code> | <p>默认对象</p> |
| ...sources | <code>Object</code> | <p>赋值对象</p> |

**Example**  
```javascript
//应用场景：配置数据合并
const resConfig1 = {
    plugins: [
        { name: 'vite-plugin-importer', transform: [] },
        '123',
        '1322',
        {
            '21': '21-1',
            aa: ['01'],
        }
    ],
    resolve: {
        alias: {
            "@": 'src'
        }
    },
    build: {
        rollupOptions: {
            input: {
                page: 'src/page.html',
            },
            output: {
                chunkFileNames: 'static/js/[name]-[hash].js',
                entryFileNames: 'static/js/[name]-[hash].js',
                assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
                manualChunks(id) {}
            },
            aa: '11',
        },

    },
    css: {}
}

const resConfig2 = {
    plugins: [{
            '32': '22-1',
            aa: '02',
        },
        { name: 'vite-plugin-importer', transform: [] },
        '123',
        { name: 'tools', transform: [] },
    ],
    resolve: {
        alias: {
            "@": '/src',
            "lml": 'tools'
        }
    },
    build: {
        rollupOptions: {
            input: {
                admin: 'src/index.html',
            },
            output: {
                lmlName: 'static/js/tools.js',
            },
            bb: '22',
        }
    },
    less: {},
    style: {
        'aa': '123'
    }
}

console.log(deepMerge(resConfig1, resConfig2));
// console.log(arr2Merger(resConfig1.plugins, resConfig2.plugins));
```
