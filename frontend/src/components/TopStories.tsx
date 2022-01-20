import axios from "axios";
import { useEffect, useState } from "react"
import { DEFAULT_CONFIG } from "../constants";
import handleError from "../utils/errors";
import Story from "./Story";

/** A list of the top stories right now
 * 
 */
function TopStories() {
    const [ids, setIds] = useState([]);
    useEffect(() => {
        const getStory = async () => {
            try {                
                const res = await axios.get(
                    '/api/news/top/',
                    DEFAULT_CONFIG
                );
                setIds(res.data.topIds);
            } catch (err) {
                handleError(err);
            }
        }
        getStory();
    }, [])

    return (
        <ul>
            {ids.map((id) => {
                return (
                    <li key={id}>
                        <Story id={id} />
                    </li>
                )
            })}
        </ul>
    )

}

export default TopStories