import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Paciente_form = () => {
    return ( 

        <div class="container mt-5  ">
        <div class="card shadow mb-4  ">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Pacientes</h6>
        </div>
        <div class="card-body mb-5">

       <form className="row container">

           <label class="card-text">Nombre </label> <input className="form-control " type="text"/>
       </form>
            
        </div>
        <div class="card-footer"></div>
    </div>
    </div>
 
    )
}