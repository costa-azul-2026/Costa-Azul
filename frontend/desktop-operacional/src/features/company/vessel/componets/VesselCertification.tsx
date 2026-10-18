import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";


interface VesselCertificationProps {
    classificationSociety: string;
    setClassificationSociety: (value: string) => void;

    ismCertification: string;
    setIsmCertification: (value: string) => void;

    certificateExpiryDate: string;
    setCertificateExpiryDate: (value: string) => void;

    operationalStatus: string;
    setOperationalStatus: (value: string) => void;
}

export function VesselCertification({
    classificationSociety,
    setClassificationSociety,
    ismCertification,
    setIsmCertification,
    certificateExpiryDate,
    setCertificateExpiryDate,
    operationalStatus,
    setOperationalStatus
}: VesselCertificationProps) {
     

    const status = [
    { label: "Ativo", value: "ACTIVE" },
    { label: "Inativo", value: "INACTIVE" },
    { label: "Em manutenção", value: "MAINTENANCE" },
];

    return (
        <section className="vessel-section">
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
                        value={classificationSociety}
                        onChange={(e) => setClassificationSociety(e.target.value)}
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
                        value={ismCertification}
                        onChange={(e) => setIsmCertification(e.target.value)}
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
                        value={operationalStatus}
                        onChange={(e) => setOperationalStatus(e.value)}
                    />
                
                </div>

                <div className="form-field">
                    <label htmlFor="validade">
                        Validade do certificado
                    </label>

                    <InputText
                        id="validade"
                        type="date"
                        placeholder="Inserir validade"
                        className="w-full"
                        value={certificateExpiryDate ? certificateExpiryDate.toString() : ""}
                        onChange={(e) => setCertificateExpiryDate(e.target.value)}
                    />
                </div>

            </div>
        </Card>
        </section>
    );
}