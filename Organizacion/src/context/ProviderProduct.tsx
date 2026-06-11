import { useState, useEffect } from "react"
import  { ContextProduct} from "./ContextProduct"
import type {Producto} from "./ContextProduct"

const ProviderProduct = ({children}: {children: React.ReactNode}) => {

   const [productos, setProductos] = useState<Producto[]>(() => {
  const data = localStorage.getItem("productos");
  return data ? JSON.parse(data) : [];
});

  useEffect(() => {
    console.log("💾 guardando en localStorage:", productos);
    localStorage.setItem("productos", JSON.stringify(productos));
  }, [productos]);

  return (
    <ContextProduct.Provider
    value={{
        productos,
        setProductos
    }
    }>

      {children}
    </ContextProduct.Provider>
    
  )
}

export default ProviderProduct
