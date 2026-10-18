import { Card } from "primereact/card";
import { InputNumber } from "primereact/inputnumber";



interface VesselCapacityProps {
    maxPassengerCapacity: number | null;
    setMaxPassengerCapacity: (value: number | null) => void;

    maxCrewCapacity: number | null;
    setMaxCrewCapacity: (value: number | null) => void;

    lifeboatTotalCapacity: number | null;
    setLifeboatTotalCapacity: (value: number | null) => void;
}

export function VesselCapacity({
    maxPassengerCapacity,
    setMaxPassengerCapacity,
    maxCrewCapacity,
    setMaxCrewCapacity,
    lifeboatTotalCapacity,
    setLifeboatTotalCapacity
}: VesselCapacityProps) {


        
    return (

        <section className="vessel-section">
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
                        locale="pt-BR"
                        placeholder="Inserir valor"
                        className="w-full"
                        value={maxPassengerCapacity}
                        onValueChange={(e) => setMaxPassengerCapacity(e.value ?? null)}
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="max-crew">
                        Capacidade máxima de tripulação operacional <span>*</span>
                    </label>

                    <InputNumber
                        id="max-crew"
                        locale="pt-BR"
                        placeholder="Inserir valor"
                        className="w-full"
                        value={maxCrewCapacity}
                        onValueChange={(e) => setMaxCrewCapacity(e.value ?? null)}
                    />
                </div>
                    
                

                <div className="form-field">
                    <label htmlFor="total-cabins">
                        Total de cabines
                    </label>

                    <InputNumber
                        id="total-cabins"
                        locale="pt-BR"
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
                        value={lifeboatTotalCapacity}
                        onValueChange={(e) => setLifeboatTotalCapacity(e.value ?? null)}
                    />
                </div>
                
    

            </div>
        </Card>
        </section>
    );
}