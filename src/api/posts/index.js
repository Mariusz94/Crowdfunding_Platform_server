const { Router } = require('express');
const { createPost, getPosts, getPost, destroyPost } = require('./controller');
const cors = require('cors')

const router = Router();

router.post('/', cors(),
    createPost);

router.get('/', cors(),
    getPosts);

router.get('/:postId',
    getPost);
/*
router.put('/:id',
    update);
*/
router.delete('/:postId', cors(),
    destroyPost);


module.exports = router;
