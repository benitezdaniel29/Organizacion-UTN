import { createContext } from "react";
export interface Producto {
  id: number;
  nombre: string;
  cantidad: number;
  precio: number
}

type ContextType = {
 productos: Producto[];
 setProductos: React.Dispatch<React.SetStateAction<Producto[]>>
}
export const ContextProduct = createContext<ContextType | null>(null);