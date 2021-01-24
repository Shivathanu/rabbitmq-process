// receive.js
var amqp = require('amqplib/callback_api');
// var request = require('request'); request.post('http://localhost:3000/api/messages', function (error, response, body) {
    // console.log(response.body);    // Connect to the server and wait for the queue
    amqp.connect('amqp://localhost', (err, conn) => {
        conn.createChannel((err, ch) => {
            var q = 'hello'; ch.assertQueue(q, {
                durable: false
            });
            console.log(' [*] Waiting for messages in %s. To exit press CTRL+C', q);
            ch.consume(q, msg => {
                console.log(' [x] Received %s', msg.content);
                conn.close();
            }, {
                noAck: true
            });
        });
    });

// });