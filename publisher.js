#!/usr/bin/env python3

const mqtt = require('mqtt')

let options = {
    clientId : `'mqttjs_' + ${Math.random().toString(16).substr(2, 8)}`
}
let client = mqtt.connect('mqtt://test.mosquitto.org')

client.on('connect', function(){
            let random = (Math.random()*100).toString();
            setInterval(function(){client.publish('Topic07',random)},3000); 
            console.log("hi");
        });
