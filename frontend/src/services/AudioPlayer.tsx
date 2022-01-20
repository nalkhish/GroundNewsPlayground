

/** This audioplayer implements the singleton pattern to avoid concurrently playing audio */
class AudioPlayer {
    static instance: AudioPlayer | null = null;
    audioRef: null | HTMLAudioElement;

    static getInstance() {
        if (!AudioPlayer.instance) {
            AudioPlayer.instance = new AudioPlayer();
        }
        return AudioPlayer.instance;
    }

    constructor() {
        this.audioRef = null;
    }

    ensureSilence() {
        if (this.audioRef) {
            this.audioRef.pause();
        }
    }

    createNewPlayback(url: string, handleEnd: () => void) {
        this.audioRef = new Audio(url);
        this.audioRef.addEventListener("canplaythrough", e => {
            if (this.audioRef) {
                this.audioRef.play();
            }
        });
        this.audioRef.addEventListener('ended', () => handleEnd());
    }

    play(url: string, handleEnd: () => void) {
        this.ensureSilence()
        this.createNewPlayback(url, handleEnd);
    }

    pause() {
        if (this.audioRef) {
            this.audioRef.pause();
        }
    }

}

const AudioPlayerInstance = AudioPlayer.getInstance();

export default AudioPlayerInstance;