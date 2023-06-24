import Header from './components/Header'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import Footer from './components/Footer'
import { useState } from 'react'

function App() {
  const [viewCart, setViewCart] = useState(false)

  const pageContent = viewCart ? <Cart /> : <ProductList />

  const content = (
    <>
      <Header
        viewCart={viewCart}
        setViewCart={setViewCart}
      />
      {pageContent}
      <Footer viewCart={viewCart} />
    </>
  )
  return content
}

export default App
