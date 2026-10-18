import { Card } from "primereact/card";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";


interface VesselTechnicalInfoProps {
    shipyard: string;
    setShipyard: (value: string) => void;

    grossTonnage: number | null;
    setGrossTonnage: (value: number | null) => void;

    deadweightTonnage: number | null;
    setDeadweightTonnage: (value: number | null) => void;

    lengthOverall: number | null;
    setLengthOverall: (value: number | null) => void;

    maxBeam: number | null;
    setMaxBeam: (value: number | null) => void;

    operatingDraft: number | null;
    setOperatingDraft: (value: number | null) => void;

    maxServiceSpeed: number | null;
    setMaxServiceSpeed: (value: number | null) => void;

    mainPropulsion: string;
    setMainPropulsion: (value: string) => void;
}

export function VesselTechnicalInfo({
    shipyard,
    setShipyard,
    grossTonnage,
    setGrossTonnage,
    deadweightTonnage,
    setDeadweightTonnage,
    lengthOverall,
    setLengthOverall,
    maxBeam,
    setMaxBeam,
    operatingDraft,
    setOperatingDraft,
    maxServiceSpeed,
    setMaxServiceSpeed,
    mainPropulsion,
    setMainPropulsion
}: VesselTechnicalInfoProps){

    return (

        <section className="vessel-section">
        <Card className="vessel-card">
            <div className="section-title">
                <div className="section-icon">
                    <i className="pi pi-compass" />
                </div>

                <h2>Seção 2 - Especificações Técnicas e Dimensões</h2>
            </div>

            <div className="vessel-fields-grid">

                
                <div className="form-field">
                    <label htmlFor="arqueacao-bruta">
                        Arqueação Bruta (GT) <span>*</span>
                    </label>

                    <InputNumber
                        locale="pt-BR"
                        id="arqueacao-bruta"
                        placeholder="Inserir valor arqueação"
                        className="w-full"
                        value={grossTonnage}
                        onValueChange={(e) => setGrossTonnage(e.value ?? null)}
                    />
                </div>
                    
               

                <div className="form-field">
                    <label htmlFor="estaleiro">
                        Estaleiro Construtor <span>*</span>
                    </label>

                    <InputText
                        id="estaleiro"
                        placeholder="Inserir nome estaleiro"
                        className="w-full"
                        value={shipyard}
                        onChange={(e) => setShipyard(e.target.value)}
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="loa">
                        Comprimento Total (LOA) 
                    </label>

                    <InputNumber
                        id="loa"
                        placeholder="Inserir comprimento total"
                        className="w-full"
                        value={lengthOverall}
                        onValueChange={(e) => setLengthOverall(e.value ?? null)}
                    />
                </div>


                <div className="form-field">
                    <label htmlFor="porte-bruto">
                        Porte bruto (DWT)
                    </label>

                    <InputNumber
                    locale="pt-BR"
                        id="porte-bruto"
                        placeholder="Inserir porte bruto"
                        className="w-full"
                        value={deadweightTonnage}
                        onValueChange={(e) => setDeadweightTonnage(e.value ?? null)}
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="calado">
                        Calado Operacional <span>*</span>
                    </label>

                    <InputNumber
                        id="calado"
                        mode="decimal"
                        locale="pt-br"
                        placeholder="Inserir valor calado operacional"
                        className="w-full"
                        value={operatingDraft}
                        onValueChange={(e) => setOperatingDraft(e.value ?? null)}
                         minFractionDigits={2}
                        maxFractionDigits={2}
                    />
                </div>

                

                <div className="form-field">
                    <label htmlFor="boca-maxima">
                        Boca máxima
                    </label>

                    <InputNumber
                      locale="en-US"
                        useGrouping={false}
                        minFractionDigits={2}
                        maxFractionDigits={2}
                        id="boca-maxima"
                        placeholder="Inserir boca máxima"
                        className="w-full"
                        value={maxBeam}
                        onValueChange={(e) => setMaxBeam(e.value ?? null)}
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="num-conves">
                        Número de Convés
                    </label>

                    <InputText
                        id="num-conves"
                        placeholder="Campo automático - calculado após inserção de convés"
                        disabled
                        className="w-full"
                    />
                </div>

                

                <div className="form-field">
                    <label htmlFor="velocidade">
                        Velocidade máxima de Serviço
                    </label>

                    <InputNumber
                        id="velocidade"
                        locale="en-US"
                        useGrouping={false}
                        minFractionDigits={2}
                        maxFractionDigits={2}
                        placeholder="Inserir velocidade"
                        className="w-full"
                        value={maxServiceSpeed}
                        onValueChange={(e) => setMaxServiceSpeed(e.value ?? null)}
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="num-conves">
                        Número de Áreas
                    </label>

                    <InputText
                        id="num-area"
                        placeholder="Campo automático - calculado após inserção de áreas"
                        disabled
                        className="w-full"
                    />
                </div>

                

                <div className="form-field">
                    <label htmlFor="propulsao">
                        Propulsão Principal
                    </label>

                    <InputText
                        id="propulsao"
                        placeholder="Inserir propulsão"
                        className="w-full"
                        value={mainPropulsion}
                        onChange={(e) => setMainPropulsion(e.target.value)}
                    />
                </div>

            </div>
        </Card>
    </section>

    );
}