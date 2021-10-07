export const login = (name) =>{
    return {
        type: 'LOGIN',
        payload: name
    }
}

export const loggout = () =>{
    return {
        type: 'LOGOUT',
        payload: null
    }
}
export const typed = (string) =>{
    return {
        type: 'TYPED',
        payload: string
    }
}