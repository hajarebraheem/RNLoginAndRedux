import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loggout } from '../actions'

export default function Logout() {
    const signUp = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const onLoggOut = () =>{
        dispatch(loggout())
    }

    return (
        <div>
                {signUp.value
                ?
                <button onClick={() => onLoggOut()}>Log Out</button>
                :
                ''
                }
        </div>
    )
}
