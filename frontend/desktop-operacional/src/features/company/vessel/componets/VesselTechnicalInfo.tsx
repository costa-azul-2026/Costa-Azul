import { Card } from "primereact/card";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";

export function VesselTechnicalInfo() {
    return (
        <Card className="vessel-card">
            <div className="section-title">
                <div className="section-icon">
                    <i className="pi pi-compass" />
                </div>

                <h2>Seção 2 - Especificações Técnicas e Dimensões</h2>
            </div>

            <div className="vessel-fields-grid">

                <div className="form-field">
                    <label htmlFor="ano-fabricacao">
                        Ano de Fabricação <span>*</span>
                    </label>

                    <InputNumber
                        id="ano-fabricacao"
                        placeholder="Inserir Ano"
                        useGrouping={false}
                        className="w-full"
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
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="arqueacao-bruta">
                        Arqueação Bruta (GT) <span>*</span>
                    </label>

                    <InputNumber
                        id="arqueacao-bruta"
                        placeholder="Inserir valor arqueação"
                        className="w-full"
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="porte-bruto">
                        Porte bruto (DWT)
                    </label>

                    <InputNumber
                        id="porte-bruto"
                        placeholder="Inserir porte bruto"
                        className="w-full"
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="loa">
                        Comprimento Total (LOA) <span>*</span>
                    </label>

                    <InputNumber
                        id="loa"
                        placeholder="Inserir comprimento total"
                        className="w-full"
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="boca-maxima">
                        Boca máxima
                    </label>

                    <InputNumber
                        id="boca-maxima"
                        placeholder="Inserir boca máxima"
                        className="w-full"
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="calado">
                        Calado Operacional
                    </label>

                    <InputNumber
                        id="calado"
                        placeholder="Inserir valor calado operacional"
                        className="w-full"
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="velocidade">
                        Velocidade máxima de Serviço
                    </label>

                    <InputNumber
                        id="velocidade"
                        placeholder="Inserir velocidade"
                        className="w-full"
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
                    <label htmlFor="propulsao">
                        Propulsão Principal
                    </label>

                    <InputText
                        id="propulsao"
                        placeholder="Inserir propulsão"
                        className="w-full"
                    />
                </div>

            </div>
        </Card>
    );
}