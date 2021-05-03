const express = require('express');
const cors = require('cors')

//const books = require('./books');
//const authors = require('./authors');
const users = require('./users');
const posts = require('./posts');
const comments = require('./comments');

express().use(express.json());
express().use(cors);
express().use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});


let router = express.Router();

//const router = Router();
//router.use('/authors', authors);
//router.use('/books', books);
router.use('/users', users);
router.use('/posts', posts);
router.use('/comments', comments);

module.exports = router;
