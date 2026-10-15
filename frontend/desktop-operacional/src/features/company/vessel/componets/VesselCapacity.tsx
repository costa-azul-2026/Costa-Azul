import { Card } from "primereact/card";
import { InputNumber } from "primereact/inputnumber";

export function VesselCapacity() {
    return (
        <Card className="vessel-card">
            <div className="section-title">
                <div className="section-icon">
                    <i className="pi pi-users" />
                </div>

                <h2>Seção 3 - Capacidade & Acomodação</h2>
            </div>

            <div className="vessel-fields-grid">

                <div className="form-field">
                    <label htmlFor="max-passengers">
                        Capacidade máxima de passageiros <span>*</span>
                    </label>

                    <InputNumber
                        id="max-passengers"
                        placeholder="Inserir valor"
                        className="w-full"
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="max-crew">
                        Capacidade máxima de tripulação operacional <span>*</span>
                    </label>

                    <InputNumber
                        id="max-crew"
                        placeholder="Inserir valor"
                        className="w-full"
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="total-cabins">
                        Total de cabines
                    </label>

                    <InputNumber
                        id="total-cabins"
                        placeholder="Campo automático - calculado após inserção de cabine"
                        className="w-full"
                        disabled
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="lifeboats">
                        Botes salva-vidas / capacidade de pessoas
                    </label>

                    <InputNumber
                        id="lifeboats"
                        placeholder="Inserir valor"
                        className="w-full"
                    />
                </div>

            </div>
        </Card>
    );
}