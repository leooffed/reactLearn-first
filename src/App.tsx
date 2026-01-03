

const App = () => {
  function handleClick() {
    return alert('Button clicked!');
  }
  return (
    <div>
       <button onClick={handleClick}>
        Clique ici
       </button>
    </div>
  )
}

export default App
