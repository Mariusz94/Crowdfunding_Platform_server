const express = require('express');
const { create, getUser, show, update, destroy } = require('./controller');
//const cors = require('cors')

//express().use(express.json());
//express().use(cors);

const router = express.Router();

/*const corsOptions = {
    origin: 'https://yourdomain.com',
}*/


router.post('/', create)

//router.post('/', cors(),
 //  create);

router.get('/:email/:password',
    getUser);
/*
router.get('/:id',
    show);

router.put('/:id',
    update);
*/
router.delete('/:email/:password',
    destroy);


module.exports = router;
