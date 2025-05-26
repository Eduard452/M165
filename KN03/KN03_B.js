// Verbindung zur Datenbank herstellen
db.Team.drop();
db.Spiel.drop();

// Resultat:
/*
true
*/

// Einzelnen Datensatz aus der Team-Collection anhand der _id löschen
db.Team.deleteOne({ _id: ObjectId("683412f04802a8c6ee9b968b") });

// Resultat:
/*
{
  acknowledged: true,
  deletedCount: 1
}
*/

// Mehrere Datensätze aus der Spiel-Collection mit ODER-Verknüpfung löschen
db.Spiel.deleteMany({
    $or: [
        { _id: ObjectId("683419d84802a8c6ee9b9694") },
        { _id: ObjectId("683419d84802a8c6ee9b9695") }
    ]
});

// Resultat:
/*
{
  acknowledged: true,
  deletedCount: 2
}
*/