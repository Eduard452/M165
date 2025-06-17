-- Trainer-Daten
INSERT INTO trainer_by_team (team_id, trainer_id, trainer_name, trainer_alter, trainer_lizenz)
VALUES ('T01', 'TR01', 'Hans Meier', 45, 'UEFA A');

INSERT INTO trainer_by_team (team_id, trainer_id, trainer_name, trainer_alter, trainer_lizenz)
VALUES ('T01', 'TR02', 'Peter Weber', 42, 'UEFA B');

INSERT INTO trainer_by_team (team_id, trainer_id, trainer_name, trainer_alter, trainer_lizenz)
VALUES ('T02', 'TR03', 'Sabine König', 39, 'UEFA Pro');

INSERT INTO trainer_by_team (team_id, trainer_id, trainer_name, trainer_alter, trainer_lizenz)
VALUES ('T02', 'TR04', 'Michael Berg', 48, 'UEFA A');

-- Spieler nach Team
INSERT INTO spieler_by_team (team_id, spiel_id, ort, datum, spieler_ids)
VALUES ('T01', 'S01', 'Berlin', '2025-05-12', ['SP01', 'SP02', 'SP03']);

INSERT INTO spieler_by_team (team_id, spiel_id, ort, datum, spieler_ids)
VALUES ('T01', 'S02', 'Leipzig', '2025-06-01', ['SP02', 'SP04']);

INSERT INTO spieler_by_team (team_id, spiel_id, ort, datum, spieler_ids)
VALUES ('T02', 'S03', 'Hamburg', '2025-05-28', ['SP05', 'SP06']);

INSERT INTO spieler_by_team (team_id, spiel_id, ort, datum, spieler_ids)
VALUES ('T02', 'S04', 'Stuttgart', '2025-06-10', ['SP05', 'SP07']);

-- Spieler nach Spiel
INSERT INTO spieler_by_spiel (spieler_id, spiel_id, name, position, geburtsdatum)
VALUES ('SP01', 'S01', 'Lukas Mayer', 'Torwart', '1998-03-20');

INSERT INTO spieler_by_spiel (spieler_id, spiel_id, name, position, geburtsdatum)
VALUES ('SP02', 'S01', 'Jonas Schulz', 'Verteidiger', '1997-08-15');

INSERT INTO spieler_by_spiel (spieler_id, spiel_id, name, position, geburtsdatum)
VALUES ('SP03', 'S01', 'Tim Fischer', 'Mittelfeld', '1996-01-30');

INSERT INTO spieler_by_spiel (spieler_id, spiel_id, name, position, geburtsdatum)
VALUES ('SP04', 'S02', 'Daniel Roth', 'Stürmer', '1999-12-10');

INSERT INTO spieler_by_spiel (spieler_id, spiel_id, name, position, geburtsdatum)
VALUES ('SP05', 'S03', 'Marco Klein', 'Torwart', '1995-05-05');

INSERT INTO spieler_by_spiel (spieler_id, spiel_id, name, position, geburtsdatum)
VALUES ('SP06', 'S03', 'Florian Braun', 'Verteidiger', '1994-09-22');

INSERT INTO spieler_by_spiel (spieler_id, spiel_id, name, position, geburtsdatum)
VALUES ('SP07', 'S04', 'Kevin Schwarz', 'Mittelfeld', '1993-07-19');
