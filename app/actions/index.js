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