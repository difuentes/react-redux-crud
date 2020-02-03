import React, {useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';


//Actions de redux
import {crearNuevoProductoAction} from '../actions/productoActions';



const NuevoProducto = () =>
{

    //state del componente 
    const [nombre,guardarNombre] = useState('');
    const [precio,guardarPrecio] = useState(0);

    //utilizar use dispatch crea o devuleve funcion

    const dispatch = useDispatch();

    //acceder al state del store
    const cargando = useSelector( state => state.productos.loading );
    const error = useSelector(state => state.productos.error);

    //mandar a llamar el action de productoAction
    const agregarProducto = (producto) => dispatch( crearNuevoProductoAction(producto));

    //cuando usuario haga submit 
    const submitNuevoProducto = e => {
        e.preventDefault();

        //validar formulario

        if(nombre.trim ===''|| precio.trim <= 0) 
        {
            return;
        }


        //revisar errores

        //crear nuevo producto
        agregarProducto({nombre,precio});
    }


    return(

        <div className="row justify-content-center">
                <div className="col-md-8">
                     <div className="card">
                            <h2 className="text-center mb-4 font-weight-bold"> 
                                    Agregar nuevo Producto
                            </h2>

                            <form 
                            onSubmit={submitNuevoProducto}
                            >
                                <label>Nombre Producto :</label>
                                <div className="form-group">
                                    
                                    <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Producto"
                                    name="nombre"
                                    value={nombre}
                                    onChange ={e => guardarNombre(e.target.value)}
                                    />

                                </div>
                                <label>Precio Producto :</label>
                                <div className="form-group">

                                    <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Precio Producto"
                                    name="Precio"
                                    value={precio}
                                    onChange ={e => guardarPrecio(Number( e.target.value))}
                                    />

                                </div>

                                  <button
                                  type="submit"
                                  className="btn btn-block btn-primary text-uppercase font-weight-bold"
                                  >
                                     Agregar Producto
                                  </button>  

                            </form>
                            
                            {cargando ? <p className="alert alert-dismissible alert-success mt-4" >cargando...</p>:null}
                            {error ? <p className="alert alert-danger p2 mt-4">Hubo un error </p> :null}

                     </div>
                </div>
        </div>
        
    );


}





export default NuevoProducto;