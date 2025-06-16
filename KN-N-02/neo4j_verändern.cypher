// Szenario 1
MATCH (t:Trainer)
WHERE t.erfahrung > 10
SET t.lizenz = 
  CASE 
    WHEN t.lizenz = "C" THEN "B"
    WHEN t.lizenz = "B" THEN "A"
    ELSE t.lizenz
  END
RETURN t.name, t.lizenz

// Szenario 2
MATCH (t:Team)-[r:HAT_SPIELER]->(s:Spieler)
WHERE r.beitrittsDatum < date("2021-01-01")
SET r.langzeitmitglied = true
RETURN s.name, t.name, r.beitrittsDatum, r.langzeitmitglied

// Szenario 3
MATCH (t:Team)-[:NIMMT_TEIL]->(sp:Spiel)
WHERE sp.ort = "Berlin"
SET t.stadion = t.stadion + " - Nordtribüne"
RETURN t.name, t.stadion
