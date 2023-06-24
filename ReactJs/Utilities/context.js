/////// 1 this is hacked way. Create context folder and Authcontext module

import { createContext, useContext } from 'react'
//Below the actual context creation comming with react
export const AuthContext = createContext()
//Below is a module from where can call each function via the useAuthContext custom hook. Is is a wapper
export const AuthProvider = ({ children }) => {


    const onLogin = (e, userLogIn) => {
        e.preventDefault()
        console.log(`${userLogIn.email}  ${userLogIn.pass} `);
    }

    const contextValues = {
        onLogin
    }

    return (
        <>
            <AuthContext.Provider value={contextValues}>
                {children}
            </AuthContext.Provider>
        </>
    )
}
//Below is a custom hook to avoid let context =useContext() in each module
export const useAuthContext = () => {
    const context = useContext(AuthContext)

    return context
}

// 2 usage
import { useAuthContext } from '../../contexts/AuthContext'
const { onLogin } = useAuthContext()
