import { useContext, useEffect } from "react";
import { AuthContext } from "../auth.context";
import { login, register, logout, getMe } from "../services/auth.api";


export const useAuth = () => {

    const context = useContext(AuthContext)
    const { user, setUser, loading, setLoading } = context


    const handleLogin = async ({ email, password }) => {
        setLoading(true)
        try {
            const data = await login({ email, password })
            if (data && data.user) {
                setUser(data.user)
            }
            return data
        } catch (err) {
            throw err
        } finally {
            setLoading(false)
        }
    }

    const handleRegister = async ({ username, email, password }) => {
        setLoading(true)
        try {
            const data = await register({ username, email, password })
            if (data && data.user) {
                setUser(data.user)
            }
            return data
        } catch (err) {
            throw err
        } finally {
            setLoading(false)
        }
    }

    const handleLogout = async () => {
        setLoading(true)
        try {
            const data = await logout()
            setUser(null)
        } catch (err) {

        } finally {
            setLoading(false)
        }
    }


    //When you reload home page, the React application starts from scratch.
    //That means your context is recreated.
    //const[user, setUser] = useState(null); runs again.

    //So immediately after refresh: user = null and Because React state lives in memory. Refreshing the page clears all React state.
    //Even though Cookie still exists in the browser.
    //So Protected runs and it sees user as null therefore navigates to login page.
    //The backend never got a chance to check the cookie.The frontend simply assumed:"user is null, so the user must not be logged in." which was wrong.

    // To fix this, we call the getMe() API when the application loads. If a valid JWT cookie exists, the backend verifies it, fetches the user's details from the database, and we restore the user in the Auth Context using setUser(). While this authentication check is in progress, loading remains true (that is why we have set initial value of loading to true) so the Protected component displays a loader instead of incorrectly redirecting the user to the login page.

    useEffect(() => {
        //An async function is created because useEffect itself cannot be async.
        const getAndSetUser = async () => {
            try {
                const data = await getMe()
                setUser(data.user)
            } catch (err) { }
            finally {
                setLoading(false)
            }
        }

        getAndSetUser()

    }, [])//The empty dependency array ([]) means:Run this code only once, when the component mounts(loads for the first time).

    return { user, loading, handleRegister, handleLogin, handleLogout }
}