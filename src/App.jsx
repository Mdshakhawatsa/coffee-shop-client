import './App.css'
import AboutCoffee from './components/AboutCoffee'
import Contact from './components/Contact'
import Follow from './components/Follow'
import Hreo from './components/Hreo'
import Navbar from './components/Navbar'
import Product from './components/Product'

function App() {
  
  return (
    <div>
      <Navbar></Navbar>
      <Hreo/>
      <AboutCoffee/>
      <Product/>
      <Follow/>
      <Contact/>
    
    </div>
  )
}

export default App
