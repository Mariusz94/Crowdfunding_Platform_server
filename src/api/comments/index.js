const { Router } = require('express');
const { createComment, getComments, destroyComment,destroyManyComment } = require('./controller');
const cors = require('cors')

const router = Router();

router.post('/', cors(),
    createComment);

router.get('/:idPost', cors(),
    getComments);

router.delete('/:idComment', cors(),
    destroyComment);

router.delete('/post/:idPost', cors(),
    destroyManyComment);

module.exports = router;
