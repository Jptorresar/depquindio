const { Router } = require('express');
const router = Router();
const controller = require('./controller');

router.get('/',controller.getJugadores )
router.get('/:id',controller.getJugadorById )



module.exports = router;
