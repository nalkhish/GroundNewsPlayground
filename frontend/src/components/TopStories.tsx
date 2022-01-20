import axios from "axios";
import { useEffect, useState } from "react"
import { DEFAULT_CONFIG } from "../constants";
import handleError from "../utils/errors";
import Divider from "./Divider";
import Story from "./Story";
import './TopStories.css';

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
        <section>
            <Divider>
                <h2>Top news stories</h2>
            </Divider>
            <ul className="top-stories">
                {ids.map((id) => {
                    return (
                        <li key={id}>
                            <Story id={id} />
                        </li>
                    )
                })}
            </ul>
        </section>
    )

}

export default TopStories