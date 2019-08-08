import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import objectPath from "object-path";
import colors from "colors";

import authRouter from "./presentation/middleware/auth-routes.middleware";
import config from "./config";

// Set configurations
dotenv.config();
colors.setTheme({});

// module variables
const app = express();

// connect to mongodb
const dbStr: string = objectPath.get(config, "database", "");
// console.log(colors.yellow(dbStr));
mongoose.connect(dbStr,{
    useNewUrlParser: true
}, () => {
    console.log("Successfully connected to mongodb".green);
})

// Middlewares
app.use("/auth", authRouter);


// Routes
app.get("/hello", (req: any, res: any) => {
    res.send("Hello World!");
});

app.listen(config.node_port, () => {
    console.log(`Successfully connected to ${config.app_name} listening on port ${config.node_port}`.green)
});