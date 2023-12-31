import React from "react";
import MusicCard from "@/components/MusicCard";
import CardContainer from "@/components/CardContainer";
import NoiseCard from "@/components/NoiseCard";
import '../public/css/jtbIL.css'
import '../public/css/jtbI.css'
import '../public/css/jtbIB.css'
import {ThemeProvider} from "@mui/material";
import theme from "@/app/theme";
import PomodoroTimer from "@/components/PomodoroTimer";

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
                    <MusicCard name={"lofi"}/>
                    {/*<MusicCard name={"piano"}/>*/}
                    {/*<MusicCard name={"handpan"}/>*/}
                    {/*<MusicCard name={"jazz"}/>*/}

                </div>
                <CardContainer>
                    <NoiseCard svgName={'jtbIL-cloud-hail-rain'} name={'rain'}/>
                    <NoiseCard svgName={'jtbIL-campfire'} name={'campfire'}/>
                    <NoiseCard svgName={'jtbIL-wind'} name={'wind'}/>
                    <NoiseCard svgName={'jtbIL-book'} name={'book page'}/>

                    <NoiseCard svgName={'jtbIL-cloud-bolt'} name={'thunder'}/>
                    <NoiseCard svgName={'jtbIL-flood'} name={'wave'}/>
                    <NoiseCard svgName={'jtbIL-typewriter'} name={'keyboard'}/>
                </CardContainer>
            </main>
        </ThemeProvider>
    )
}
