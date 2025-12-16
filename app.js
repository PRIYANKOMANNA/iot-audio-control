const broker = "wss://broker.hivemq.com:8884/mqtt";

const client = mqtt.connect(broker, {
  clientId: "web_" + Math.random().toString(16).substr(2,8)
});

client.on("connect", () => {
  status.innerText = "Status: Connected ✅";
});

function playBoth() {
  client.publish("audio/home/play","ON");
  client.publish("audio/shop/play","ON");
}

function pauseBoth() {
  client.publish("audio/home/pause","ON");
  client.publish("audio/shop/pause","ON");
}

function setVolume(v) {
  client.publish("audio/home/volume", v);
  client.publish("audio/shop/volume", v);
}
