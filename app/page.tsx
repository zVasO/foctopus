import React from "react";
import SoundCard from "@/components/sounds/SoundCard";
import '../public/css/jtbIL.css'
import '../public/css/jtbI.css'
import '../public/css/jtbIB.css'
import {ThemeProvider} from "@mui/material";
import theme from "@/app/theme";
import PomodoroTimer from "@/components/PomodoroTimer";
import Noises from "@/components/noises/Noises";

export const metadata = {
    title: "Foctopus - homepage",
    description: "Foctopus is a web application who provide noise and music for focus.",
}

export default function Home() {
    return (
        <ThemeProvider theme={theme}>
            <PomodoroTimer/>
            <main className="flex min-h-screen flex-col items-center p-24">
                <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex mb-12">
                    <SoundCard name={"lofi"}/>
                    {/*<MusicCard name={"piano"}/>*/}
                    {/*<MusicCard name={"handpan"}/>*/}
                    {/*<MusicCard name={"jazz"}/>*/}

                </div>
                <Noises/>
            </main>
        </ThemeProvider>
    )
}
