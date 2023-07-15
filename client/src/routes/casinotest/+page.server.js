/** @type {import('./$types').PageLoad} */
export const load = async () => {
    const casinoLinkRes = await fetch('https://api.honorlink.org/api/game-launch-link?username=user6903544637&nickname=user6903544637&game_id=204&vendor=Booongo', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer q7Eh8nvLDivhwGpdjaefJ1U4t0eN31Z2OG6yL3N9',
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    }) 
    const casinoLinkData = await casinoLinkRes.json()
    const casinoLink = casinoLinkData.link

    return {
        casinoLink: casinoLink,
    }
}