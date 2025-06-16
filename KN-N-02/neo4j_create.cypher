CREATE
  // Trainer
  (t1:Trainer {
    name: "Hans Müller",
    lizenz: "A",
    geburtsdatum: date("1975-04-12"),
    erfahrung: 15,
    nationalität: "Deutschland"
  }),
  (t2:Trainer {
    name: "Sabine Becker",
    lizenz: "B",
    geburtsdatum: date("1980-07-22"),
    erfahrung: 10,
    nationalität: "Österreich"
  }),
  (t3:Trainer {
    name: "Ali Özdemir",
    lizenz: "C",
    geburtsdatum: date("1985-11-30"),
    erfahrung: 8,
    nationalität: "Türkei"
  }),

  // Teams
  (team1:Team {
    name: "FC Dynamo",
    liga: "Bundesliga",
    gruendungsdatum: date("1990-05-12"),
    stadion: "Olympiastadion",
    stadt: "Berlin",
    farben: "Blau-Weiß"
  }),
  (team2:Team {
    name: "SV Adler",
    liga: "Regionalliga",
    gruendungsdatum: date("2002-08-23"),
    stadion: "Adler Arena",
    stadt: "Hamburg",
    farben: "Rot-Schwarz"
  }),
  (team3:Team {
    name: "SC Falken",
    liga: "Oberliga",
    gruendungsdatum: date("1985-03-15"),
    stadion: "Falken Park",
    stadt: "München",
    farben: "Grün-Gelb"
  }),

  // Trainer trainiert Team
  (t1)-[:TRAINIERT]->(team1),
  (t2)-[:TRAINIERT]->(team2),
  (t3)-[:TRAINIERT]->(team3),

  // Spieler
  (s1:Spieler {
    name: "Max Meier",
    position: "Stürmer",
    trikotnummer: 9,
    geburtsdatum: date("1998-03-04"),
    nationalität: "Deutschland",
    groesse: 185,
    gewicht: 80
  }),
  (s2:Spieler {
    name: "Lena Schulz",
    position: "Torwart",
    trikotnummer: 1,
    geburtsdatum: date("2000-06-14"),
    nationalität: "Deutschland",
    groesse: 178,
    gewicht: 70
  }),
  (s3:Spieler {
    name: "Tobias Klein",
    position: "Verteidiger",
    trikotnummer: 4,
    geburtsdatum: date("1995-12-22"),
    nationalität: "Schweiz",
    groesse: 182,
    gewicht: 76
  }),
  (s4:Spieler {
    name: "Julia Sommer",
    position: "Mittelfeld",
    trikotnummer: 8,
    geburtsdatum: date("1999-09-09"),
    nationalität: "Österreich",
    groesse: 170,
    gewicht: 65
  }),
  (s5:Spieler {
    name: "David Braun",
    position: "Stürmer",
    trikotnummer: 11,
    geburtsdatum: date("2001-01-27"),
    nationalität: "Deutschland",
    groesse: 188,
    gewicht: 83
  }),

  // Spieler gehören zu Teams
  (team1)-[:HAT_SPIELER {beitrittsDatum: date("2020-07-01")}]->(s1),
  (team1)-[:HAT_SPIELER {beitrittsDatum: date("2021-01-15")}]->(s2),
  (team2)-[:HAT_SPIELER {beitrittsDatum: date("2019-09-10")}]->(s3),
  (team3)-[:HAT_SPIELER {beitrittsDatum: date("2022-03-05")}]->(s4),
  (team3)-[:HAT_SPIELER {beitrittsDatum: date("2021-11-20")}]->(s5),

  // Spiele
  (game1:Spiel {ort: "Berlin", datum: date("2024-09-20")}),
  (game2:Spiel {ort: "Hamburg", datum: date("2024-10-05")}),
  (game3:Spiel {ort: "München", datum: date("2024-11-12")}),

  // Teams nehmen an Spielen teil
  (team1)-[:NIMMT_TEIL]->(game1),
  (team2)-[:NIMMT_TEIL]->(game1),
  (team2)-[:NIMMT_TEIL]->(game2),
  (team3)-[:NIMMT_TEIL]->(game2),
  (team3)-[:NIMMT_TEIL]->(game3),

  // Spieler spielen in Spielen
  (s1)-[:SPIELT]->(game1),
  (s2)-[:SPIELT]->(game1),
  (s3)-[:SPIELT]->(game2),
  (s4)-[:SPIELT]->(game2),
  (s5)-[:SPIELT]->(game3);