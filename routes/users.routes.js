const router = require('express').Router();

/**
 * @method POST /api/users
 * @desc Register a user
 * @public
 */

router.post('/', (req, res) => {
    res.status(200).json({ok: true})
});



module.exports = router;