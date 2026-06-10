import AddProduct from "./addProduct/AddProduct"
import TableProduct from "./tableProducts/TableProducts"
import StyleHero from "./Hero.module.css"
function Hero() {
  return (
    <div className={StyleHero.hero}>
      <AddProduct />
      <TableProduct />
    </div>
  )
}

export default Hero
