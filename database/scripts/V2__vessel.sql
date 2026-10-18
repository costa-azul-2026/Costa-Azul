-- COSTA AZUL
-- Schema: vessel
-- PostgreSQL
-- Premissas:
-- 1. Todos os IDs são UUID.
-- 2. users.employee(id_employee) já existe e utiliza UUID.
-- 3. Os totais de conveses e cabines são calculados.
-- 4. Os arquivos são armazenados externamente; o banco guarda
--    seus metadados e referências.

CREATE SCHEMA IF NOT EXISTS vessel;

CREATE TABLE IF NOT EXISTS vessel.company (
    id_company UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    company_name VARCHAR(150) NOT NULL,
    tax_id VARCHAR(30) UNIQUE,

    latitude NUMERIC(9,6),
    longitude NUMERIC(9,6),

    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    version INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT ck_company_latitude
        CHECK (latitude IS NULL OR latitude BETWEEN -90 AND 90),

    CONSTRAINT ck_company_longitude
        CHECK (longitude IS NULL OR longitude BETWEEN -180 AND 180),

    CONSTRAINT ck_company_version
        CHECK (version >= 0)
);



CREATE TABLE IF NOT EXISTS vessel.vessel (
    id_vessel UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    id_company UUID NOT NULL
        REFERENCES vessel.company(id_company),

    vessel_name VARCHAR(150) NOT NULL,

    national_registration_number VARCHAR(150) NOT NULL UNIQUE,

    flag VARCHAR(150) NOT NULL,

    imo_number VARCHAR(7) NOT NULL UNIQUE,

    photo_url VARCHAR(500),

    year_built SMALLINT NOT NULL,

    shipyard VARCHAR(150) NOT NULL,

    gross_tonnage NUMERIC(10,2) NOT NULL,

    deadweight_tonnage NUMERIC(10,2),

    length_overall NUMERIC(7,2) NOT NULL,

    max_beam NUMERIC(6,2),

    operating_draft NUMERIC(5,2),

    max_service_speed NUMERIC(4,1),

    main_propulsion VARCHAR(150),

    max_passenger_capacity INTEGER NOT NULL,

    max_crew_capacity INTEGER,

    lifeboat_total_capacity INTEGER,

    classification_society VARCHAR(150),

    ism_certification VARCHAR(150),

    certificate_expiry_date DATE,

    operational_status VARCHAR(30)
        NOT NULL DEFAULT 'ACTIVE',

    id_home_port UUID,

    main_terminal VARCHAR(150),

    id_manager UUID
        REFERENCES users.employee(id_employee),

    operational_email VARCHAR(255),

    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),

    updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),

    version INTEGER NOT NULL DEFAULT 0,



    CONSTRAINT ck_vessel_year_built
        CHECK (year_built BETWEEN 1900 AND 2100),

    CONSTRAINT ck_vessel_gross_tonnage
        CHECK (gross_tonnage > 0),

    CONSTRAINT ck_vessel_deadweight
        CHECK (
            deadweight_tonnage IS NULL
            OR deadweight_tonnage > 0
        ),

    CONSTRAINT ck_vessel_length
        CHECK (length_overall > 0),

    CONSTRAINT ck_vessel_beam
        CHECK (max_beam IS NULL OR max_beam > 0),

    CONSTRAINT ck_vessel_draft
        CHECK (operating_draft IS NULL OR operating_draft > 0),

    CONSTRAINT ck_vessel_speed
        CHECK (max_service_speed IS NULL OR max_service_speed > 0),

    CONSTRAINT ck_vessel_passengers
        CHECK (max_passenger_capacity > 0),

    CONSTRAINT ck_vessel_crew
        CHECK (max_crew_capacity IS NULL OR max_crew_capacity >= 0),

    CONSTRAINT ck_vessel_lifeboat_capacity
        CHECK (
            lifeboat_total_capacity IS NULL
            OR lifeboat_total_capacity >= 0
        ),

    CONSTRAINT ck_vessel_status
        CHECK (
            operational_status IN (
                'ACTIVE',
                'INACTIVE',
                'MAINTENANCE',
                'DRY_DOCK'
            )
        ),


    CONSTRAINT ck_vessel_version
        CHECK (version >= 0)
);



CREATE INDEX IF NOT EXISTS idx_vessel_company
    ON vessel.vessel(id_company);

