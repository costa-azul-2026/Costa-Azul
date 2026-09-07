import { useState } from "react";

export function FormularioLogin() {
    const [perfil, setPerfil] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');

    function handleLogin(){
        if(!perfil){
            setErro('Por favor, selecione um perfil.');
            return;
        }

        else if(!email || !senha){
            setErro('Por favor, preencha todos os campos.');
            return;
        }

        else if(!email.includes('@') || !email.includes('.')){
            setErro('Por favor, insira um email válido.');
            return;
        }

        else{
            setErro('');
        }
        
    }

    return(

            <div className="flex flex-col items-center justify-center h-screen">

                {/* Caixa do formulario */}
                <div className=" w-105 min-h-135 flex flex-col items-center rounded-2xl border border-gray-300 shadow-md p-8">


                    {/* Titulo */}
                        <h1 className="text-titulo-pequeno font-bold justify-start ">Acesso ao sistema</h1>

                        <p className=" text-legenda text-center text-gray-600 ">
                            Selecione seu perfil de gestão e insira suas credenciais </p>


                        <p className="self-start  text-legenda mt-18 mb-2 ">
                            Escolha seu perfil de acesso<span className="text-red-500">*</span> </p>

                    {/* Caixa dos botoes */}

                <div className="flex flex-row gap-4 mt-2 w-full justify-center">

                        <button  onClick={() => setPerfil('Companhia')} className={perfil === 'Companhia' 
                            ? 'bg-azul-secundario text-white font-semibold py-2 px-4 rounded-lg hover:bg-azul-escuro transition-colors duration-300 w-36'
                            : 'bg-branco  text-azul-secundario font-semibold py-2 px-4 rounded-lg hover:bg-azul-claro transition-colors duration-300    border-3 border-azul-secundario w-36'}> Companhia </button>

                        <button onClick={() => setPerfil('Tripulante')} className={perfil === 'Tripulante' 
                            ? 'bg-azul-secundario text-white font-semibold py-2 px-4 rounded-lg hover:bg-azul-escuro transition-colors duration-300 w-36'
                            : 'bg-branco  text-azul-secundario font-semibold py-2 px-4 rounded-lg hover:bg-azul-claro transition-colors duration-300    border-3 border-azul-secundario w-36'}> Tripulante </button>
                </div>

                     {/* Inputs */}
                <div className="flex flex-col gap-4 mt-4 w-full">   
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-legenda mb-1">Email<span className="text-red-500">*</span></label>
                        <input type="email" id="email" placeholder="nome.sobrenome@email.corporativo.com" className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-azul-secundario" value={email} onChange={(e) => setEmail(e.target.value)} 
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="password" className="text-legenda mb-1">Senha<span className="text-red-500">*</span></label>
                        <input type="password" id="password" placeholder="Digite sua senha" className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-azul-secundario" value={senha} onChange={(e) => setSenha(e.target.value)} />
                    </div>


                     {/* Ancora */}
                    <a href="#" className="text-blue-400 hover:underline self-end text-rotulo text-bold"> Esqueceu sua senha? </a>
                </div>

                 {/* Entrar */}

                <div className="flex flex-col gap-4 mt-6 w-full">
                    <button className="bg-azul-secundario text-white font-semibold py-2 px-4 rounded-lg hover:bg-azul-primario transition-colors duration-300" onClick={handleLogin}>Entrar</button>
                </div>

                {/* Mensagem de erro */}
                {erro && <p className="text-red-500 text-sm mt-2">{erro}</p>}

                </div>


    
</div>
    
);

}