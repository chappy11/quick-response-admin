export enum KEY {
    ACCOUNT = 'account'
}


export const insertStorage = async <KEY, T>(key: KEY, data: T) => {
    try {
        const json = JSON.stringify(data);

        const resp = await window.localStorage.setItem(key as string, json);

        return resp;
    } catch (error) {

    }
}

export const getItemFromStorage = async (key: KEY) => {
    const resp = await window.localStorage.getItem(key as string);

    if (!resp) {
        return;
    }
    const convertedToObject = await JSON.parse(resp)

    return convertedToObject
}


export const getAccountFromStorage = async () => {
    const resp = await getItemFromStorage(KEY.ACCOUNT)

    return resp;
}