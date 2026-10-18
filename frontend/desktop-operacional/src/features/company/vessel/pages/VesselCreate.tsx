import { Button } from "primereact/button";
import { Breadcrumb } from "../../components/Breadcrumb";
import { VesselBasicInfo } from "../componets/VesselBasicInfo";
import { VesselTechnicalInfo } from "../componets/VesselTechnicalInfo";
import { VesselCapacity } from "../componets/VesselCapacity";
import { VesselCertification } from "../componets/VesselCertification";
import { VesselOperational } from "../componets/VesselOperational";
import { VesselDocuments } from "../componets/VesselDocumets";
import { useState } from "react";

import "./VesselCreate.css";
import { createVessel, type VesselRequestDTO } from "../../../../services/vesselcreate";

function FormActions({ className, onCreate }: { className: string; onCreate: () => void; }) {
    return (
        <div className={className}>
            <div className="vessel-actions-secondary">
                <Button className="vessel-btn-secondary" severity="secondary" outlined>
                    Cancelar
                </Button>

                <Button className="vessel-btn-secondary" severity="secondary" outlined>
                    Salvar Rascunho
                </Button>
            </div>

            <Button className="vessel-btn-primary" onClick={onCreate}>
                <span>Cadastrar Embarcação</span>
                <i className="pi pi-check-circle" />
            </Button>
        </div>
    );
}

