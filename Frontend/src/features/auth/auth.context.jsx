import { createContext, useState } from "react";
// createContext - Creates a context object, which is used to pass data through the component tree without having to pass props down manually at every level (prop drilling). Prop drilling is the process of passing props through intermediate components that don't need them, just to make the data available to a deeply nested component.
// useState - Creates a state variable and a function to update its value

export const AuthContext = createContext()

//children is a special React prop that automatically contains whatever JSX is placed between a AuthProvider's opening and closing tags, allowing the AuthProvider to wrap and render that content.
export const AuthProvider = ({ children }) => { 

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // AuthProvider is sharing four values with all of its child components:
    // user → Current logged -in user.
    // setUser → Function to update the logged -in user.
    // loading → Indicates whether an authentication - related operation is in progress.
    // setLoading → Function to update the loading state.
    // So if your app is wrapped like this:
    //     < AuthProvider >
    //         <InterviewProvider>
    //             <RouterProvider router={router} />
    //         </InterviewProvider>
    //     </AuthProvider >
    // then any component inside < InterviewProvider >, no matter how deeply nested, can access all four values.
    
    return (
        <AuthContext.Provider value={{user,setUser,loading,setLoading}} >
            {children}
        </AuthContext.Provider>
    )

}