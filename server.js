
var express = require('express');
var app = express();

var mongodb = require('mongodb');
var mongodb_server = new mongodb.Server('127.0.0.1', 27017, {});

new mongodb.Db('wikipedia', mongodb_server, {w: 1}).open(function (error, client) {

    if (error) throw error;

    var collection = new mongodb.Collection(client, 'articles');

    app.get('/simple', function(req, res){
        collection
            .find( { title: { $gt : "Wikipedia: D" } }, { title : 1 })
            .limit(10)
            .toArray(function(error, docs) {
                res.send(docs);
        });
    });

    app.get('/complex', function(req, res){
        var offset = Math.round(Math.random()*2500000);
        collection
            .find( { }, { title: 1 })
            .skip(offset)
            .limit(3)
            .toArray(function(error, docs) {
                res.send(docs);
        });
    });

    app.listen(8080);

    console.log('Server running at http://127.0.0.1:8080/');
});