export function VesselCreate() {
    const [vesselName, setVesselName] = useState(""); {/* Nome da embarcação */}
    const [nationalRegistrationNumber, setNationalRegistrationNumber] = useState("");  {/* Registro Nacional */}
    const [flag, setFlag] = useState("");  {/* Bandeira */}
    const [imoNumber, setImoNumber] = useState(""); {/* Numero do IMO */}
    const [yearBuilt, setYearBuilt] = useState<number | null>(null); {/* Ano de fabricação. */}
    
    const [shipyard, setShipyard] = useState(""); {/* Estaleiro Construtor */}
    const [grossTonnage, setGrossTonnage] = useState<number | null>(null); {/* Arqueação Bruta */}
    const [deadweightTonnage, setDeadweightTonnage] = useState<number | null>(null); {/* Porte Bruto */}
    const [lengthOverall, setLengthOverall] = useState<number | null>(null); {/* Comprimento Total */}
    const [maxBeam, setMaxBeam] = useState<number | null>(null); {/* Boca Máxima */}
    const [operatingDraft, setOperatingDraft] = useState<number | null>(null); {/* Calado Operacional */}
    const [maxServiceSpeed, setMaxServiceSpeed] = useState<number | null>(null); {/* Velocidade Máxima de Serviço */}
    const [mainPropulsion, setMainPropulsion] = useState(""); {/* Propulsão Principal */}

    const [maxPassengerCapacity, setMaxPassengerCapacity] = useState<number | null>(null); {/* Capacidade máxima de passageiros */}
    const [maxCrewCapacity, setMaxCrewCapacity] = useState<number | null>(null); {/* Capacidade máxima de tripulação operacional */}
    const [lifeboatTotalCapacity, setLifeboatTotalCapacity] = useState<number | null>(null); {/* Capacidade total de botes salva-vidas */}

    const [classificationSociety, setClassificationSociety] = useState(""); {/* Classificadora Naval (IACS) */}
    const [ismCertification, setIsmCertification] = useState(""); {/* Certificação Código ISM */}
    const [certificateExpiryDate, setCertificateExpiryDate] = useState(""); {/* Validade do certificado */}
    const [operationalStatus, setOperationalStatus] = useState(""); {/* Status Operacional */}

    const [idHomePort, setIdHomePort] = useState<string | null>(null);{/* Porto Base */}
    const [mainTerminal, setMainTerminal] = useState(""); {/* Terminal / Berço principal */}
    const [idManager, setIdManager] = useState<string | null>(null); {/* Gerente da Embarcação */}
    const [operationalEmail, setOperationalEmail] = useState(""); {/* Email Operacional */}

    const [documents, setDocuments] = useState<File[]>([]);


    async function handleCreateVessel() {
    const vessel: VesselRequestDTO = {
        idCompany: "",

        vesselName,
        nationalRegistrationNumber,
        flag,
        imoNumber,
        photoUrl: null,
        yearBuilt,

        shipyard,
        grossTonnage,
        deadweightTonnage,
        lengthOverall,
        maxBeam,
        operatingDraft,
        maxServiceSpeed,
        mainPropulsion,

        maxPassengerCapacity,
        maxCrewCapacity,
        lifeboatTotalCapacity,

        classificationSociety,
        ismCertification,
        certificateExpiryDate: certificateExpiryDate || null,
        operationalStatus,

        idHomePort,
        mainTerminal,
        idManager,
        operationalEmail,

        documents: []
    };

    console.log("STATUS ENVIADO:", operationalStatus);

    try {
        const response = await createVessel(vessel);

        console.log("Embarcação cadastrada:", response);
    } catch (error) {
        console.error("Erro ao cadastrar embarcação:", error);
    }
}

    
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

                    <FormActions className="vessel-header__actions" onCreate={handleCreateVessel} />
                </div>

                <div className="vessel-basic-layout">
                    <VesselBasicInfo
                        vesselName={vesselName}
                        setVesselName={setVesselName}
                        nationalRegistrationNumber={nationalRegistrationNumber}
                        setNationalRegistrationNumber={setNationalRegistrationNumber}
                        flag={flag}
                        setFlag={setFlag}
                        imoNumber={imoNumber}
                        setImoNumber={setImoNumber}
                        yearBuilt={yearBuilt}
                        setYearBuilt={setYearBuilt}
                    />
                </div>

                <VesselTechnicalInfo 
                    shipyard={shipyard}
                    setShipyard={setShipyard}
                    grossTonnage={grossTonnage}
                    setGrossTonnage={setGrossTonnage}
                    deadweightTonnage={deadweightTonnage}
                    setDeadweightTonnage={setDeadweightTonnage}
                    lengthOverall={lengthOverall}
                    setLengthOverall={setLengthOverall}
                    maxBeam={maxBeam}
                    setMaxBeam={setMaxBeam}
                    operatingDraft={operatingDraft}
                    setOperatingDraft={setOperatingDraft}
                    maxServiceSpeed={maxServiceSpeed}
                    setMaxServiceSpeed={setMaxServiceSpeed}
                    mainPropulsion={mainPropulsion}
                    setMainPropulsion={setMainPropulsion}
                
                />

                <VesselCapacity
                    maxPassengerCapacity={maxPassengerCapacity}
                    setMaxPassengerCapacity={setMaxPassengerCapacity}
                    maxCrewCapacity={maxCrewCapacity}
                    setMaxCrewCapacity={setMaxCrewCapacity}
                    lifeboatTotalCapacity={lifeboatTotalCapacity}
                    setLifeboatTotalCapacity={setLifeboatTotalCapacity}
                />

                <VesselCertification
                    classificationSociety={classificationSociety}
                    setClassificationSociety={setClassificationSociety}
                    ismCertification={ismCertification}
                    setIsmCertification={setIsmCertification}
                    certificateExpiryDate={certificateExpiryDate}
                    setCertificateExpiryDate={setCertificateExpiryDate}
                    operationalStatus={operationalStatus}
                    setOperationalStatus={setOperationalStatus}
                />

                <div className="vessel-bottom-layout">
                    <VesselOperational
                        idHomePort={idHomePort}
                        setIdHomePort={setIdHomePort}
                        mainTerminal={mainTerminal}
                        setMainTerminal={setMainTerminal}
                        idManager={idManager}
                        setIdManager={setIdManager}
                        operationalEmail={operationalEmail}
                        setOperationalEmail={setOperationalEmail}
                    />


                    <VesselDocuments
                        documents={documents}
                        setDocuments={setDocuments}
                    />
                </div>

                <FormActions className="vessel-footer-actions" onCreate={handleCreateVessel}/>

            </div>
        </>
    );
}