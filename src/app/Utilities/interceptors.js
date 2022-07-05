import axios from 'axios';
import {store} from '../redux/store';
import * as Urls from '../redux/serviceUrls';
export const requestInterceptor = (config) => {
    const token = store.getState().token;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}
export const errorInterceptor = (error) => {
    const status = error.response.status;
    if (status === 400 && error.response.data.error?.errorList) {
        const errorMessages = error.response.data.error.errorList.map((item) => item.errorDescription);
        const result = errorMessages.join(" </br>");
        return { data: result };
    } else if (status !== 401) {
        return new Promise((resolve, reject) => {
            reject(error);
        });
    }
    store.dispatch({
        type: "FULL_SCREEN_LOADER",
        payload: true
    });
    const originalRequest = error.config;
    const RefreshToken = store.getState().refreshToken;
    const token = store.getState().token;
    originalRequest._retry = true;
    if(!token || !RefreshToken){
        return new Promise((resolve, reject) => {
            reject(error);
        });
    }
    return axios.post(Urls.refreshToken, {}, {
            headers: {
                Authorization: `Bearer ${token}`,
                RefreshToken: RefreshToken
            }
        })
        .then(({
            data
        }) => {
            store.dispatch({
                type: "FULL_SCREEN_LOADER",
                payload: false
            });
            if (data.isSuccess) {
                store.dispatch({
                    type: 'REFRESH_TOKEN',
                    token: data.token,
                    refreshToken: data.refreshToken
                })
                originalRequest.headers['Authorization'] = `Bearer ${data.token}`;
                return axios(originalRequest);
            } else {
                store.dispatch({
                    type: "AUTH_TOKEN_FAILED",
                    tokenFailed: true
                });
                return
            }
        }).catch(error => {
            store.dispatch({
                type: "AUTH_TOKEN_FAILED",
                tokenFailed: true
            });
            return
        });
}
export const responseInterceptor = (response) => {
    if (response.data.success?.successCode === '200') {
        return response.data.success;
    } else {
        return response;
    }
}