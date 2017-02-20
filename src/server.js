/**
 * Created by sasha on 21.02.2017.
 */
require("babel-polyfill");

import Express from 'express';
import config from './config.js';

import projects from './routes/routes.js';

let app = Express();
let serverPort = config.serverPort;

app.use("/api/read", projects);


//TODO send port to config file
app.listen(serverPort, function () {
    console.log("Server running!");
});
