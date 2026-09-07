export function TelaEsquerda() {
  return (
    <div
      style={{ backgroundImage: "url('/fundo.png')" }}
      className="relative h-screen w-full bg-cover bg-center"
    >
      {/* Overlay */}
      <div className=" absolute inset-0 w-full h-full bg-azul-secundario opacity-75" />

      {/* Conteúdo */}
        <div className="relative flex h-full flex-col items-center p-8">

          <div className="flex flex-col items-start">
            <img src="/Logo.png" alt="Logo Costa Azul" className="w-58 h-auto ml-[-8px] mb-2"/>

            <h1 className="text-navbar font-semibold text-white ml-23">
                ERP
            </h1>
  
</div>

        {/* Texto */}
        <div className="flex flex-1 flex-col items-center justify-center ">

      
          <p className=" text-center max-w-xs  text-white font-medium">
            Plataforma integrada para gestão de cruzeiros - embarcações,
            rotas, tripulação e operações em um só lugar.
          </p>
        </div>

        {/* Rodapé */}
        <div className=" text-rotulo absolute bottom-4 left-1/2 -translate-x-1/2  text-azul-claro font-extralight">
          <p>&copy; Costa Azul - Uso Interno</p>
        </div>

      </div>
    </div>
  );
}