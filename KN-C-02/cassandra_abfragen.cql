-- Alle Trainer für Team T01 anzeigen
SELECT * FROM trainer_by_team WHERE team_id = 'T01';

-- Alle Spiele mit Spielern für Team T02 anzeigen
SELECT * FROM spieler_by_team WHERE team_id = 'T02';

-- Alle Spieler im Spiel S01 anzeigen
SELECT * FROM spieler_by_spiel WHERE spiel_id = 'S01';

-- Spieler-Daten (Position, Name, Geburtstag) im Spiel S03 anzeigen
SELECT name, position, geburtsdatum FROM spieler_by_spiel WHERE spiel_id = 'S03';
