import React from 'react';


const EditarProducto = () =>
{
    return(
        <div className="row justify-content-center">
        <div className="col-md-8">
             <div className="card">
                    <h2 className="text-center mb-4 font-weight-bold"> 
                           Editar Producto
                    </h2>

                    <form>
                        <label>Nombre Producto :</label>
                        <div className="form-group">
                            
                            <input
                            type="text"
                            className="form-control"
                            placeholder="Nombre Producto"
                            name="nombre"
                            />

                        </div>
                        <label>Precio Producto :</label>
                        <div className="form-group">

                            <input
                            type="number"
                            className="form-control"
                            placeholder="Precio Producto"
                            name="Precio"
                            />

                        </div>

                          <button
                          type="submit"
                          className="btn btn-block btn-primary text-uppercase font-weight-bold"
                          >
                            Guardar
                          </button>  

                    </form>

             </div>
        </div>
</div>
    );


}





export default EditarProducto;