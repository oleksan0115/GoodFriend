import { redirect } from "@sveltejs/kit";
import { OAuth2Client } from "google-auth-library";

const SECRET_CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
const SECRET_CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET;

export const actions = {
  OAuth2: async ({}) => {
    const redirectURL = "http://localhost:10010/oauth";

    const oAuth2Client = new OAuth2Client(
      SECRET_CLIENT_ID,
      SECRET_CLIENT_SECRET,
      redirectURL
    );

    // Generate the url that will be used for the consent dialog.
    const authorizeUrl = oAuth2Client.generateAuthUrl({
      access_type: "offline",
      scope: "https://www.googleapis.com/auth/userinfo.profile  openid email",
      prompt: "consent",
    });

    throw redirect(302, authorizeUrl);
  },
};
