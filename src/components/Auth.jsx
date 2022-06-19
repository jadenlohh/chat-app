import React, { useState } from 'react'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const Auth = () => {
    const [user, setUser] = useState([])

    const signIn = () => {
        const provider = new GoogleAuthProvider()
        const auth = getAuth()
    
        signInWithPopup(auth, provider)
        .then(result => {
            setUser(result.user)
        })
    }

    return (
        <>
            <button onClick={signIn}>Sign in</button>
            {console.log(user.photoURL)}
        </>
    )
}

export default Auth