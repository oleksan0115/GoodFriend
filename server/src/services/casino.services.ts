import axios from 'axios';
import { MyInfo } from '../types/casino.types';

export const getMyInfo = (): Promise<MyInfo> => {
    const endpoint: string = 'https://api.honorlink.org/api/my-info';
    const apiKey: string = process.env.HONORLINK_API_KEY!;
    
    const headers = {
        Authorization: `Bearer ${apiKey}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
    };

    return new Promise((resolve, reject) => {
        axios.get(endpoint, {headers})
            .then(response => {resolve(response.data)})
            .catch(error => {reject(error)})
    })
}

export const getGameList = (): Promise<any> => {
    const endpoint: string = 'https://api.honorlink.org/api/game-list';
    const apiKey: string = process.env.HONORLINK_API_KEY!;
    
    const headers = {
        Authorization: `Bearer ${apiKey}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
    };

    return new Promise((resolve, reject) => {
        axios.get(endpoint, {headers})
            .then(response => {resolve(response.data)})
            .catch(error => {reject(error)})
    })
}