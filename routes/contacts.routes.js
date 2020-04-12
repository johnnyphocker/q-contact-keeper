const router = require('express').Router();

/**
 * @method GET /api/contacts
 * @desc Get all user's contacts
 * @private
 */

router.get('/', (req, res) => {
    res.status(200).json({ok: true})
});


/**
 * @method POST /api/contacts
 * @desc Add new contact
 * @private
 */

router.post('/', (req, res) => {
    res.status(200).json({ok: true})
});


/**
 * @method PUT /api/contacts/:id
 * @desc Update contact
 * @private
 */

router.post('/:id', (req, res) => {
    res.status(200).json({ok: true})
});


/**
 * @method DELETE /api/contacts/:id
 * @desc Delete contact
 * @private
 */

router.delete('/:id', (req, res) => {
    res.status(200).json({ok: true})
});



module.exports = router;