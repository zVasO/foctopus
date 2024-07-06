"use client";

import {useNoises} from "@/api/noises/noises";
import {useEffect, useState} from "react";
import {noiseType} from "@/types/api/noises/noises";
import NoisesCardContainer from "@/components/noises/NoisesCardContainer";
import NoiseCard from "@/components/noises/NoiseCard";

const Noises = () => {
    const {getAllNoises} = useNoises();
    const [noises, setNoises] = useState<noiseType[]>([]);

    useEffect(() => {
        const fetchNoises = async () => {
            const noisesData = await getAllNoises();
            console.log('Fetched noises: ', noisesData);
            setNoises(noisesData);
        };

        fetchNoises();
    }, []);

    return (
        <div>
            <NoisesCardContainer>
                {Array.isArray(noises) && noises.map((noise, index) => (
                    <NoiseCard svgName={'jtbIL-cloud-hail-rain'} name={'rain'} key={index}/>
                ))}
            </NoisesCardContainer>
        </div>
    )
}

export default Noises;
