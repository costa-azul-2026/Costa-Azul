import { Card } from "primereact/card";
import { FileUpload } from "primereact/fileupload";

interface VesselDocumentsProps {
    documents: File[];
    setDocuments: (value: File[]) => void;
}

export function VesselDocuments({
    documents,
    setDocuments
}: VesselDocumentsProps) {
    return (
        <Card className="vessel-card vessel-card--upload">
            <div className="vessel-documents-card">
                <div className="documents-header">
                    <i className="pi pi-folder" />
                    <h2>Documentação Técnica</h2>
                </div>

                <p className="documents-description">
                    Anexe o certificado de classe, plano geral, inscrição e outros documentos.
                </p>

                <FileUpload
                    name="documents"
                    className="documents-upload"
                    multiple
                    accept=".pdf,.jpg,.jpeg,.png"
                    auto={false}
                    customUpload
                    chooseOptions={{
                        label: "Inserir Arquivos",
                        icon: "pi pi-download",
                    }}
                    uploadOptions={{
                        style: { display: "none" }
                    }}
                    cancelOptions={{
                        style: { display: "none" }
                    }}
                    onSelect={(e) => {
                        setDocuments(e.files);
                    }}
                    emptyTemplate={
                        <div className="upload-empty">
                            <i className="pi pi-folder" />
                            <span>Ou arraste os arquivos aqui</span>
                        </div>
                    }
                />

                {documents.length > 0 && (
                    <small className="documents-count">
                        {documents.length} arquivo(s) selecionado(s)
                    </small>
                )}
            </div>
        </Card>
    );
}