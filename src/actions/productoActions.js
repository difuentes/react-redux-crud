import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
}
from '../types/idex'


//importar cliente axios 

import clienteAxios from '../config/axios';


//funcion crear nuevos productos
export function crearNuevoProductoAction(producto)
{
    return  async (dispatch) =>
    {
        
       dispatch(agregarProducto());

       try{
        //insertar en api o BD
        await clienteAxios.post('/productos',producto);

        //si todo sale bien , actualizar state
       
        dispatch(agregarProductoExito(producto));

       }catch(error)
       {
        console.log(error)
        //si hay un erro cambiarl state
        dispatch(agregarProductoError(true));
       }
       
    }
} 


//agregar Producto
const agregarProducto = () =>(
    {
        type : AGREGAR_PRODUCTO,
        payload : true
        
    }
)

//si el producto se guarda en la base de datos

const agregarProductoExito = producto =>({

    type :AGREGAR_PRODUCTO_EXITO,
    payload : producto
})

//si hubo un error

const agregarProductoError = estado =>({

    type :AGREGAR_PRODUCTO_ERROR,
    payload : estado
})