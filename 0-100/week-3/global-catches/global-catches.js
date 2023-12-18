// Function that may throw an error
const doSomethingDangerous = () => {
  // Simulate an error by trying to access an undefined variable
  console.log(undefinedVariable); // This line will throw an error
};

// Global error handler function
const globalErrorHandler = (error, url, line, column, errorObject) => {
  // Log the error details
  console.error('Global Error Handler - Error:', error);
  console.error('Global Error Handler - URL:', url);
  console.error('Global Error Handler - Line:', line);
  console.error('Global Error Handler - Column:', column);
  console.error('Global Error Handler - Error Object:', errorObject);

  // Perform additional error handling or logging here

  // Optionally rethrow the error to halt the execution
  // throw error;
};

// Attach the global error handler to the window object
window.onerror = globalErrorHandler;

// Call the function that may throw an error
doSomethingDangerous();

// The following code won't be executed if an error occurs above
console.log('This line will be executed only if no error occurs.');

// Example with asynchronous code
const asyncFunctionWithError = async () => {
  // Simulate an asynchronous error
  await Promise.reject(new Error('Async error'));
};

// Attach a global promise rejection handler
window.onunhandledrejection = (event) => {
  // Log the unhandled promise rejection
  console.error('Unhandled Promise Rejection:', event.reason);

  // Optionally handle or log the rejection here

  // Prevent the default behavior (logging the error to the console)
  event.preventDefault();
};

// Call the asynchronous function that causes a promise rejection
asyncFunctionWithError();
