"use client"
import {useState} from "react";
import {Slider} from "@mui/material";
import SoundPlayer from "@/components/SoundPlayer";

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
                className={`flex items-center flex-col justify-center group rounded-lg border border-transparent mx-5 my-4 p-3 transition-colors w-32
                hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30
                ${isActive ? 'border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30' : ''}`}
            >
                <div className="hover:cursor-pointer flex items-center flex-col justify-center" onClick={toggleActive}>
                    <p className={`m-2 max-w-[30ch] text-sm opacity-50`}>
                        {name.toUpperCase()}
                    </p>
                    <i className={`${svgName} jtbI-4x`}></i>
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
            <SoundPlayer soundPath={`sounds/${name}.mp3`} isActive={isActive} volume={volume}/>
        </div>
    )
}
export default NoiseCard;
