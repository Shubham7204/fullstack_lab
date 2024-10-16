// Import the file system module
var fs = require("fs");

// Example of multiple async operations

// Asynchronous file read operation
fs.readFile('input.txt', function (err, data) {
    if (err) {
        return console.error(err);  // Handle any errors
    }

    // Print the file content
    console.log("File Read: " + data.toString());
});

// Timeout operation to simulate event loop behavior
setTimeout(() => {
    console.log("Timeout 1: This will be executed last.");
}, 3000);

setTimeout(() => {
    console.log("Timeout 2: This will be executed second.");
}, 1000);

// This message will be printed before the file content due to asynchronous nature of operations
console.log("Program Ended: This will be executed first.");
