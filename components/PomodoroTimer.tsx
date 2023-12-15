"use client";

import React, {useEffect, useState} from "react";

const PomodoroTimer = () => {
    const timerWorkingValue = 5; //25 * 60
    const timerSmallRestValue = 2; // 5 * 60
    const timerBigRestValue = 10; // 25 * 60

    const workCycle = "WORK"
    const restCycle = "REST"

    const workCycleCountDefault = 0;
    const requireBigRest = 3;

    const [workCycleCount, setWorkCycleCount] = useState(workCycleCountDefault)
    const [currentCycle, setCurrentCycle] = useState(workCycle)
    const [seconds, setSeconds] = useState(timerWorkingValue);
    const [isTimerRunning, setIsTimerRunning] = useState(false)

    useEffect(() => {
        let intervalId: NodeJS.Timeout | undefined;

        if (isTimerRunning) {
            intervalId = setInterval(() => {
                setSeconds((prevSeconds) => {
                    if (prevSeconds === 0) {
                        clearInterval(intervalId!);
                        setIsTimerRunning(false);
                        setNextCycle()
                        prepareNewTimer()
                    }
                    return prevSeconds - 1;
                });
            }, 1000);
        } else if (intervalId) {
            clearInterval(intervalId);
        }

        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [isTimerRunning]);

    const formatTimer = (value: string) => {
        // todo Implement your format logic if needed
    };

    const setNextCycle = () => {
        setCurrentCycle(currentCycle === workCycle ? restCycle : workCycle);
        setWorkCycleCount(currentCycle === workCycle ? workCycleCount + 1 : workCycleCount);
    };


    const prepareNewTimer = () => {
        if (currentCycle === workCycle) {
            setSeconds(timerWorkingValue)
        } else if (currentCycle === restCycle && workCycleCount === requireBigRest) {
            setSeconds(timerBigRestValue)
            resetWorkingCycleCount()
        } else {
            setSeconds(timerSmallRestValue)
        }
    }

    const resetWorkingCycleCount = () => {
        setWorkCycleCount(workCycleCountDefault);
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newTimerValue = event.target.value;
        formatTimer(newTimerValue);
    };

    const handleReset = () => {
        setIsTimerRunning(false);
        resetWorkingCycleCount()
        setCurrentCycle(workCycle)
        setSeconds(timerWorkingValue);
    };

    const handleTimerPause = () => {
        setIsTimerRunning(!isTimerRunning);
    }

    const secondsToTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
    };


    return (
        <div className={'flex justify-center mt-2.5 select-none'}>
            <div
                className={`border rounded-full h-12 w-56 flex justify-between items-center
                    ${isTimerRunning ? 'border-orange-500 text-orange-500' : 'border-green-500 text-green-500'}`}
            >
                <div className="ml-3 cursor-pointer" onClick={handleReset}>
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
                    className={`border-none outline-0 focus:border-none bg-black text-center w-32 text-2xl
                        ${isTimerRunning ? 'cursor-not-allowed' : ''}
                        `}
                    autoComplete="off"
                    value={secondsToTime(seconds)}
                    onChange={handleChange}
                    disabled={isTimerRunning}
                />
                <div className="mr-3 cursor-pointer" onClick={handleTimerPause}>
                    {isTimerRunning
                        ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                               stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5"/>
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"/>
                        </svg>
                    }</div>
            </div>
        </div>
    )
}

export default PomodoroTimer;
