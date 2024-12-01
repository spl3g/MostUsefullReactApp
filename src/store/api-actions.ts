import { URLs } from "../const";
import axios from "axios";

export const getNewsListAction = async function () {
    let response = await axios.get(URLs.news);
    return await response.data;
};
