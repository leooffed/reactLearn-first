import React, { useState } from 'react'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div>
      {
        isLoggedIn ? (
          <div>
            <h1>Welcome Back!</h1>
            <button onClick={() => setIsLoggedIn(false)}>Logout</button>
          </div>
        ) : (
          <div>
            <h1>Please Log In</h1>
            <button onClick={() => setIsLoggedIn(true)}>Login</button>
          </div>
        )
      }
    </div>
  )
}

export default App
