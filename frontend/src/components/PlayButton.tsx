import { useState } from 'react';
import { ReactComponent as PlayIcon } from '../icons/play.svg';
import { ReactComponent as PauseIcon } from '../icons/pause.svg';

import AudioPlayer from '../services/AudioPlayer';
import Button from './Button';


type PlayButtonProps = {
    url: string
}

/** Button to play (currently for audio) */
function PlayButton({ url }: PlayButtonProps) {

    const [playing, setPlaying] = useState(false);
    return (
        <Button
            handleClick={() => {
                if (playing) {
                    AudioPlayer.pause();
                    setPlaying(false);
                } else {
                    AudioPlayer.play(url, () => setPlaying(false));
                    setPlaying(true);
                }
            }}
            className="btn btn-play"
        >
            {playing? 
                <PauseIcon title={"play"} width={"1rem"} height={"1rem"} />
            :
                <PlayIcon title={"play"} width={"1rem"} height={"1rem"} />
            }
        </Button>
    )
}

export default PlayButton