
var async = require('async');
var request = require('request');

args = process.argv;

var num_requests = args[2];
var resource = args[3];

var t1 = new Date();

var single_request = function(callback) {
    request('http://127.0.0.1:8080/' + resource, function (error, response, body) {
        //
        if (!error && response.statusCode == 200) {
            callback(null, body);
        }
    });
};

var requests = [];
for (var i = 0; i < num_requests; i++) {
    requests.push(single_request);
}

async.parallel(
    requests,
    function(err, res) {
        if(err) {
            console.log('Async requests failed: ' + err.message);
        }
        var t2 = new Date();
        diff = t2.getTime() - t1.getTime();
        // console.log(res);
        console.log('elapsed time: ' + diff + 'ms');
    }
);

