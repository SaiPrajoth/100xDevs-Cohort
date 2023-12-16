// The Cluster module in Node.js allows the creation of a cluster of worker processes, each running on a separate core. The master process manages worker creation, and incoming network connections are distributed among workers for load balancing. This enhances performance by utilizing multiple CPU cores, 
// overcoming the limitations of the single-threaded event loop.

        // Example using the Cluster module in Node.js
        const cluster = require('cluster');
        const os = require('os');
        
        if (cluster.isMaster) {
          // Create a worker for each CPU core
          for (let i = 0; i < os.cpus().length; i++) {
            cluster.fork();
          }
        } else {
          // Worker process code
          // Handle tasks within each worker
        }