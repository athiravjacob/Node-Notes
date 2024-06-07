# Cluster
Node.js follows the single threaded event loop based architecture. 
Even if the computer has more than one CPU core, Node.js does not use all of them by default. 
It only uses one CPU core for the main thread that handles the event loop.
To handle such a heavy load, we need to launch a cluster of such Node.js processes and hence make use of multiple cores.

Node.js comes bundled up with a cluster module.
The cluster module permits the creation of child processes, that are copies of your program operating concurrently on the same server port.
Each child process possesses an event loop, V8 instance and memory. 
There is a parent process routing traffic to these child processes. 
To communicate with the parent processes, the child processes employ interprocess communication.

Hence while using the cluster module, you will have four copies of your program in case of a 4-core machine.
This will allow you to handle four times the normal traffic at the same speed.
Therefore clustering is capable of giving a performance boost to your Node.js application.

Scalability is needed when an application’s clients grow
Clustering acts as a load-balancing and parallel processing service.