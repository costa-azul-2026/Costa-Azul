import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";

export function VesselOperational() {
    return (
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
                    />
                </div>

            </div>
        </Card>
    );
}