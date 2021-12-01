import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Sidebar = () => {
    return ( 

        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
 
            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                
                <div class="sidebar-brand-text mx-3">Grupo fifas</div>
            </a>
  
 
            <hr class="sidebar-divider my-0"/>
            <div class="nav-item active">
            <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/"
                    >
                        Inicio
                    </NavLink>
            </div>
            
            <hr class="sidebar-divider my-0"/>
            <div class="nav-item active">
            <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/paciente"
                    >
                        Paciente
                    </NavLink>
            </div>

            <hr class="sidebar-divider my-0"/>
            <div class="nav-item active">
            <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/tipoorden"
                    >
                        Tipo Orden
                    </NavLink>
            </div>

            <hr class="sidebar-divider my-0"/>
        </ul>
    )
}