import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { FileUpload } from "primereact/fileupload";
import { useState } from "react";
import { InputNumber } from "primereact/inputnumber";

interface VesselBasicInfoProps {
    vesselName: string;
    setVesselName: (value: string) => void;

    nationalRegistrationNumber: string;
    setNationalRegistrationNumber: (value: string) => void;

    flag: string;
    setFlag: (value: string) => void;

    imoNumber: string;
    setImoNumber: (value: string) => void;

    yearBuilt: number | null;
    setYearBuilt: (value: number | null) => void;
}

export function VesselBasicInfo({
    vesselName,
    setVesselName,
    nationalRegistrationNumber,
    setNationalRegistrationNumber,
    flag,
    setFlag,
    imoNumber,
    setImoNumber,
    yearBuilt,
    setYearBuilt
}: VesselBasicInfoProps) {

    const [vesselPhoto, setVesselPhoto] = useState<File | null>(null);
    const [photoPreview, setPhotoPreview] = useState<string | null>(null);

    const bandeiras = [
        { label: "Brasil", value: "BR" },
        { label: "Panamá", value: "PA" },
        { label: "Libéria", value: "LR" },
        { label: "Bahamas", value: "BS" }
    ];

    return (
        <section className="vessel-section">

            <div className="vessel-basic-content">

                {/* CARD 1 — Informações */}
                <Card className="vessel-card">

                    <div className="section-title">
                        <div className="section-icon">
                            <i className="pi pi-briefcase" />
                        </div>

                        <h2>Seção 1 - Informações Básicas</h2>
                    </div>

                    <div className="vessel-fields-grid">

                        <div className="form-field">
                            <label>
                                Nome oficial da Embarcação <span>*</span>
                            </label>

                            <InputText
                                placeholder="Inserir nome do Navio"
                                value={vesselName}
                                onChange={(e) => setVesselName(e.target.value)}
                            />
                        </div>

                        <div className="form-field">
                            <label>
                                Nome da empresa responsável
                            </label>

                            <InputText
                                placeholder="Campo automático - nome da empresa"
                                disabled
                            />
                        </div>

                        <div className="form-field">
                            <label>
                                Número do Registro Nacional <span>*</span>
                            </label>

                            <InputText
                                placeholder="Inserir número do registro"
                                value={nationalRegistrationNumber}
                                onChange={(e) =>
                                    setNationalRegistrationNumber(e.target.value)
                                }
                            />
                        </div>

                        <div className="form-field">
                            <label>
                                Bandeira <span>*</span>
                            </label>

                            <Dropdown
                                options={bandeiras}
                                optionLabel="label"
                                optionValue="value"
                                placeholder="Selecionar bandeira"
                                className="w-full"
                                value={flag}
                                onChange={(e) => setFlag(e.value)}
                            />
                        </div>

                        <div className="form-field">
                            <label>
                                Número do IMO <span>*</span>
                            </label>

                            <InputText
                                placeholder="Inserir IMO"
                                value={imoNumber}
                                onChange={(e) => setImoNumber(e.target.value)}
                            />
                        </div>

                        <div className="form-field">
                            <label htmlFor="ano-fabricacao">
                                Ano de Fabricação <span>*</span>
                            </label>

                            <InputNumber
                                id="ano-fabricacao"
                                placeholder="Inserir Ano"
                                useGrouping={false}
                                className="w-full"
                                value={yearBuilt}
                                onValueChange={(e) =>
                                    setYearBuilt(e.value ?? null)
                                }
                            />
                        </div>

                    </div>

                </Card>

                {/* CARD 2 — Foto */}
                <Card className="vessel-card">

                    <div className="vessel-photo-card">

                        <div className="photo-title">
                            <i className="pi pi-camera" />

                            <strong>
                                Foto da Embarcação
                            </strong>
                        </div>

                        <small>
                            Dimensão recomendada: 2560 × 1440 px
                            (JPG, PNG,...)
                        </small>

                        <div className="photo-placeholder">
                            {photoPreview ? (
                                <img
                                    src={photoPreview}
                                    alt="Pré-visualização da embarcação"
                                />
                            ) : (
                                <>
                                    <i className="pi pi-image" />

                                    <span>
                                        {vesselPhoto
                                            ? vesselPhoto.name
                                            : "Nenhuma imagem selecionada"}
                                    </span>
                                </>
                            )}
                        </div>

                        <FileUpload
                            name="vesselPhoto"
                            accept="image/*"
                            customUpload
                            className="photo-upload"
                            chooseOptions={{
                                label: "Selecionar a imagem",
                                icon: "none"
                            }}
                            uploadOptions={{
                                style: { display: "none" }
                            }}
                            cancelOptions={{
                                style: { display: "none" }
                            }}
                            onSelect={(e) => {
                                const file = e.files[0] ?? null;

                                setVesselPhoto(file);

                                if (file) {
                                    const reader = new FileReader();

                                    reader.onload = () => {
                                        setPhotoPreview(
                                            reader.result as string
                                        );
                                    };

                                    reader.readAsDataURL(file);
                                } else {
                                    setPhotoPreview(null);
                                }
                            }}
                        />

                    </div>

                </Card>

            </div>

        </section>
    );
}