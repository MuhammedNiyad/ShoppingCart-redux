import { Container } from "react-bootstrap"
import { Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { ShoppingCart } from "./components/ShoppingCart"
import { About } from "./pages/About"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { RootState } from "./app/store"
import { useSelector } from "react-redux"

function App() {
  const { isOpen } = useSelector((state: RootState) => state.cart)
  console.log(isOpen);
  
  return (
    <>
      <Navbar />
      <ShoppingCart isOpen={isOpen} />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>

    </>

  )
}

export default App
