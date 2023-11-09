import React from "react";
import MusicCard from "@/components/MusicCard";
import CardContainer from "@/components/CardContainer";
import NoiseCard from "@/components/NoiseCard";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex mb-12">
                <MusicCard name={"lofi"}/>
                <MusicCard name={"piano"}/>
                <MusicCard name={"piano"}/>
                <MusicCard name={"lofi"}/>

            </div>
            <CardContainer>
                <NoiseCard/>
                <NoiseCard/>
                <NoiseCard/>
                <NoiseCard/>

                <NoiseCard/>
                <NoiseCard/>
                <NoiseCard/>
                <NoiseCard/>

                <NoiseCard/>
                <NoiseCard/>
                <NoiseCard/>
                <NoiseCard/>
            </CardContainer>
        </main>

    )
}
