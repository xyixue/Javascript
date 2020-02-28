'use strict';


// 定义一个迭代器

function colorIterator(colors = []) {
    /* let i = 0;
    return {
        next() {
            let done = (i >= colors.length);
            let value = !done ? colors[i++] : undefined;
            return {
                value,
                done
            }
        }
    }
 */
    for (let i = 0; i < colors.length; i++) {
        yield colors[i];
    })
}

let colors = colorIterator(['red', 'green', 'blue']);
console.log(colors.next());
console.log(colors.next());
console.log(colors.next());
console.log(colors.next());