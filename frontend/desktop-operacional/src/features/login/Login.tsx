import { FormularioLogin } from "./components/FormularioLogin";
import { TelaEsquerda } from "./components/TelaEsquerda";

export function Login(){

    return(

        <>

            <div className="grid grid-cols-3 h-screen w-screen">

                <div className="grid col-span-1"> <TelaEsquerda/> </div>
                <div className="grid col-span-2"> <FormularioLogin/> </div>

            </div>
        
        </>
    );
}