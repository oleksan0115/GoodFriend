import axios from 'axios';
import { signIn } from './Signin';
import { getAccessToken } from './GetAccessToken';
import { signupSocial } from './SignupSocial';

const GF_API_KEY = import.meta.env.VITE_GF_API_KEY;
const GF_AFFILIATE_CODE = import.meta.env.VITE_GF_AFFILIATE_CODE;
const SEVER_URL = import.meta.env.VITE_SEVER_URL;

export async function signupGoogle({email, password, loginType}) {
		const res = await signupSocial({email, password, loginType});

		const res1 = await signIn({
			email, password
		});

		const res2 = await getAccessToken();
		console.log('@@@@', res2)
    if(res2.status == 200) {
      return {
        success: true,
        data: res.data
      }
    }
    return {
      success: false,
      data: "Sign in Failed"
    }
  // } catch(err) {
	// 	console.log('$$$', err)
  //   if(err.response && err.response.request.status == 400)
  //     return {
  //       success: false,
  //       data: err.response.data
  //     }
  //   return {
  //     success: false,
  //     data: {
  //       'message': "Bad Internet Connection"
  //     }
  //   }
  // }
}