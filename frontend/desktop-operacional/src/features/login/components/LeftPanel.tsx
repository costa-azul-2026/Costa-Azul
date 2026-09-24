import "./LeftPanel.css";

export function LeftPanel() {
    return (
        <div
            className="left-panel"
            style={{ backgroundImage: "url('/fundo.png')" }}
        >
            {/* Overlay */}
            <div className="left-panel__overlay" />

            {/* Conteúdo */}
            <div className="left-panel__content">

                {/* Logo */}
                <div className="left-panel__brand">
                    <img src="/Logo.png" alt="Logo Costa Azul"/>

                    <h1>ERP</h1>
                </div>

                {/* Texto */}
                <div className="left-panel__description">
                    <p>
                        Plataforma integrada para gestão de cruzeiros -
                        embarcações, rotas, tripulação e operações em um só lugar.
                    </p>
                </div>

                {/* Rodapé */}
                <div className="left-panel__footer">
                    <p>&copy; Costa Azul - Uso Interno</p>
                </div>

            </div>
        </div>
    );
}