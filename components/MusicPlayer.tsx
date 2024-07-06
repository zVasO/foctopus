import {useEffect, useRef, useState} from "react";
import {Howl} from 'howler';

interface SoundPlayerProps {
    soundPath: string;
    isActive: boolean;
    volume?: number;
}

const MusicPlayer = ({soundPath, isActive, volume}: SoundPlayerProps) => {
    const soundRef = useRef<Howl | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (!soundPath) {
            console.error('No sound path provided.');
            return;
        }

        if (!soundRef.current) {
            soundRef.current = new Howl({
                src: [soundPath],
                volume: 0.5,
                loop: true,
                html5: true
            });
        }

        const sound = soundRef.current;

        if (volume !== undefined) {
            const adjustedVolume = Math.max(0, Math.min(volume / 100, 1));
            sound.volume(adjustedVolume);
        }

        if (isActive && !isPlaying) {
            sound.play();
            setIsPlaying(true);
        } else if (!isActive && isPlaying) {
            sound.stop();
            setIsPlaying(false);
        }

        return () => {
            // Do not unload the sound to keep it persistent
        };
    }, [soundPath, isActive, volume, isPlaying]);

    return null;
};

export default MusicPlayer;
