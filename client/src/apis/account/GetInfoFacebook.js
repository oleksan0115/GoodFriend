import axios from 'axios';
import { signIn } from './Signin';
import { getAccessToken } from './getAccessToken';

const GF_API_KEY = import.meta.env.VITE_GF_API_KEY;
const GF_AFFILIATE_CODE = import.meta.env.VITE_GF_AFFILIATE_CODE;
const SEVER_URL = import.meta.env.VITE_SEVER_URL;

export async function getInfoFacebook({code}) {
  try {
    const response = await fetch(
      `https://graph.facebook.com/oauth/access_token?code=${code}&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&client_secret=${CLIENT_SECRET_KEY}`
    );
    const data = await response.json();

    // console.log(data['access_token']);
    
    if (data["access_token"]) {
      const user_data = await fetch(
        `https://graph.facebook.com/v17.0/me?fields=id,name,email,first_name,last_name,picture&access_token=${data["access_token"]}`
      );
      const userinfo = await user_data.json();
      console.log("data", userinfo);
      return {
        success: true,
        data: userinfo
      }
    }

  } catch(err) {
    return {
      success: false,
      data: {
        'message': "Bad Internet Connection"
      }
    }
  }
}