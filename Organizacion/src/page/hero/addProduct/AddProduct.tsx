import Style from "./fichero.module.css"
import type { Producto } from "../../../context/ContextProduct";
import { useContext } from "react";
import { ContextProduct } from "../../../context/ContextProduct";
function AddProduct() {


const context = useContext(ContextProduct)
if (!context) {
  throw new Error("ContextProduct debe usarse dentro del Provider");
}

const { setProductos} = context

function SendForm(event: React.FormEvent<HTMLFormElement> ){
  event.preventDefault()
  
  const data = new FormData(event.currentTarget);
  const nombre = String(data.get("nombre"));
 if (
  !data.get("ide") ||
  !nombre||
  !data.get("cantidad") ||
  !data.get("precio")
) {
  alert("ingrese los campos requeridos");
  return;
}
 if (/\d/.test(nombre)) {
    alert("El nombre no puede contener números");
    return;
  }
  const NuevoProducto: Producto = {
    id: Number(data.get("ide")),
    nombre: String(data.get("nombre")),
    cantidad: Number(data.get("cantidad")),
    precio: Number(data.get("precio")),
  };
  setProductos((prev) => [...prev, NuevoProducto]);
  event.currentTarget.reset()
  
 
}

  return (
    <div className={Style.box}>

        <h4>Añadir producto</h4>
    
      <form className={Style.formBody} onSubmit={SendForm} action="submit">
      <div className={Style.formLabel}>
      <label htmlFor="id">ID <input name="ide" id="id" type="number"  /> </label>
      <label htmlFor="nombre"> Nombre<input name="nombre" id="nombre" type="text"  /> </label>
      <label htmlFor="cantidad"> Cantidad<input name="cantidad" id="cantidad" type="number"  /> </label>
      <label htmlFor="precio"> Precio<input name="precio" id="precio" type="number"  /> </label>
      </div>
      <button className={Style.btn} type="submit" >Agregar</button>
      </form>
       
    </div>
  )
}

export default AddProduct
