import { redirect } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {
  return { url };
  throw redirect(303, "/");
};
