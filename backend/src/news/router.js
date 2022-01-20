/** Routes for news */
const express = require('express');
const { getSummary , getTopSummaries } = require('./models');

const ensureSummaryHasAudioUrl = require('./vocals');

const router = express.Router();

/** Get top story list */
router.get('/top/', async (req, res) => {
    const topSummaries = getTopSummaries();
    return res.json({topIds: topSummaries.map((summary) => summary.id)})
})

/** Get one summary */
router.get('/private/event/:id/summary', async (req, res) => {
    let summary = getSummary(req.params.id);
    if (!summary) {
        return res.status(404).json({ 'error': `Did not find summary with id ${req.params.id}`})
    }
    summary = await ensureSummaryHasAudioUrl(summary);
    return res.json(summary)
})

module.exports = router;
