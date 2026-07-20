import React,{useState} from 'react'
import { useNavigate, Link } from 'react-router'
import { useAuth } from '../hooks/useAuth'

const Register = () => {

    const navigate = useNavigate()
    const [ username, setUsername ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ error, setError ] = useState("")

    const { loading, handleRegister } = useAuth()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        try {
            const data = await handleRegister({ username, email, password })
            if (data && data.user) {
                navigate('/')
            }
        } catch (err) {
            const message = err.response?.data?.message || "Something went wrong. Please try again."
            setError(message)
        }
    }

    return (
        <main>
            <header className="auth-nav">
                <Link to="/" className="brand-logo" title="LagwaDe Home">
                    <img src="/favicon-96x96.png" alt="LagwaDe Logo" className="brand-logo__img" />
                    <span className="brand-logo__name">LagwaDe</span>
                </Link>
            </header>
            <div className="form-container">
                <h1>Register</h1>
                <p className="auth-subtitle">Create your account</p>
                {error && (
                    <div className="form-error-banner" role="alert">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="12" y1="8" x2="12" y2="12" />
                            <line x1="12" y1="16" x2="12.01" y2="16" />
                        </svg>
                        <span>{error}</span>
                    </div>
                )}

                <form onSubmit={handleSubmit}>

                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input
                            value={username}
                            onChange={(e) => { setUsername(e.target.value); setError("") }}
                            type="text" id="username" name='username' placeholder='Enter username' />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            value={email}
                            onChange={(e) => { setEmail(e.target.value); setError("") }}
                            type="email" id="email" name='email' placeholder='Enter email address' />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            value={password}
                            onChange={(e) => { setPassword(e.target.value); setError("") }}
                            type="password" id="password" name='password' placeholder='Enter password' />
                    </div>

                    <button
                        className="button primary-button"
                        disabled={loading}
                    >
                        {loading ? (
                            <>
                                <span className="spinner"></span>
                                Registering...
                            </>
                        ) : (
                            "Register"
                        )}
                    </button>

                </form>
                {/* Link is used to create client-side navigation links between different routes without reloading the whole page */}
                <p>Already have an account? <Link to={"/login"} >Login</Link> </p>
            </div>
        </main>
    )
}

export default Register