# MongoDB + node.js

A simple client and server for performance tests with mongodb and node.js .

## Requirements:

* Node.js installed on both client and server (can be the same machine). Building from source is recommended.

* Mongodb server running on server machine on port 27017.

* A database on this server, for example english wikipedia abstracts.

Setup instructions for the db can be found here:

https://github.com/strud/db_evaluation

* The followinf node.js modules:

client:

npm install async

npm install request

server:

npm install express

npm install mongodb


## Running

Replace the IP adresses in client and server according to your setup.

To run the scenario, just start server and client by:

node server.js

node client.js number_of_requests {simple|complex}

e.g. node client.js 10000 simple


