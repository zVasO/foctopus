import {apiConfigType} from "@/types/api/ApiConfigType";

export const apiConfig: apiConfigType = {
    url: process.env.NEXT_PUBLIC_BACKEND_API_URL ?? '',
    user: process.env.NEXT_PUBLIC_API_USER ?? '',
    password: process.env.NEXT_PUBLIC_API_PASSWORD ?? '',
}
