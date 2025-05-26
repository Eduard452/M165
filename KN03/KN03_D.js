db.Team.updateOne(
    { _id: ObjectId("683422f31c663cee247829d9") },  
    { 
        $set: { liga: "Challenge League", name: "Stadtclub Zürich" },
    }
);
// Resultat:
/*
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
*/

db.Spiel.updateMany(
    { 
        $or: [
            { ort: "Letzigrund, Zürich" },
            { datum: { $lt: new Date("2024-03-10") } }  
        ]
    },
    { 
        $set: { ort: "Lugano" },
    }
);
// Resultat:
 /*
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
*/

db.Spiel.replaceOne(
    { _id: ObjectId("683423031c663cee247829de") }, 
    {
        _id: ObjectId("683423031c663cee247829de"), 
        datum: new Date("2024-06-15"),  
        ort: "Letzigrund, Zürich",
        team_id: ObjectId("683422f31c663cee247829d9"),  
        spieler: [ObjectId("683422f31c663cee247829db"), ObjectId("683422f31c663cee247829dc")]
    }
);

// Resultat:
 /*
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
*/