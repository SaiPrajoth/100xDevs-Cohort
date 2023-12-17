// `async/await` is a syntax feature in JavaScript that simplifies working with asynchronous code and makes it look and behave more like synchronous code. It's built on top of promises and provides a cleaner and more readable way to handle asynchronous operations. Let's explore `async/await` with examples and some problems to practice:

// ### Example 1: Basic Usage

```javascript
// Asynchronous function using async/await
async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    console.log('Data:', data);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Call the async function
fetchData();
```

// In this example:
// - The `fetchData` function is declared as `async`.
// - The `await` keyword is used to pause the execution until the promise returned by `fetch` is resolved.
// - The `try...catch` block handles any errors during the asynchronous operations.

// ### Example 2: Multiple Async Operations

```javascript
async function fetchDataParallel() {
  try {
    const [userData, postList] = await Promise.all([
      fetch('https://jsonplaceholder.typicode.com/users/1').then(response => response.json()),
      fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json())
    ]);

    console.log('User Data:', userData);
    console.log('Post List:', postList);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Call the async function
fetchDataParallel();
```

// In this example:
// - Multiple asynchronous operations are executed in parallel using `Promise.all`.
// - The `await` keyword waits for the array of promises to be resolved, and destructuring is used to get the results.

// ### Practice Problems:

// 1. **Sequential Execution:**
//    - Write an async function that performs three asynchronous tasks sequentially and logs the results.

// 2. **Error Handling:**
//    - Modify an async function to handle errors using `try...catch`.

// 3. **Parallel Execution:**
//    - Fetch data from two different APIs in parallel and log the results.

// 4. **Promise Chain:**
//    - Chain multiple promises using `async/await` to perform a sequence of asynchronous tasks.

// 5. **Error Propagation:**
//    - Write an async function that propagates errors from nested promises to the outer catch block.

// ### Important Points:

// - `async` functions always return a promise.
// - `await` can only be used inside an `async` function.
// - `async/await` simplifies error handling compared to chaining promises.

// Practicing these examples and problems will give you a solid understanding of how to use `async/await` effectively in your JavaScript applications.