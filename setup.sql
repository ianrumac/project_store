CREATE TABLE IF NOT EXISTS projects (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    icon VARCHAR(50) NOT NULL,
    description TEXT NOT NULL,
    date TIMESTAMP NOT NULL DEFAULT NOW()
)


CREATE TABLE IF NOT EXISTS links (
    id SERIAL PRIMARY KEY,
    project_id SERIAL,
    name VARCHAR(50) NOT NULL,
    icon VARCHAR(50) NOT NULL,
    description TEXT NOT NULL,
    link TEXT NOT NULL,
    date TIMESTAMP NOT NULL DEFAULT NOW(),
    FOREIGN KEY (project_id) REFERENCES projects (id)
        ON DELETE CASCADE
)

CREATE TABLE IF NOT EXISTS platforms (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    icon VARCHAR(255) NOT NULL,
)

CREATE TABLE IF NOT EXISTS apps (
    id SERIAL PRIMARY KEY,
    icon INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    platform INT NOT NULL,
    project_id SERIAL,
    CONSTRAINT fk_project_id FOREIGN KEY (project_id) REFERENCES projects (id)
    CONSTRAINT fk_platform_id FOREIGN KEY (platform_id) REFERENCES platforms (id)
)

CREATE TABLE IF NOT EXISTS deployments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    file VARCHAR(255) NOT NULL,
    icon VARCHAR(255) NOT NULL,
    date TIMESTAMP NOT NULL DEFAULT NOW()
    platform INT NOT NULL,
    app_id SERIAL,
    CONSTRAINT fk_app_id FOREIGN KEY (app_id) REFERENCES apps (id)
    CONSTRAINT fk_platform_id FOREIGN KEY (platform_id) REFERENCES platforms (id)
)

CREATE TABLE IF NOT EXISTS deploymentdata (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    changelog TEXT NOT NULL,
    description TEXT NOT NULL,
    date TIMESTAMP NOT NULL DEFAULT NOW()
    version VARCHAR(255) NOT NULL
    deployment UUID,
    CONSTRAINT fk_deployment FOREIGN KEY (fk_deployment) REFERENCES deployments (id)
)

