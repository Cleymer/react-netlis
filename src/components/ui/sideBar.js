import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Sidebar = () => {
    return ( 

        <aside class="main-sidebar sidebar-dark-primary elevation-4 ">
      
        <div class="sidebar"> 
            <div class="user-panel mt-5 pb-3 mb-3 d-flex">
              
            <div class="image">
            <img src="dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image"/>
            </div>
            <div class="info">
            <a href="#" class="d-block">Cristiano Ronaldo</a>
            </div>
             
            </div>
        
            <div class="form-inline">
                <div class="input-group" data-widget="sidebar-search">
                    <input class="form-control form-control-sidebar" type="search" placeholder="Buscar" aria-label="Search"/>
                    <div class="input-group-append">
                        <button class="btn btn-sidebar">
                        <i class="fas fa-search fa-fw"></i>
                        </button>
                    </div>
                </div>
            </div>

            <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                
                <li class="nav-item">
                <a href="#" class="nav-link">
                    <i class="nav-icon fas fa-chart-pie"></i>
                    <p>
                    Opciones del sistema
                    <i class="right fas fa-angle-left"></i>
                    </p>
                </a>
                <ul class="nav nav-treeview">
                    
                    <li class="nav-item">
                    <a href="/" class="nav-link">
                        <i class="far fa-circle nav-icon"></i>
                        <p>Inicio</p>
                    </a>
                    </li>



                    <li class="nav-item">
                    <a href="/paciente" class="nav-link">
                        <i class="far fa-circle nav-icon"></i>
                        <p>Paciente</p>
                    </a>
                    </li>

                    <li class="nav-item">
                    <a href="/tipoorden" class="nav-link">
                        <i class="far fa-circle nav-icon"></i>
                        <p>Tipo de orden</p>
                    </a>
                    </li>


                    <li class="nav-item">
                    <a href="/paciente_form" class="nav-link">
                        <i class="far fa-circle nav-icon"></i>
                        <p>Ingresar Paciente</p>
                    </a>
                    </li>
 




                </ul>
                </li>
                </ul>
            </nav> 
        </div> 
    </aside>
    )
}