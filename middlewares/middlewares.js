const express = require('express');
const cors = require('cors');
const bodyParser=require("body-parser");

module.exports = (app) => {
    app.use(express.json());
    app.use(cors());
    app.use(express.urlencoded({ extended: true }));

    app.set('view engine', 'ejs');
    app.set('views', require('path').join(__dirname, 'views'));
};