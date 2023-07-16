/** @type {import('./$types').PageLoad} */
import { getCasinoList } from '../../apis/casino/GetCasinoList';

export async function load() {
    const casino = await getCasinoList(0, "");

    return {
        "casino": casino
    }
}