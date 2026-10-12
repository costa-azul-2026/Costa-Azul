import { Breadcrumb } from "../../components/Breadcrumb";

export function VesselCreate(){
    return(
        <>
        <main>

            <Breadcrumb items={[
                {
                label: "Frotas e viagens",
                to: "/vessel/create"
                },
                {
                label: "Cadastro de embarcação"
                }
            ]}></Breadcrumb>
            
    </main>
        </>
    )
}