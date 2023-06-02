interface IUser {
    name: boolean | string,
}

const user = {
    name: false
}

export const getAllLocalStorage = (): any | null  => {
    return {...localStorage}
}

export const getLocalStorage = (id: string): string | null => {
    return localStorage.getItem(id)
}

export const createLocalStorage = (): void => {
    localStorage.setItem('isLoggedIn', JSON.stringify(false))
}

export const changeLocalStorage = (item: string, setItem: any): void => {
    localStorage.setItem(item, JSON.stringify(setItem))
}

export const removeLocalStorage = (item: string): void => {
    localStorage.removeItem(item)
}