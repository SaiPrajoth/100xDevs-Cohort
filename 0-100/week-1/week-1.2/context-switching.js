// Context-switching: JavaScript's context-switching occurs as tasks shift, managing asynchronous operations through callbacks and the event loop. This single-threaded language ensures 
// non-blocking execution by leveraging mechanisms like promises and async/await.

        // Asynchronous operation using setTimeout
        console.log('Start');
        setTimeout(() => {
          console.log('Async Operation');
        }, 1000);
        console.log('End');
        // Output: Start, End, Async Operation (after 1 second)