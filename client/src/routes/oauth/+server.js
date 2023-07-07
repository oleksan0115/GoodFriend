import { redirect } from "@sveltejs/kit";
import { OAuth2Client } from "google-auth-library";
import { signUpSocial } from "../../apis/account/SignupSocial.js";
import { getAccessToken } from "../../apis/account/getAccessToken.js";
import { signIn } from '../../apis/account/Signin.js';

const SECRET_CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
const SECRET_CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET;

async function getUserData(access_token) {
  const response = await fetch(
    `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${access_token}`
  );

  const data = await response.json();
  return data;
}

export const GET = async ({ url }) => {
  const redirectURL = "http://localhost:10010/oauth";
  const code = await url.searchParams.get("code");
  
  try {
    const oAuth2Client = new OAuth2Client(
      SECRET_CLIENT_ID,
      SECRET_CLIENT_SECRET,
      redirectURL
    );
    const r = await oAuth2Client.getToken(code);
    oAuth2Client.setCredentials(r.tokens);
    const user = oAuth2Client.credentials;

    const data = await getUserData(user.access_token);
    const res = await signUpSocial({
      email: data.email,
      password: data.sub,
      loginType: 'google'
    });
    // if(res.success) {
      const res1 = await signIn({
        email: data.email,
        password: data.sub,
      });

      await getAccessToken();

    // }
    
  } catch (err) {
    console.log("Error logging in with OAuth2 user", err);
  }
  throw redirect(303, "/");
};
