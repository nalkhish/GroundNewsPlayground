/** Routes for news */
const express = require('express');
const getSummary = require('./models');

const ensureSummaryHasAudioUrl = require('./vocals');

const router = express.Router();


router.get('/private/event/:id/summary', async (req, res) => {
    let summary = getSummary(req.params.id);
    if (!summary) {
        return res.status(404).json({ 'error': `Did not find summary with id ${id}`})
    }
    summary = await ensureSummaryHasAudioUrl(summary);
    return res.json(summary)
})

module.exports = router;
