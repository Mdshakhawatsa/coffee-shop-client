import './App.css'
import AboutCoffee from './components/AboutCoffee'
import Follow from './components/Follow'
import Navbar from './components/Navbar'
import Product from './components/Product'

function App() {
  
  return (
    <div>
      <Navbar></Navbar>
      <AboutCoffee/>
      <Product/>
      <Follow/>
    </div>
  )
}

export default App
