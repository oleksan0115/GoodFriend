import axios from 'axios';

const GF_API_KEY = import.meta.env.VITE_GF_API_KEY;
const GF_AFFILIATE_CODE = import.meta.env.VITE_GF_AFFILIATE_CODE;
const SEVER_URL = import.meta.env.VITE_SEVER_URL;

export async function signUpEmail({email}) {
  try {
    const res = await axios.post(SEVER_URL + '/api/account/sign-up/email', {
      email
    }, {
      headers: {
        'GF-API-KEY': GF_API_KEY,
        'GF-AFFILIATE-CODE': GF_AFFILIATE_CODE,
        'Content-Type': 'application/json'
      }
    });
    if(res.status == 200) {
      return {
        success: true,
        data: res.data
      }
    }
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
        'message': "Bad Internet Connection"
      }
    }
  }
}