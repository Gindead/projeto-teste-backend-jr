const config = require('./config/config.json');

const app = require('./server');

port = config.server.port || 5000;

app.listen(port, () => {
    console.log("Escutando na porta ", port);
});