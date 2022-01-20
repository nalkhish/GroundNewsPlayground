import { useEffect, useState } from "react"
import { DEFAULT_CONFIG } from "../constants";
import { StoryDataType } from "../types";
import axios from 'axios';
import handleError from "../utils/errors";


type StoryPropsType = {
    id: string,
}

/** News Story
 * Normally, it makes sense to get the data from a parent that requested a list. 
 * Here (high frequency endpoints with caching) it makes sense to request data per story
 */
function Story({ id }: StoryPropsType) {

    const [data, setData] = useState<StoryDataType>();
    useEffect(() => {
        const getStory = async () => {
            try {                
                const res = await axios.get(
                    `/api/news/private/event/${id}/summary`,
                    DEFAULT_CONFIG
                );
                debugger;
                setData(res.data);
            } catch (err) {
                handleError(err);
            }
        }
        getStory();
    }, [id])

    if (!data) {
        return null
    }

    return (
        <section>
            <h2>{data.title}</h2>
            <p>{data.description}</p>
        </section>
    )
}

export default Story