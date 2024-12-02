import { AUTH_TOKEN_KEY_NAME } from "../const";

export const getToken = (): string => {
    const token = localStorage.getItem(AUTH_TOKEN_KEY_NAME);
    return token ?? "";
};

export const saveToken = (token: string) => {
    localStorage.setItem(AUTH_TOKEN_KEY_NAME, token);
};

export const dropToken = () => {
    localStorage.removeItem(AUTH_TOKEN_KEY_NAME);
};
