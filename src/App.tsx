import { useState } from "react"


const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Bonjour, monde !</h1>
      <h2>Compteur partager</h2>
      <MyButton count={count} onClick={handleClick} />
      {/** C'est quand ont veux faire communiquer les hooks ensembles de maniere asynchrone */}
      <MyButton count={count} onClick={handleClick} />

    </div>
  )
}

export default App


function MyButton({count, onClick}: {count: number, onClick: () => void}) {
  return (
    <button onClick={onClick}>
      Clique {count} fois
    </button>
  )
}
