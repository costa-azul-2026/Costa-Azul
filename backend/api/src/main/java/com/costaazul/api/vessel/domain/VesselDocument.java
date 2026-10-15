package com.costaazul.api.vessel.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.OffsetDateTime;
import java.util.UUID;

@Entity
@Table(name = "vessel_document", schema = "vessel")
@Getter
@Setter
@NoArgsConstructor
public class VesselDocument {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "id_document")
    private UUID idDocument;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_vessel", nullable = false)
    private Vessel vessel;

    @Column(name = "document_type", length = 50)
    private String documentType;

    @Column(name = "file_name", nullable = false, length = 255)
    private String fileName;

    @Column(name = "file_url", nullable = false, length = 500)
    private String fileUrl;

    @Column(name = "mime_type", length = 150)
    private String mimeType;

    @Column(name = "file_size_bytes")
    private Long fileSizeBytes;

    @Column(name = "uploaded_at", nullable = false, updatable = false)
    private OffsetDateTime uploadedAt;

    @PrePersist
    protected void onCreate() {
        this.uploadedAt = OffsetDateTime.now();
    }
}