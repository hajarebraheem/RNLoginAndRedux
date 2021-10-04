export const signup = (name) =>{
    return {
        type: 'SIGN_UP',
        payload: name
    }
}

export const loggout = () =>{
    return {
        type: 'LOGOUT',
        payload: null
    }
}