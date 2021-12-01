import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow ">
            
           

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/login"
                    >
                        Cerrar Sesión
                    </NavLink>
                </ul>
            </div>
        </nav> 
    )
}