CREATE INDEX IF NOT EXISTS idx_vessel_manager
    ON vessel.vessel(id_manager);

CREATE INDEX IF NOT EXISTS idx_vessel_status
    ON vessel.vessel(operational_status);



CREATE TABLE IF NOT EXISTS vessel.deck (
    id_deck UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    id_vessel UUID NOT NULL
        REFERENCES vessel.vessel(id_vessel)
        ON DELETE CASCADE,

    deck_number INTEGER NOT NULL,

    deck_name VARCHAR(100) NOT NULL,

    description TEXT,

    operational_status VARCHAR(30)
        NOT NULL DEFAULT 'ACTIVE',

    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),

    updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),

    version INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT uq_deck_number_per_vessel
        UNIQUE (id_vessel, deck_number),

    CONSTRAINT ck_deck_number
        CHECK (deck_number > 0),

    CONSTRAINT ck_deck_version
        CHECK (version >= 0),

    CONSTRAINT ck_deck_status
        CHECK (
            operational_status IN (
                'ACTIVE',
                'INACTIVE',
                'MAINTENANCE',
                'UNAVAILABLE'
            )
        )
);

CREATE INDEX IF NOT EXISTS idx_deck_vessel
    ON vessel.deck(id_vessel);


CREATE SCHEMA IF NOT EXISTS vessel;

CREATE TABLE IF NOT EXISTS vessel.cabin (
    id_cabin UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    id_deck UUID NOT NULL
        REFERENCES vessel.deck(id_deck)
        ON DELETE CASCADE,

    cabin_number VARCHAR(50) NOT NULL,

    cabin_category VARCHAR(100) NOT NULL,

    guest_capacity INTEGER NOT NULL,

    area_m2 NUMERIC(8,2),

    balcony_area_m2 NUMERIC(8,2),

    is_accessible BOOLEAN NOT NULL DEFAULT FALSE,

    is_bookable BOOLEAN NOT NULL DEFAULT TRUE,

    operational_status VARCHAR(30)
        NOT NULL DEFAULT 'ACTIVE',

    updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),

    version INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT uq_cabin_number_per_deck
        UNIQUE (id_deck, cabin_number),

    CONSTRAINT ck_cabin_guest_capacity
        CHECK (guest_capacity > 0),

    CONSTRAINT ck_cabin_area
        CHECK (area_m2 IS NULL OR area_m2 > 0),

    CONSTRAINT ck_cabin_balcony_area
        CHECK (balcony_area_m2 IS NULL OR balcony_area_m2 >= 0),

    CONSTRAINT ck_cabin_version
        CHECK (version >= 0),

    CONSTRAINT ck_cabin_operational_status
        CHECK (
            operational_status IN (
                'ACTIVE',
                'INACTIVE',
                'MAINTENANCE',
                'UNAVAILABLE'
            )
        )
);

CREATE INDEX IF NOT EXISTS idx_cabin_deck
    ON vessel.cabin(id_deck);



