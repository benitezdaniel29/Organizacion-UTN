import Styles from "./producto.module.css"

function TableProducts() {
    const productos = [
    { id: 1, producto: "Teclado", cantidad: 5, precio: 25 },
    { id: 2, producto: "Mouse", cantidad: 10, precio: 15 },
    { id: 3, producto: "Monitor", cantidad: 3, precio: 180 },
  ];

  const eliminarProducto = (id) => {
    console.log("Eliminar:", id);
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
            <td>{item.producto}</td>
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
