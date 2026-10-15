import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { FileUpload } from "primereact/fileupload";

export function VesselBasicInfo() {
    const bandeiras = [
        { label: "Brasil", value: "BR" },
        { label: "Panamá", value: "PA" },
        { label: "Libéria", value: "LR" },
        { label: "Bahamas", value: "BS" }
    ];

    return (
        <Card className="vessel-card">

            <div className="section-title">
                <div className="section-icon">
                    <i className="pi pi-briefcase" />
                </div>

                <h2>Seção 1 - Informações Básicas</h2>
            </div>

            <div className="vessel-basic-content">

                <div className="vessel-fields-grid">

                    <div className="form-field">
                        <label>
                            Nome oficial da Embarcação <span>*</span>
                        </label>

                        <InputText
                            placeholder="Inserir nome do Navio"
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
                        />
                    </div>

                    <div className="form-field">
                        <label>
                            Número do IMO <span>*</span>
                        </label>

                        <InputText
                            placeholder="Inserir IMO"
                        />
                    </div>

                </div>

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
                        <i className="pi pi-image" />

                        <span>
                            Nenhuma imagem selecionada
                        </span>
                    </div>

                    <FileUpload
                        name="vesselPhoto"
                        accept="image/*"
                        chooseLabel="Substituir imagem"
                        mode="basic"
                    />

                </div>

            </div>

        </Card>
    );
}