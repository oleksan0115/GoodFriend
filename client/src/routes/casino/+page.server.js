/** @type {import('./$types').PageLoad} */

export async function load({url}) {
    const data = Object.fromEntries(
    	new URLSearchParams(url.toJSON().split("?")[1])
    );
	return data;
}