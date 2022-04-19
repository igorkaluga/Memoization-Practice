function add10(num) {
    return num + 10;
}

function memoize(fn) {
    let cached = {};
    return (num) => {
        if (num in cached) {
            console.log('pulling from cached: ' )
            return cached[num];
        } else {
            let result = fn(num);
            cached[num] = result;
            return result;
        }
    }
}

const newAdd10 = memoize(add10);

console.log(newAdd10(5))
console.log(newAdd10(5))
