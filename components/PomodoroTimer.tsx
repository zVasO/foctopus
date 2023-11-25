"use client";

import React, {useState} from "react";

const PomodoroTimer = () => {
    const [timer, setTimer] = useState('25:00')
    const [isTimerRunning, setIsTimerRunning] = useState(false)


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newTimerValue = event.target.value;
        formatTimer(newTimerValue);
    };

    const handleTimerPause = () => {
        setIsTimerRunning(!isTimerRunning);
    }

    const formatTimer = (value: string) => {
        if (value.length === 2 && timer.length === 3) {
            value = value[0];
        } else if (value.length === 3 && timer.length === 2) {
            value = `${value.slice(0, 2)}:${value[2]}`;
        }

        setTimer(value);
    };


    return (
        <div className={'flex justify-center mt-2.5 select-none'}>
            <div
                className={`border rounded-full h-12 w-56 flex justify-between items-center 
                    ${isTimerRunning ? 'border-green-500 text-green-500' : 'border-red-500 text-red-500'}`}>
                <div className="ml-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"/>
                    </svg>
                </div>
                <input
                    type="text"
                    id="timerInput"
                    maxLength={5}
                    pattern="[0-9]*"
                    className={"border-none outline-0 focus:border-none bg-black text-center w-32 text-2xl"}
                    autoComplete="off"
                    value={timer}
                    onChange={handleChange}
                />
                <div className="mr-3" onClick={handleTimerPause}>
                    {isTimerRunning
                        ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                               stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"/>
                        </svg>
                        : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                               stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5"/>
                        </svg>

                    }</div>
            </div>
        </div>
    )
}

export default PomodoroTimer;
