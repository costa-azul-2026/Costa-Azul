
import "./CompanyLayout.css";
import { SideBar } from "./components/bars/SideBar";
import { TopBar } from "./components/bars/TopBar";
import { Outlet } from "react-router-dom";

export function CompanyLayout (){
    return (
        <div className="company-layout">
            <SideBar />

            <div className="company-layout__main">
                <TopBar />

                <main className="company-layout__content">
                    <Outlet /> {/* Outlet ele reserva um espaço para os componentes filhos */ }
                </main>
            </div>
        </div>
    );
}
