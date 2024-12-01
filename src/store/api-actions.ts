import { URLs } from "../const";
import axios from "axios";
import { News } from "../types/News";

export const getNewsListAction = async (): Promise<News[]> => {
    let response = await axios.get(URLs.news);
    return await response.data;
};
