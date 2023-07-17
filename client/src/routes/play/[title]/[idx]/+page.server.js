import { LaunchCasino } from '../../../../apis/casino/LaunchCasino'
import globalStore from "../../../../stores/globalStore";

/** @type {import('./$types').PageLoad} */

export const load = async ({params}) => {
    const {idx} = params
    const nick = "user5931960781"

    const data = await LaunchCasino(idx, nick)

    return {
        link: data.link
    }
}