/** Not actual models - just some demo data */


const summaries = [
    {
        id: 1,
        blindspotData: {
            coverageProfileStatement: "This news story only has <b>13% left</b> political bias coverage",
        },
        description: "U.S. stocks gave up early gains and turned lower, extending a recent stretch of losses that have pulled major indexes lower to start the year.",
        audioUrl: "",
    },
    {
        id: 2,
        blindspotData: {
            coverageProfileStatement: "This news story only has <b>23% center</b> political bias coverage",
        },
        description: "Sajid Javid has told the public we \"must learn to live with Covid\" - but emphasised the need to \"stay vigilant\".",
        audioUrl: "",
    },
    {
        id: 3,
        blindspotData: {
            coverageProfileStatement: "This news story only has <b>22% right</b> political bias coverage",
        },
        description: "Pasadena police arrested Brianna Kupfer's alleged killer Wednesday just a day after Los Angeles authorities released his identity.",
        audioUrl: "",
    },
    {
        id: 4,
        blindspotData: {
            coverageProfileStatement: "This news story only has <b>21% center</b> political bias coverage",
        },
        description: "A man has been charged over the death of primary school teacher Ashling Murphy in Ireland.",
        audioUrl: "",
    },   
    {
        id: 5,
        blindspotData: {
            coverageProfileStatement: "This news story only has <b>11% right</b> political bias coverage",
        },
        description: "Donald Trump plans to build 2,300 luxury homes at his Doral golf resort in the Miami area. The club is the biggest revenue generator in his golf business, but has suffered from a one-two punch of a divisive presidency and coronavirus shutdowns. The Trump Organization's plans for Doral are part of a string of recent business moves after months of relative quiet.",
        audioUrl: "",
    },
]


/** Dummy fetch summary from database */ 
const getSummary = (id) => {
    return summaries.find((summary) => summary.id === parseInt(id))
}

module.exports = getSummary;
