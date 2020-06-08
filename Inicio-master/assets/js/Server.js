//ESTE CODIGO NO AFECTARA SU BOT, SCRIPT DE ARRANQUE
const http = require('http');
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/", (request, response) => {
  response.sendStatus(200);
});

app.listen(process.env.PORT);

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`); 
}, 280000);


//DESDE AQUI EMPIEZA A ESCRIBIR EL CODIGO PARA SU BOT