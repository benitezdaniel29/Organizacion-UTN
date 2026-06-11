import Styles from "./producto.module.css"
import { useContext } from "react";
import {ContextProduct} from "../../../context/ContextProduct";
function TableProducts() {
   
const context = useContext(ContextProduct)
if (!context) {
  throw new Error("ContextProduct debe usarse dentro del Provider");
}

const {productos, setProductos} = context

  const eliminarProducto = (id: number) => {
  setProductos((prev) => prev.filter((p) => p.id !== id));
};

  const modificarProducto = (id) => {
    console.log("Modificar:", id);
  };

  return (
  
    <div>
       <table className={Styles.table}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Producto</th>
          <th>Cantidad</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>

      <tbody>
        {productos.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.nombre}</td>
            <td>{item.cantidad}</td>
            <td>${item.precio}</td>
            <td className={Styles.actions}>
              <button
                className={`${Styles.btn} ${Styles.btnModificar}`}
                onClick={() => modificarProducto(item.id)}
              >
                Modificar
              </button>

              <button
                className={`${Styles.btn} ${Styles.btnEliminar}`}
                onClick={() => eliminarProducto(item.id)}
              >
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}

export default TableProducts
