import axios from 'axios';
import { Module, LatestAd, Stats } from './apiTypes';
import { ERROR_MSG } from '../constants';

const INDEX_API_URL = process.env.REACT_APP_API_URL;

export const modulesApi = async (): Promise<Module[]> => {
    try {
        const response = await axios.get<Module[]>(`${INDEX_API_URL}/modules`);
        return response.data;
    } catch (error) {
        console.error(`${ERROR_MSG} modules: `, error);
        throw error;
    }
};

export const latestAdsApi = async (): Promise<LatestAd[]> => {
    try {
        const response = await axios.get<LatestAd[]>(`${INDEX_API_URL}/latestAds`);
        return response.data;
    } catch (error) {
        console.error(`${ERROR_MSG} latest ads: `, error);
        throw error;
    }
}

export const statsApi = async (): Promise<Stats> => {
    try {
        const response = await axios.get<Stats>(`${INDEX_API_URL}/stats`);
        return response.data;
    } catch (error) {
        console.error(`${ERROR_MSG} fetch stats: `, error);
        throw error;
    }
}
