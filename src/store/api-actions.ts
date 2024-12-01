import { URLs } from "../const";
import axios from "axios";
import { News } from "../types/News";
import { Service } from "../types/Services";

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
