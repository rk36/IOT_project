const mqtt = require('mqtt')
const express = require('express')

const app = express()


let client  = mqtt.connect("mqtt://test.mosquitto.org");
console.log("connected flag  "+client.connected);
client.on("connect",function(){	
        client.subscribe('Topic07');
        console.log('client has subscribed successfully');
        client.on('message', function (topic, message){
            app.get('/temp', (req, res) => {
              res.send(message.toString())
            })
            console.log(message.toString()); //if toString is not given, the message comes as buffer
          });
});

app.listen(8000)