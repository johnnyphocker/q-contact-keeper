const router = require('express').Router();


/**
 * @method GET /api/auth
 * @desc Get logged in user
 * @private
 */

router.get('/', (req, res) => {
    res.status(200).json({ok: true})
});


/**
 * @method POST /api/auth
 * @desc Auth user and get token
 * @public
 */

router.get('/', (req, res) => {
    res.status(200).json({ok: true})
});



module.exports = router;