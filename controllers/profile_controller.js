var express = require('express');
var router = express.Router();

var request = require("request");
var cheerio = require('cheerio');
var moment = require('moment');

var user = require('../model/userdata.js');
var fantasynews = require('../model/fantasynews.js');
var connection = require('../config/connection.js');
