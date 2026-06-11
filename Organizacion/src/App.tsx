
import './App.css'
import Header from "./page/Header"
import Hero from "./page/hero/Hero"
import  ProviderProduct from './context/ProviderProduct.tsx'

function App() {
        
  return (
 
<>
 <ProviderProduct>
      <Header />
      <Hero/>
 </ProviderProduct>

    </>
  )
}

export default App
