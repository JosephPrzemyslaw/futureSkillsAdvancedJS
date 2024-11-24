//
// override "sentence" object iterator so that for-of iterates backward
//
// const sentence = new String("The quick brown fox jumps over the lazy dog");

// sentence[Symbol.iterator] = function () {
//     let index = this.length;
//     let that = this;

//     return {
//         next() {
//             return {
//                 value: that.charAt(--index),
//                 done: index === -1,
//             };
//         }
//     }
// }

// for(let char of sentence) {
//     console.log(char);
// }


//
// override "sentence" object iterator that for-of iterates over words
//
// sentence[Symbol.iterator] = function () {
//     const words = this.trim().split(" ");
//     let wordIndex = 0;
//     return {
//         next() {
//             return {
//                 done: wordIndex === words.length,
//                 value: words[wordIndex++],
//             };
//         }
//     }
// }

// for(let char of sentence) {
//     console.log(char);
// }

// function getFibonacciIterable() {
//     return {
//         [Symbol.iterator]: function () {
//             let curr = 0, next = 1; // 0, 1, 1, 2, 3, 5, 8, 13
//             return {
//                 next() {
//                     [curr, next] = [next, curr + next];
//                     return {
//                         done: false,
//                         value: curr,
//                     };
//                 },
//             };
//         },
//     };
// }

// for(let fibNo of getFibonacciIterable()) {
//     console.log(fibNo);
//     if (fibNo > 100_000) {
//         break;
//     }
// }