CREATE TABLE IF NOT EXISTS vessel.cabin_picture (
    id_picture UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    id_cabin UUID NOT NULL
        REFERENCES vessel.cabin(id_cabin)
        ON DELETE CASCADE,

    file_name VARCHAR(255) NOT NULL,

    file_url VARCHAR(1000) NOT NULL,

    is_primary BOOLEAN NOT NULL DEFAULT FALSE,

    uploaded_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_cabin_picture_cabin
    ON vessel.cabin_picture(id_cabin);


CREATE TABLE IF NOT EXISTS vessel.area (
    id_area UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    -- Vínculo estrutural
    id_deck UUID NOT NULL
        REFERENCES vessel.deck(id_deck)
        ON DELETE CASCADE,
    area_name VARCHAR(150) NOT NULL,
    area_category VARCHAR(50) NOT NULL,
    description TEXT,
    operational_status VARCHAR(30) NOT NULL DEFAULT 'ACTIVE',
    capacity INTEGER,
    opening_time TIME,
    closing_time TIME,
    min_age INTEGER,
    max_age INTEGER,
    dress_code VARCHAR(100),

    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    version INTEGER NOT NULL DEFAULT 0,

   
    CONSTRAINT ck_area_capacity
        CHECK (capacity IS NULL OR capacity > 0),

    CONSTRAINT ck_area_min_age
        CHECK (min_age IS NULL OR min_age >= 0),

    CONSTRAINT ck_area_max_age
        CHECK (max_age IS NULL OR max_age >= 0),

    CONSTRAINT ck_area_age_range
        CHECK (
            min_age IS NULL
            OR max_age IS NULL
            OR min_age <= max_age
        ),

    CONSTRAINT ck_area_version
        CHECK (version >= 0),

    CONSTRAINT ck_area_status
        CHECK (
            operational_status IN (
                'ACTIVE',
                'INACTIVE',
                'MAINTENANCE',
                'UNAVAILABLE'
            )
        )
);

CREATE INDEX IF NOT EXISTS idx_area_deck
    ON vessel.area(id_deck);

CREATE TABLE IF NOT EXISTS vessel.area_picture (
    id_picture UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    id_area UUID NOT NULL
        REFERENCES vessel.area(id_area)
        ON DELETE CASCADE,

    file_name VARCHAR(255) NOT NULL,
    file_url VARCHAR(1000) NOT NULL,

    is_primary BOOLEAN NOT NULL DEFAULT FALSE,

    uploaded_at TIMESTAMPTZ NOT NULL DEFAULT now()
);


CREATE INDEX IF NOT EXISTS idx_area_picture_area
    ON vessel.area_picture(id_area);



CREATE TABLE IF NOT EXISTS vessel.product (
    id_product UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    product_name VARCHAR(150) NOT NULL,

    description TEXT,

    product_type VARCHAR(50),

    unit_of_measure VARCHAR(30),

    is_active BOOLEAN NOT NULL DEFAULT TRUE,

    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),

    updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),

    version INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT ck_product_version
        CHECK (version >= 0)
);



CREATE TABLE IF NOT EXISTS vessel.area_product_stock (
    id_area UUID NOT NULL
        REFERENCES vessel.area(id_area)
        ON DELETE CASCADE,

    id_product UUID NOT NULL
        REFERENCES vessel.product(id_product),

    quantity NUMERIC(12,3) NOT NULL DEFAULT 0,

    updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),

    version INTEGER NOT NULL DEFAULT 0,
    
    CONSTRAINT pk_area_product_stock
        PRIMARY KEY (id_area, id_product),

    CONSTRAINT ck_area_product_stock_quantity
        CHECK (quantity >= 0),

    CONSTRAINT ck_area_product_stock_version
        CHECK (version >= 0)
);

CREATE INDEX IF NOT EXISTS idx_area_product_stock_product
    ON vessel.area_product_stock(id_product);



CREATE TABLE IF NOT EXISTS vessel.vessel_document (
    id_document UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    id_vessel UUID NOT NULL
        REFERENCES vessel.vessel(id_vessel)
        ON DELETE CASCADE,

    document_type VARCHAR(50),

    file_name VARCHAR(255) NOT NULL,

    file_url VARCHAR(500) NOT NULL,

    mime_type VARCHAR(150),

    file_size_bytes BIGINT,

    uploaded_at TIMESTAMPTZ NOT NULL DEFAULT now(),

    CONSTRAINT ck_vessel_document_file_size
        CHECK (
            file_size_bytes IS NULL
            OR file_size_bytes >= 0
        )
);

CREATE INDEX IF NOT EXISTS idx_vessel_document_vessel
    ON vessel.vessel_document(id_vessel);


CREATE OR REPLACE VIEW vessel.vw_vessel_summary AS
SELECT
    v.id_vessel,
    v.vessel_name,
    v.imo_number,
    v.operational_status,

    c.id_company,
    c.company_name,

    -- Total de conveses da embarcação
    (
        SELECT COUNT(*)
        FROM vessel.deck d
        WHERE d.id_vessel = v.id_vessel
    ) AS deck_count,

    -- Total de cabines da embarcação
    (
        SELECT COUNT(*)
        FROM vessel.cabin cb
        JOIN vessel.deck d
            ON d.id_deck = cb.id_deck
        WHERE d.id_vessel = v.id_vessel
    ) AS cabin_count,

    -- Total de áreas da embarcação
    (
        SELECT COUNT(*)
        FROM vessel.deck d
        INNER JOIN vessel.area a
            ON a.id_deck = d.id_deck
        WHERE d.id_vessel = v.id_vessel
    ) AS total_areas

FROM vessel.vessel v
JOIN vessel.company c
    ON c.id_company = v.id_company;
