mongonode
=========

A simple client and server for performance tests with node.js and mongodb.

Requirements:

Node.js installed on both client and server (can be the same machine). Building from source is recommended.

Mongodb server running on server machine on port 27017.

A database on this server, for example english wikipedia abstracts.

You will find some setup instructions here:

https://github.com/strud/db_evaluation


client:

npm install async

npm install request

server:

npm install express

npm install mongodb


To run the scenario, just start server and client by:

node server.js

node client.js number_of_requests {simple|complex}

e.g. node client.js 10000 simple


