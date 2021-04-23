//import express from 'express';
const express = require('express')
const cors = require("cors");

const expressConfig = (apiRoot, routes) => {
    const app = express();
    app.use(express.json());
    app.use(cors());
    app.use(apiRoot, routes);

    // 404 Error handler
    app.use((req, res, next) =>  res.status(404).send({error: 'Routing not found'}));

    return app
}

module.exports = expressConfig;