// Mit Detach
MATCH (s:Spieler {name: "Max Meier"})
DETACH DELETE s

// Ohne Detach
MATCH (s:Spieler {name: "Max Meier"})
DELETE s
