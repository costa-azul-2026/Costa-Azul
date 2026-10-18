import api from "./api";


export interface VesselRequestDTO {
    idCompany: string;
    vesselName: string;
    nationalRegistrationNumber: string;
    flag: string;
    imoNumber: string;
    photoUrl: string | null;
    yearBuilt: number | null;
    shipyard: string;
    grossTonnage: number | null;
    deadweightTonnage: number | null;
    lengthOverall: number | null;
    maxBeam: number | null;
    operatingDraft: number | null;
    maxServiceSpeed: number | null;
    mainPropulsion: string;
    maxPassengerCapacity: number | null;
    maxCrewCapacity: number | null;
    lifeboatTotalCapacity: number | null;
    classificationSociety: string;
    ismCertification: string;
    certificateExpiryDate: string | null;
    operationalStatus: string;
    idHomePort: string | null;
    mainTerminal: string;
    idManager: string | null;
    operationalEmail: string;
    documents: DocumentDTO[];
}

export interface DocumentDTO {
    documentType: string;
    fileName: string;
    fileUrl: string;
    mimeType: string;
    fileSizeBytes: number;
}

export async function createVessel(vessel:VesselRequestDTO) {
    const response = await api.post("/api/erp/vessels", vessel);

    return response.data
    
}