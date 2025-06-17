-- Szenario 1: Trainerwechsel bei Team T02
DELETE FROM fussball.trainer_by_team 
WHERE team_id = 'T02' AND trainer_id = 'TR07';

INSERT INTO fussball.trainer_by_team (
    team_id, trainer_id, trainer_name, trainer_alter, trainer_lizenz
) VALUES (
    'T02', 'TR99', 'Jürgen Klopp', 56, 'UEFA Pro'
);

-- Szenario 2: Spielerposition und Geburtstag aktualisieren
UPDATE fussball.spieler_by_spiel 
SET position = 'Mittelfeld', geburtsdatum = '2001-05-21' 
WHERE spiel_id = 'S04' AND spieler_id = 'SP22';

-- Szenario 3: Spielort und Datum verschieben
UPDATE fussball.spieler_by_team 
SET ort = 'Leipzig', datum = '2024-11-01' 
WHERE team_id = 'T01' AND spiel_id = 'SP1001';
