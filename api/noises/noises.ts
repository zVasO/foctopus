import {apiConfig} from "@/constants/Api/api";
import {StatusCodes} from "http-status-codes";
import {noiseType} from "@/types/api/noises/noises";

const getAllNoises = async (): Promise<noiseType[]> => {
    const response = await fetch(`${apiConfig.url}/noises`, {
        method: 'GET',
    })
    if (response.status === StatusCodes.OK) {
        const data = await response.json();
        return data?.noises as noiseType[];
    }
    return [] as noiseType[];
};

export const useNoises = () => {
    return {
        getAllNoises,
    };
};
