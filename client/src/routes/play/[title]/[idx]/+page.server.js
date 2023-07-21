
import globalStore from "../../../../stores/globalStore";
import { getCasinoInfo } from "../../../../apis/casino/GetCasinoInfo";

/** @type {import('./$types').PageLoad} */
export const load = async ({params}) => {
    const {title, idx} = params
    // const nick = "user5931960781"
    // const nick = globalStore.userDetail ? globalStore.userDetail.nick: null;
    // const data = await LaunchCasino(idx, nick)
    const info = await getCasinoInfo(idx);
    return {
        title: info.title,
        type: info.type,
        idx        
    }
}