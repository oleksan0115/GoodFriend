import axios from 'axios';

const GF_API_KEY = import.meta.env.VITE_GF_API_KEY;
const GF_AFFILIATE_CODE = import.meta.env.VITE_GF_AFFILIATE_CODE;
const SEVER_URL = import.meta.env.VITE_SEVER_URL;

export async function getCasinoInfo(idx) {
  const endPoint = SEVER_URL + '/api/casino/info'
  const data = {
    idx
  }
  const headers = {
    'GF-API-KEY': GF_API_KEY,
    'GF-AFFILIATE-CODE': GF_AFFILIATE_CODE,
    'Content-Type': 'application/json'
  }
  const options = {
    headers: headers,
    withCredentials: true
  }
  
  try {
    const res = await axios.post(endPoint, data, options);
    if(res.status == 200) {
      return res.data
    }
    
    if(err.response && err.response.request.status == 400) {
      return err.response.data
    }
  } catch (_) {
    return {
      data: {
        'message': "Bad Internet Connection"
      }
    }
  }
}