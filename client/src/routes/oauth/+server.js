import { redirect } from "@sveltejs/kit";
import { OAuth2Client } from "google-auth-library";
import axios from 'axios';
import { handleTokens } from '../../lib/components/Header/Header.svelte';

const SECRET_CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
const SECRET_CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET;
const GF_API_KEY = import.meta.env.VITE_GF_API_KEY;
const GF_AFFILIATE_CODE = import.meta.env.VITE_GF_AFFILIATE_CODE;
const SEVER_URL = import.meta.env.VITE_SEVER_URL;

async function getUserData(access_token) {
  const response = await fetch(
    `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${access_token}`
  );
  // console.log("response", response);
  const data = await response.json();
  console.log("data", data);

  const res = await axios.post(SEVER_URL + '/api/account/sign-in', {
    email: "zz1212100@gmail.com",
    password: "287220793820437"
  }, {
    headers: {
      'GF-API-KEY': GF_API_KEY,
      'GF-AFFILIATE-CODE': GF_AFFILIATE_CODE,
      'Content-Type': 'application/json'
    },
    withCredentials: true
  });

  console.log('@@@', res.data)

  await handleTokens();
  
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
    // console.info("Tokens acquired.");
    const user = oAuth2Client.credentials;
    // console.log("credentials", user);

    await getUserData(user.access_token);
    console.log(user.access_token);
  } catch (err) {
    console.log("Error logging in with OAuth2 user", err);
  }
  throw redirect(303, "/");
};
