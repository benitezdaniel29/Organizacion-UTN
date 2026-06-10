import Fichero from "./fichero.module.css"

function AddProduct() {

function SendForm(e : React.ButtonHTMLAttributes<HTMLButtonElement>){
e.preventDefault()
}

  return (
    <div className={Fichero.box}>

        <h4>Añadir producto</h4>
    <div className={Fichero.campos}>
        <form action="submit">
<div className={Fichero.form}>
      <label htmlFor="id"> ID<input id="id" type="text" /> </label>
      <label htmlFor="nombre"> Nombre<input id="nombre" type="text" /> </label>
      <label htmlFor="cantidad"> Cantidad<input id="cantidad" type="number" /> </label>
      <label htmlFor="precio"> Precio<input id="precio" type="number" /> </label>
</div>
      <button onClick={(e)=>{
        SendForm(e)
      }} >Agregar</button>
        </form>
    </div>
    </div>
  )
}

export default AddProduct
