import { Routes, Route, BrowserRouter } from "react-router-dom";
import PacienteTable from "../components/paciente/PacienteTable";
import {Paciente_form} from "../components/paciente/Paciente_form";
import { Navbar } from "../components/ui/navBar";
import { Sidebar } from "../components/ui/sideBar";
import { Principal } from "../components/principalpage/Principal";
import TipoOrdenTable from "../components/tipoorden/TipoOrdenTable";

import { Footer } from "../components/ui/footer";
export const AppRouter = () => {
    return (
        <div>
            <Navbar/>
            <Sidebar/>
            <div class="content-wrapper ">
            
                <div class="content-header">
                    <div class="container-fluid">
                        <div class="row mb-2">
                            <div class="col-sm-6"> 
                            </div> 
                            <div class="col-sm-6">
                                <ol class="breadcrumb float-sm-right"> 
                                </ol>
                            </div> 
                        </div> 
                    </div> 
                </div>
                
                <section class="content mt-5">

                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Principal />} />
                            <Route path="/paciente" element={<PacienteTable/>}/>
                            <Route path="/tipoorden" element={<TipoOrdenTable/>}/>
                            <Route path="/paciente_form" element={<Paciente_form/>}/>
                        </Routes>
                        
                    </BrowserRouter>

                </section >
            
            </div>
            <Footer/>
        </div>
    )
} 