"use client";

import Image from "next/image";
import MusicPlayer from "@/components/MusicPlayer";
import {useState} from "react";

interface NoiseCardProps {
    name: string
}

const SoundCard = ({name}: NoiseCardProps) => {
    const [isActive, setIsActive] = useState(false)
    const [volume, setVolume] = useState(50)

    const toggleActive = () => {
        setIsActive(!isActive)
    }

    return (
        <div
            className={`h-56 w-56 flex flex-col justify-between group rounded-lg border border-transparent px-5 py-4 
            transition-colors`}
            onClick={toggleActive}
        >
            <div style={{position: 'relative', width: '180px', height: '180px'}}>
                <Image
                    className={`${isActive ? 'opacity-100' : 'opacity-50'} hover:opacity-100 transition ease-in-out duration-300`}
                    src={`/images/${name}.png`}
                    fill={true}
                    alt="The lofi music logo"
                    style={{
                        objectFit: 'contain',
                    }}
                />
            </div>
            <p className={`mt-2 max-w-[30ch] text-sm opacity-50 text-center`}>
                {name.toUpperCase()}
            </p>
            <MusicPlayer soundPath={`musics/${name}.mp3`} isActive={isActive} volume={volume}/>
        </div>
    )
}

export default SoundCard;
