// Alle Knoten und Kanten
MATCH (n)-[r]->(m)
RETURN n, r, m

// Szenario 1
MATCH (s:Spieler)-[:SPIELT]->(sp:Spiel)
WHERE sp.ort = "Berlin"
RETURN s.name AS Spieler, s.position AS Position, sp.ort AS Ort, sp.datum AS Spieltag

// Szenario 2
MATCH (t:Team)-[hs:HAT_SPIELER]->(s:Spieler)
WHERE s.nationalität = "Deutschland"
RETURN t.name AS Team, s.name AS Spieler, s.nationalität, hs.beitrittsDatum

// Szenario 3
MATCH (t:Trainer)-[:TRAINIERT]->(team:Team)
OPTIONAL MATCH (team)-[:HAT_SPIELER]->(s:Spieler)
RETURN t.name AS Trainer, team.name AS Team, s.name AS Spieler
ORDER BY t.name, team.name

// Szenario 4
MATCH (s:Spieler)-[:SPIELT]->(:Spiel)
MATCH (t:Team)-[:HAT_SPIELER]->(s)
WHERE s.groesse > 180 AND t.liga = "Bundesliga"
RETURN s.name AS Spieler, s.groesse AS Größe, t.name AS Team