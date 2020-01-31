import React from 'react';
import {Link} from 'react-router-dom';





const Header = () => {

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container"> 
                
                  <h1><Link to={'/'} className="text-light" >Mi Crud react con redux & rest api  </Link></h1>
                </div>

                <Link to={'/productos/nuevos'} className="btn btn-secondary nuevo-post d-block d-md-inline-block"  >Agregar Producto &#43; </Link>
        </nav>
    );

}

export default Header;