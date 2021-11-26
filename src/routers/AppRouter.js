import { Routes, Route, BrowserRouter } from "react-router-dom";
import PacienteTable from "../components/paciente/PacienteTable";
import { Navbar } from "../components/ui/navBar";
import { Principal } from "../components/principalpage/Principal";
import TipoOrdenTable from "../components/tipoorden/TipoOrdenTable";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Principal />} />
                <Route path="/paciente" element={<PacienteTable/>}/>
                <Route path="/tipoorden" element={<TipoOrdenTable/>}/>
            </Routes>
        </BrowserRouter>
    );
} 