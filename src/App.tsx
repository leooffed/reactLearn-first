import React from 'react'

const App = () => {
  const user = {
    name: 'John Doe',
    imageUrl: 'https://i.imgur.com/MK3eW3As.jpg',
    imageSize: 90,
  }
  return (
    <div>
      <h1>{user.name}</h1>
      <img 
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </div>
  )
}

export default App
