import { LaunchCasino } from '../../../../apis/casino/LaunchCasino'
import globalStore from "../../../../stores/globalStore";
import { getCasinoInfo } from "../../../../apis/casino/GetCasinoInfo";

/** @type {import('./$types').PageLoad} */
export const load = async ({params}) => {
    const {title, idx} = params
    // const nick = "user5931960781"
    const nick = globalStore.userDetail ? globalStore.userDetail.nick: null;
    const info = await getCasinoInfo(idx);
    const data = await LaunchCasino(idx, nick)
    return {
        link: data.link,
        title: info.title,
        type: info.type,
        idx        
    }
}