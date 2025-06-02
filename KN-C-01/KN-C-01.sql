-- 1. Keyspace erstellen
CREATE KEYSPACE fussball
WITH replication = {
    'class': 'SimpleStrategy',
    'replication_factor': 1
};

USE fussball;

-- 2. Trainer pro Team
CREATE TABLE trainer_by_team (
    team_id UUID,
    trainer_id UUID,
    trainer_name TEXT,
    trainer_alter INT,
    trainer_lizenz TEXT,
    PRIMARY KEY (team_id, trainer_id)
);


-- 3. Spieler pro Spiel
CREATE TABLE spieler_by_spiel (
    spiel_id UUID,
    spieler_id UUID,
    name TEXT,
    position TEXT,
    geburtsdatum DATE,
    trikotnummer INT,
    PRIMARY KEY (spiel_id, spieler_id)
);

-- 4. Spiele pro Team
CREATE TABLE spiele_by_team (
    team_id UUID,
    spiel_id UUID,
    datum DATE,
    ort TEXT,
    spieler_ids LIST<UUID>,
    PRIMARY KEY (team_id, spiel_id)
);