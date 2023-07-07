import axios from 'axios';

const GF_API_KEY = import.meta.env.VITE_GF_API_KEY;
const GF_AFFILIATE_CODE = import.meta.env.VITE_GF_AFFILIATE_CODE;
const SEVER_URL = import.meta.env.VITE_SEVER_URL;

export async function signIn({email, password}) {
  try {
    const res = await axios.post(SEVER_URL + '/api/account/sign-in', {
      email,
      password
    }, {
      headers: {
        'GF-API-KEY': GF_API_KEY,
        'GF-AFFILIATE-CODE': GF_AFFILIATE_CODE,
        'Content-Type': 'application/json'
      },
      withCredentials: true
    });

    if(res.status == 200) {
      return {
        success: true,
        data: res.data
      }
    }
    /// add more case here.
    return {
      success: false,
      data: "Sign in Failed"
    }
  } catch(err) {
    if(err.response && err.response.request.status == 400)
      return {
        success: false,
        data: err.response.data
      }
    return {
      success: false,
      data: {
        'message': err
      }
    }
  }
}