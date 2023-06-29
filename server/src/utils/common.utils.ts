/** create random code /2023-06-28/jino*/
const generateRandomCode = (length: number): string =>  {
    let result :string             = '';
    const characters :string       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const charactersLength :number = characters.length;

    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

export {generateRandomCode}