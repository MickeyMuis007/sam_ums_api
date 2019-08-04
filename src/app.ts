import express from "express";
import dotenv from "dotenv";

// environment variables
dotenv.config();

// module variables
const app = express();

import config from "./config";


app.get("/hello", (req, res) => {
    res.send("Hello World!");
});

app.listen(config.node_port, () => {
    console.log(`${config.app_name} listening on port ${config.node_port}`)
});