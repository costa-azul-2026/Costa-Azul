import { Button } from "primereact/button";
import { Breadcrumb } from "../../components/Breadcrumb";
import { VesselBasicInfo } from "../componets/VesselBasicInfo";
import { VesselTechnicalInfo } from "../componets/VesselTechnicalInfo";
import { VesselCapacity } from "../componets/VesselCapacity";
import { VesselCertification } from "../componets/VesselCertification";
import { VesselOperational } from "../componets/VesselOperational";
import { VesselDocuments } from "../componets/VesselDocumets";

import "./VesselCreate.css";

function FormActions({ className }: { className: string }) {
    return (
        <div className={className}>
            <Button severity="secondary" outlined>
                Cancelar
            </Button>

            <Button severity="secondary" outlined>
                Salvar Rascunho
            </Button>

            <Button>
                Cadastrar Embarcação
                <i className="pi pi-check-circle" />
            </Button>
        </div>
    );
}

export function VesselCreate() {
    return (
        <>
            <Breadcrumb
                items={[
                    { label: "Frotas e Viagens", to: "/vessel" },
                    { label: "Cadastro de Embarcação" },
                ]}
            />

            <div className="vessel-page">

                <div className="vessel-header">
                    <div>
                        <h1>Cadastrar nova Embarcação</h1>

                        <p>
                            Preencha os dados abaixo para registrar um novo navio no sistema
                            CostaAzul.
                        </p>
                    </div>

                    <FormActions className="vessel-header__actions" />
                </div>

                <div className="vessel-basic-layout">
                    <VesselBasicInfo />
                </div>

                <VesselTechnicalInfo />

                <VesselCapacity />

                <VesselCertification />

                <div className="vessel-bottom-layout">
                    <VesselOperational />
                    <VesselDocuments />
                </div>

                <FormActions className="vessel-footer-actions" />

            </div>
        </>
    );
}