"use client"
import {useState} from "react";
import {Slider} from "@mui/material";
import MusicPlayer from "@/components/MusicPlayer";

interface NoiseCardProps {
    name: string
    svgName?: string
}

const NoiseCard = ({name, svgName}: NoiseCardProps) => {
    const [isActive, setIsActive] = useState(false)
    const [volume, setVolume] = useState(50)

    const toggleActive = () => {
        setIsActive(!isActive)
    }

    return (
        <div className={"flex justify-center"}>
            <div
                className={`flex items-center flex-col justify-center group rounded-lg border border-transparent mx-5 my-4 p-3 transition-colors w-32`}
            >
                <div className="hover:cursor-pointer flex items-center flex-col justify-center" onClick={toggleActive}>
                    <p className={`m-2 max-w-[30ch] text-sm opacity-50`}>
                        {name.toUpperCase()}
                    </p>
                    <i className={`${svgName} jtbI-4x ${isActive ? 'opacity-100' : 'opacity-50'} hover:opacity-100 transition ease-in-out duration-300`}></i>
                </div>

                <div className={'w-full min-h-[2.25rem]'}>
                    {isActive && <Slider
                        size="small"
                        defaultValue={50}
                        aria-label="Small"
                        valueLabelDisplay="auto"
                        color="secondary"
                        onChange={(event) => {
                            const target = event.target as HTMLInputElement;
                            const newVolume = parseFloat(target.value);

                            if (!isNaN(newVolume)) {
                                setVolume(newVolume);
                            } else {
                                console.error('Invalid volume value:', target.value);
                            }
                        }}
                    />}
                </div>
            </div>
            <MusicPlayer soundPath={`sounds/${name}.mp3`} isActive={isActive} volume={volume}/>
        </div>
    )
}
export default NoiseCard;
