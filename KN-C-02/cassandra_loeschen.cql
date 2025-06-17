-- Lösche gezielt eine Zeile über Partition- und Cluster-Key
DELETE FROM trainer_by_team WHERE team_id = 'T01' AND trainer_id = 'TR05';

-- Lösche nur die Spalte "name" für eine bestimmte Zeile
DELETE name FROM trainer_by_team WHERE team_id = 'T01' AND trainer_id = 'TR03';

-- Beispiel für andere Tabelle: Spieler im Spiel S01 löschen
DELETE FROM spieler_by_spiel WHERE spiel_id = 'S01' AND spieler_id = 'SP12';


-- Lösche alle Inhalte aus trainer_by_team
TRUNCATE trainer_by_team;

-- Lösche alle Inhalte aus spieler_by_team
TRUNCATE spieler_by_team;

-- Lösche alle Inhalte aus spieler_by_spiel
TRUNCATE spieler_by_spiel;
