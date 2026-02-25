import axios from "axios";
import type { LoginResponseDto } from "../dtos/LoginResponseDto";

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 3000,
});

// TODO: functional style rework with success of failure return
export async function getLoggedIn(): Promise<LoginResponseDto> {
    try {
        const response = await api.get<LoginResponseDto>("/api");
        return response.data;
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            console.error(error.response?.status)
        }
        throw error
    }
}