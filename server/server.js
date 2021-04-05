const ws = require("ws");
const wss = new ws.Server({ host: "127.0.0.1", port: 8081 });

const clients = [];
const messages = [];

wss.on("connection", onConnect);

function onConnect(wsClient) {
  const clientID = random(10000, 99999);

  console.log("Новый пользователь " + clientID);
  clients.push({ id: clientID, ws: wsClient });

  wsClient.on("message", function (message) {
    console.log(message + " от " + clientID);

    const data = JSON.parse(message);
    const msgObject = { userid: clientID, username: data.name, message: data.message, clientid: clientID };
    messages.push(msgObject);

    clients.forEach((client) => {
      client.ws.send(JSON.stringify(msgObject));
    });
  });

  // wsClient.on("close", function () {
  //   messages.push({ id: clientID, message: `${clientID} решил уйти` });
  //   wsClient.send(JSON.stringify({ id: clientID, message: `${clientID} решил уйти` }));
  //   clients = clients.filter((element) => element.id !== clientID);
  //   if (clients.length === 0) {
  //     messages = messages.filter((element) => element.id === 0);
  //   }
  // });
}

console.log("Сервер запущен на 8081 порту");

function random(min, max) {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}
