import { URLs } from "../const";
import axios, { AxiosResponse } from "axios";
import { News } from "../types/News";
import { Service } from "../types/Services";

type UserCreds = {
    username: string;
    password: string;
};

export type UserResp = {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
    accessToken: string;
    refreshToken: string;
};

export const getNewsListAction = async (): Promise<News[]> => {
    let response = await axios.get(URLs.news);
    return await response.data;
};

export const getServicesListAction = async (): Promise<Service[]> => {
    let response = await axios.get(URLs.services);
    return response.data;
};

export const getServiceAction = async (id: number): Promise<Service> => {
    let response = await axios.get(`${URLs.services}/${id}`);
    return response.data;
};

export const login = async function (
    user: UserCreds,
): Promise<AxiosResponse<UserResp>> {
    let response = await axios.post<UserCreds, AxiosResponse<UserResp>>(
        `${URLs.auth}/login`,
        user,
        {
            headers: { "Content-Type": "application/json" },
        },
    );
    return response;
};
