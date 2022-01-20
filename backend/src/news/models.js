/** Not actual models - just some demo data 
 * The audioUrls are uploaded on aws s3
*/


const summaries = [
    {
        id: "e5d990e4-c1b0-4585-abca-a646b659d39b",
        title: "Texas Congressman Henry Cuellar's Home Is Searched by FBI",
        blindspotData: {
            coverageProfileStatement: "This news story only has <b>23% right</b> political bias coverage",
        },
        description: "FBI agents raided the Laredo residence of Rep. Henry Cuellar, Texas Democrat, Wednesday night, the congressman’s office confirmed.",
        audioUrl: "https://groundnews-nas-3.s3.us-west-2.amazonaws.com/summary_e5d990e4-c1b0-4585-abca-a646b659d39b.mp3",
    },
    {
        id: "53bda91c-4165-477d-b1e9-9a4877da61d5",
        title: "Biden says Russia likely to invade Ukraine",
        blindspotData: {
            coverageProfileStatement: "This news story only has <b>28% right</b> political bias coverage",
        },
        description: "President Joe Biden predicted Wednesday that Russia will invade Ukraine, just as the United States launched a fresh effort to resolve the standoff and Moscow continued to mass troops on its neighbor's doorstep.",
        audioUrl: "https://groundnews-nas-3.s3.us-west-2.amazonaws.com/summary_53bda91c-4165-477d-b1e9-9a4877da61d5.mp3",
    },
    {
        id: "5be49aac-deb1-4eba-a6d0-fcd9e6525db4",
        title: "Jan. 6 committee subpoenas leaders of 'America First' movement",
        blindspotData: {
            coverageProfileStatement: "This news story only has <b>12% center</b> political bias coverage",
        },
        description: "The panel investigating the Jan. 6 insurrection on Wednesday subpoenaed two fringe far-right figures, known for spreading misinformation about the results of the 2020 election and urging Republicans to overturn it.",
        audioUrl: "https://groundnews-nas-3.s3.us-west-2.amazonaws.com/summary_5be49aac-deb1-4eba-a6d0-fcd9e6525db4.mp3",
    },
    {
        id: "b353e0a9-977c-4c7e-ab1c-32b89f422214",
        title: "Supreme Court rejects Trump's bid to shield records from Jan. 6 committee",
        blindspotData: {
            coverageProfileStatement: "This news story only has <b>11% right</b> political bias coverage",
        },
        description: "The Supreme Court on Wednesday rejected former President Trump's bid to block a trove of his administration's records from being handed to the Jan. 6 House committee.",
        audioUrl: "https://groundnews-nas-3.s3.us-west-2.amazonaws.com/summary_b353e0a9-977c-4c7e-ab1c-32b89f422214.mp3",
    },   
    {
        id: "f9cd2f68-95f1-4185-962b-a63c079d4a88",
        title: "Biden defends his first year record as agenda stalls: ‘I didn’t overpromise’",
        blindspotData: {
            coverageProfileStatement: "This news story only has <b>28% right</b> political bias coverage",
        },
        description: "Facing high daily Covid cases, major legislative defeats in Washington and a souring U.S. electorate, President Joe Biden on Wednesday defended his course of action in his first year in office.",
        audioUrl: "https://groundnews-nas-3.s3.us-west-2.amazonaws.com/summary_f9cd2f68-95f1-4185-962b-a63c079d4a88.mp3",
    },
]


/** Dummy fetch summary from database */ 
const getSummary = (id) => {
    return summaries.find((summary) => summary.id === id)
}

/** Dummy fetch top summaries; returning all */
const getTopSummaries = () => summaries;

module.exports = { getSummary, getTopSummaries };
