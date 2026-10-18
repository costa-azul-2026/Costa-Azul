-- V1__users_and_rbac.sql
-- Schema: users
-- Cria a estrutura de identidade e RBAC (Padronizado com UUID)

CREATE SCHEMA IF NOT EXISTS users;

-- ACCOUNT
CREATE TABLE IF NOT EXISTS users.account (
    id_user UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(150) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT now(),
    document_type VARCHAR(30),
    document_number VARCHAR(50),
    birth_date DATE,
    nationality VARCHAR(80),
    gender VARCHAR(30),
    account_status VARCHAR(30),
    profile_photo VARCHAR(500),
    updated_at TIMESTAMP NOT NULL DEFAULT now()
);


-- APP_ROLE 
CREATE TABLE IF NOT EXISTS users.app_role (
    id_role UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    role_name VARCHAR(50) NOT NULL UNIQUE,
    description VARCHAR(255)
);


-- DEPARTMENT
CREATE TABLE IF NOT EXISTS users.department (
    id_department UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    department_name VARCHAR(100) NOT NULL,
    description VARCHAR(255),
    staff_capacity INTEGER
);


-- JOB_POSITION
CREATE TABLE IF NOT EXISTS users.job_position (
    id_position UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    id_default_role UUID NOT NULL,
    position_name VARCHAR(100) NOT NULL,
    hierarchy_level VARCHAR(50),
    weekly_hours INTEGER,

    CONSTRAINT fk_position_role
        FOREIGN KEY (id_default_role)
        REFERENCES users.app_role(id_role)
);


-- EMPLOYEE
CREATE TABLE IF NOT EXISTS users.employee (
    id_employee UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    id_user UUID NOT NULL UNIQUE,
    id_department UUID NOT NULL,
    id_position UUID NOT NULL,
    employee_code VARCHAR(50) NOT NULL UNIQUE,

    CONSTRAINT fk_employee_user
        FOREIGN KEY (id_user)
        REFERENCES users.account(id_user),

    CONSTRAINT fk_employee_department
        FOREIGN KEY (id_department)
        REFERENCES users.department(id_department),

    CONSTRAINT fk_employee_position
        FOREIGN KEY (id_position)
        REFERENCES users.job_position(id_position)
);


-- PASSENGER
CREATE TABLE IF NOT EXISTS users.passenger (
    id_passenger UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    id_user UUID NOT NULL UNIQUE,
    total_miles_earned DECIMAL(12,2),

    CONSTRAINT fk_passenger_user
        FOREIGN KEY (id_user)
        REFERENCES users.account(id_user)
);


-- USER_ROLE
CREATE TABLE IF NOT EXISTS users.user_role (
    id_user_role UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    id_user UUID NOT NULL,
    id_role UUID NOT NULL,
    assigned_at TIMESTAMP NOT NULL DEFAULT now(),

    CONSTRAINT fk_user_role_user
        FOREIGN KEY (id_user)
        REFERENCES users.account(id_user),

    CONSTRAINT fk_user_role_role
        FOREIGN KEY (id_role)
        REFERENCES users.app_role(id_role),

    CONSTRAINT uq_user_role
        UNIQUE (id_user, id_role)
);


-- PREFERENCES
CREATE TABLE IF NOT EXISTS users.preferences (
    id_preferences UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    id_user UUID NOT NULL UNIQUE,
    language VARCHAR(30),
    is_notifications_enabled BOOLEAN,
    is_dark_mode BOOLEAN,
    is_accessibility_mode BOOLEAN,
    dietary_restrictions VARCHAR(255),
    interests VARCHAR(500),
    preferred_cabin_type VARCHAR(100),
    excursion_interest VARCHAR(255),
    preferred_event_type VARCHAR(100),
    is_shift_notifications_enabled BOOLEAN,

    CONSTRAINT fk_preferences_user
        FOREIGN KEY (id_user)
        REFERENCES users.account(id_user)
);


-- USER_PHONE
CREATE TABLE IF NOT EXISTS users.user_phone (
    id_phone UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    id_user UUID NOT NULL,
    phone_number VARCHAR(30) NOT NULL,
    phone_type VARCHAR(30),
    is_primary BOOLEAN,

    CONSTRAINT fk_user_phone_user
        FOREIGN KEY (id_user)
        REFERENCES users.account(id_user)
);
