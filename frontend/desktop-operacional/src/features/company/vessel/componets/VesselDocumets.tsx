import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { FileUpload } from "primereact/fileupload";

export function VesselDocuments() {
    return (
        <Card className="vessel-card">
            <div className="section-title">
                <div className="section-icon">
                    <i className="pi pi-folder" />
                </div>

                <h2>Documentação Técnica</h2>
            </div>

            <p className="documents-description">
                Anexe o certificado de classe, plano geral, inscrição e outros documentos.
            </p>

            <FileUpload
                name="documents"
                multiple
                accept=".pdf,.jpg,.jpeg,.png"
                auto={false}
                customUpload
                headerTemplate={() => (
                    <Button type="button">
                        <i className="pi pi-plus" /> Inserir Arquivos
                    </Button>
                )}
                emptyTemplate={
                    <div className="upload-empty">
                        <i className="pi pi-folder" />
                        <span>Ou arraste os arquivos aqui</span>
                    </div>
                }
            />
        </Card>
    );
}