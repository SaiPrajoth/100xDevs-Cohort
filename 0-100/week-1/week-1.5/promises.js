// A Promise is a JavaScript object that represents the eventual
// completion or failure of an asynchronous operation and its resulting value.
// It's a way to handle asynchronous code in a more organized and readable manner.



// creating a promise
// const NewPromise = new Promise((resolve, reject) => {
//   const operationSuccess = true;
//   if (operationSuccess) {
//     resolve("Operation successfull");
//   } else {
//     reject("Operation unsuccessful");
//   }
// });

// consuming a promise
// NewPromise.then((result) => {
//   console.log(result);
// }).catch((err) => {
//   console.log(err);
// });

// ### Exercise 1: Basic Promise Creation
// Create a promise that resolves after 2 seconds with a message saying "Promise resolved successfully!" and use `.then()` to handle the resolved value.

// const Promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("promise resolved successfully");
//   }, 2000);
// });

// Promise1.then((result)=>{console.log(result)});

// ### Exercise 2: Promise Rejection
// Create a promise that rejects after 1.5 seconds with an error message saying "Promise rejected!" and use `.catch()` to handle the rejection.

// const Promise2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("Promise rejected")
//     },1500)
// })

// Promise2.catch((err)=>{
//     console.log(err);
// })

// ### Exercise 3: Chaining Promises

// Create two promises:
// 1. The first one resolves with a message "First promise resolved" after 3 seconds.
// 2. The second one resolves with a message "Second promise resolved" after 2 seconds.

// Chain these promises using `.then()` so that the second promise starts executing after the first one is resolved. Log the final result.

// const Promise3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{resolve("First Promise resolved")},3000);
// })
// const Promise4 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{resolve("Second Promise resolved")},2000);
// })

// Promise3.then((result) => {
//     console.log(result);
//     return Promise4; // Return the next promise in the chain
// })
// .then((resultb) => {
//     console.log(resultb);
// })
// .catch((error) => {
//     console.error('Error:', error);
// });



// ### Exercise 4: Handling Multiple Promises

// Create three promises that resolve with values "Promise 1", "Promise 2", and "Promise 3" after 1 second, 3 seconds, and 2 seconds, respectively. Use `Promise.all()` to log an array of the resolved values when all promises are resolved.

// const Promise5 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{resolve("First Promise resolved")},3000);
// })
// const Promise6 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{reject("Second Promise resolved")},2000);
// })
// const Promise7 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{resolve("third Promise resolved")},4000);
// })

// Promise.all([Promise5,Promise6,Promise7]).then((results)=>{console.log(results)}).catch((errors)=>{console.log(errors)});


// ### Exercise 5: Fetch API with Promises

// Use the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) fake REST API:
// 1. Fetch the list of posts (`https://jsonplaceholder.typicode.com/posts`) using `fetch` and promises.
// 2. Log the titles of the first three posts after the data is successfully fetched.
// 3. Handle errors if the fetch operation fails.


// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json();
//     })
//     .then(data => {
//         let result = "";
//         for (let i = 0; i <= 2; i++) {
//             result += data[i].title + ", ";
//         }
//         console.log(result);
//     })
//     .catch(error => console.error('Error:', error));





// ### Exercise 6: Promisify a Callback Function

// Take a callback-based function, such as `setTimeout`, and create a promise-based version of it. For example, create a `delay` function that resolves after a given number of milliseconds.

// const Promise9 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("This is result after 5 seconds");
//     },5000)
// })

// Promise9.then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});


// ### Exercise 7: Error Handling with Promises

// Create a function that simulates fetching data from an API. This function should randomly reject with an error message or resolve with data after 2 seconds. Use this function to demonstrate proper error handling with promises.

// Feel free to try these exercises and experiment with different scenarios to solidify your understanding of promises. If you need solutions or have questions about any specific exercise, feel free to ask!
