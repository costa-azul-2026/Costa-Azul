import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";

interface VesselOperationalProps {
    idHomePort: string | null;
    setIdHomePort: (value: string | null) => void;

    mainTerminal: string;
    setMainTerminal: (value: string) => void;

    idManager: string | null;
    setIdManager: (value: string | null) => void;

    operationalEmail: string;
    setOperationalEmail: (value: string) => void;
}

export function VesselOperational({
    idHomePort,
    setIdHomePort,
    mainTerminal,
    setMainTerminal,
    idManager,
    setIdManager,
    operationalEmail,
    setOperationalEmail
}: VesselOperationalProps) {

    return (

        <section className="vessel-section">
        <Card className="vessel-card">
            <div className="section-title">
                <div className="section-icon">
                    <i className="pi pi-building" />
                </div>

                <h2>Seção 5 - Base Operacional & Gestão</h2>
            </div>

            <div className="vessel-fields-grid">

                <div className="form-field">
                    <label htmlFor="porto-base">
                        Porto Base
                    </label>

                    <InputText
                        id="porto-base"
                        placeholder="Inserir porto"
                        className="w-full"
                        disabled 
                        value={idHomePort}
                        onChange={(e) => setIdHomePort(e.target.value)}
                    />
                </div>
                    

                <div className="form-field">
                    <label htmlFor="terminal">
                        Terminal / Berço principal
                    </label>

                    <InputText
                        id="terminal"
                        placeholder="Inserir terminal"
                        className="w-full"
                        value={mainTerminal}
                        onChange={(e) => setMainTerminal(e.target.value)}
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="gerente">
                        Gerente da Embarcação
                    </label>

                    <InputText
                        id="gerente"
                        placeholder="Inserir gerente"
                        className="w-full"
                        value={idManager}
                        onChange={(e) => setIdManager(e.target.value)}
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="email-operacional">
                        Email Operacional
                    </label>

                    <InputText
                        id="email-operacional"
                        type="email"
                        placeholder="Inserir email"
                        className="w-full"
                        value={operationalEmail}
                        onChange={(e) => setOperationalEmail(e.target.value)}
                    />
                </div>

            </div>
        </Card>

        </section>
    );
}