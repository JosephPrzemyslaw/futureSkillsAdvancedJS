
// rewrite iterator using generators to print fib series

function* getFibonacciIterable(maxNo) {
    let curr = 1, prev = 0;
    while(true) {
        yield curr;
        [curr, prev] = [curr + prev, curr];
        if (maxNo < curr) {
            break;
        }
    }
}

// for(let fibNo of getFibonacciIterable()) {
//     console.log(fibNo);
//     if (fibNo > 100_000) {
//         break;
//     }
// }

console.log([...getFibonacciIterable(100_000)]);

//
// rewrite iterator using generators to iterate over words
//
const sentence = new String("The quick brown fox jumps over the lazy dog");
sentence[Symbol.iterator] = function* () {
    const words = this.trim().split(" ");
    for(let word of words) {
        yield word;
    }
}

for(let word of sentence) {
    console.log(word);
}