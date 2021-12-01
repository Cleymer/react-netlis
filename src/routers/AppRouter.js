import { Routes, Route, BrowserRouter } from "react-router-dom";
import PacienteTable from "../components/paciente/PacienteTable";
import {Paciente_form} from "../components/paciente/Paciente_form";
import { Navbar } from "../components/ui/navBar";
import { Sidebar } from "../components/ui/sideBar";
import { Principal } from "../components/principalpage/Principal";
import TipoOrdenTable from "../components/tipoorden/TipoOrdenTable";

export const AppRouter = () => {
    return (
        <div id="wrapper">
        <BrowserRouter>
        <Sidebar/>
        <div id="content-wrapper" class="d-flex flex-column mb-5"> 
        <div id="content mt-5">
            <Navbar/>
            <Routes>
                <Route path="/" element={<Principal />} />
                <Route path="/paciente" element={<PacienteTable/>}/>
                <Route path="/tipoorden" element={<TipoOrdenTable/>}/>
                <Route path="/paciente_form" element={<Paciente_form/>}/>
            </Routes>
            
            </div></div>
        </BrowserRouter>
        </div>
    );
} 