
const amqp = require('amqplib/callback_api');

exports.messages = (req, res) => {
    amqp.connect('amqp://localhost', (err, conn) => {
        conn.createChannel((err, ch) => {
            const q = 'hello';
            ch.assertQueue(q, { durable: false });   // I suppose the process will take about 5 seconds to finish
            setTimeout(() => {
                let msg = 'Get data from message queue!';
                ch.sendToQueue(q, new Buffer(msg));
                console.log(` [X] Send ${msg}`);
            }, 5000)
        });  // The connection will close in 10 seconds
        setTimeout(() => {
            conn.close();
        }, 10000);
    });
    res.send('The POST request is being processed!');
}
