import {readFile} from "fs";

//
// implement callback as Promise for fileRead
//

// readFile("./zad1.js", "utf-8", (err, data) => {
//     if (err) {
//         console.error(err.message);
//     } else {
//         console.log(data);
//     }
// });

function readFilePromise(filePath, encoding) {
    return new Promise((res, rej) => {
        readFile(filePath, encoding, (err, data) => err ? rej(err.message) : res(data));
    });
}

// example
let allFileContent = "";
readFilePromise("./zad1.js", "utf-8")
    .then(data => {
        allFileContent += data;
        return readFilePromise("./zad2.js", "utf-8")
    })
    .then(data => {
        allFileContent += data;
        return readFilePromise("./zad3.js", "utf-8")
    })
    .then(data => {
        allFileContent += data;
        return readFilePromise("./zad4.js", "utf-8")
    })
    .catch(err => {
        console.error(err.message);
    });



try {
    const FILE_NO = 4;
    for(let i = 1; i <= FILE_NO; i++) {
        const fileContent = await readFilePromise(`./zad${i}.js`, "utf-8");
        allFileContent += fileContent;
    }
} catch (err) {
    console.error(err.message);
}


// Promise.all([
//     readFilePromise("./zad1.js", "utf-8"),
//     readFilePromise("./zad2.js", "utf-8"),
//     readFilePromise("./zad3.js", "utf-8"),
//     readFilePromise("./zad4.js", "utf-8"),
//     readFilePromise("./zad5.js", "utf-8"),
// ]).then(fileContent => {
//     debugger
// })
//   .catch(err => {
//     debugger
//   })

