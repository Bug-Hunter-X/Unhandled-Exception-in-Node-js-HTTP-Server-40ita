# Unhandled Exception in Node.js HTTP Server

This repository demonstrates a common error in Node.js where exceptions are not handled correctly within an HTTP server.  The server is susceptible to crashes due to unhandled errors.

## Bug
The `bug.js` file showcases the problematic code where a lack of proper error handling can lead to unexpected crashes.

## Solution
The `bugSolution.js` file provides a corrected version that incorporates robust error handling to prevent the server from crashing unexpectedly. 

## How to reproduce
1. Clone this repository.
2. Navigate to the repository's directory.
3. Run `node bug.js`.
4. Observe that the server fails to handle unexpected errors.
5. Run `node bugSolution.js` to observe the proper error handling implemented.