import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";

export function VesselCertification() {
    const status = [
        { label: "Ativo", value: "ATIVO" },
        { label: "Inativo", value: "INATIVO" },
        { label: "Em manutenção", value: "MANUTENCAO" },
    ];

    return (
        <Card className="vessel-card">
            <div className="section-title">
                <div className="section-icon">
                    <i className="pi pi-verified" />
                </div>

                <h2>Seção 4 - Certificações e Conformidade</h2>
            </div>

            <div className="vessel-fields-grid">

                <div className="form-field">
                    <label htmlFor="classificadora">
                        Classificadora Naval (IACS)
                    </label>

                    <InputText
                        id="classificadora"
                        placeholder="Inserir classificadora"
                        className="w-full"
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="ism">
                        Certificação Código ISM
                    </label>

                    <InputText
                        id="ism"
                        placeholder="Inserir certificação"
                        className="w-full"
                    />
                </div>

                <div className="form-field">
                    <label>
                        Status Operacional <span>*</span>
                    </label>

                    <Dropdown
                        options={status}
                        optionLabel="label"
                        optionValue="value"
                        placeholder="Selecionar status"
                        className="w-full"
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="validade">
                        Validade do certificado
                    </label>

                    <InputText
                        id="validade"
                        placeholder="Inserir validade"
                        className="w-full"
                    />
                </div>

            </div>
        </Card>
    );
}