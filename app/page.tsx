import React from "react";
import '../public/css/jtbIL.css'
import '../public/css/jtbI.css'
import '../public/css/jtbIB.css'
import {ThemeProvider} from "@mui/material";
import theme from "@/app/theme";
import PomodoroTimer from "@/components/PomodoroTimer";
import Noises from "@/components/noises/Noises";
import Sounds from "@/components/sounds/Sounds";

export const metadata = {
    title: "Foctopus - homepage",
    description: "Foctopus is a web application who provide noise and music for focus.",
}

export default function Home() {
    return (
        <ThemeProvider theme={theme}>
            <PomodoroTimer/>
            <main className="flex min-h-screen flex-col items-center p-24">
                <Sounds/>
                <Noises/>
            </main>
        </ThemeProvider>
    )
}
