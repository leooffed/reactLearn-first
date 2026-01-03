

const App = () => {
  const products = [
    {title: "Chou", id: 1},
    {title: "Ail", id: 2},
    {title: "Legume", id: 3},
  ]
  const listItems = products.map((product) => (
    <li key={product.id}>
      {product.title}
    </li>
  ))
  return (
    <div>
       <ul>
        {listItems}
       </ul>
    </div>
  )
}

export default App
