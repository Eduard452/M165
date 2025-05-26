db.Spiel.aggregate([
    { $match: { ort: "Letzigrund, Zürich" } },
    { $match: { datum: { $gte: new Date("2024-01-01") } } }
]);

/* 
Resultat:
{
  _id: ObjectId('683423031c663cee247829de'),
  datum: 2024-06-15T00:00:00.000Z,
  ort: 'Letzigrund, Zürich',
  team_id: ObjectId('683422f31c663cee247829d9'),
  spieler: [
    ObjectId('683422f31c663cee247829db'),
    ObjectId('683422f31c663cee247829dc')
  ]
}
*/

db.Team.aggregate([
    { $match: { "spieler.position": "Stürmer" } },
    { $project: { name: 1, "trainer.name": 1, anzahlSpieler: { $size: "$spieler" } } },
    { $sort: { anzahlSpieler: -1 } }
]);

/* 
Resultat:
{
  _id: ObjectId('683422f31c663cee247829d9'),
  name: 'Stadtclub Zürich',
  trainer: {
    name: 'Ricardo Moniz'
  },
  anzahlSpieler: 3
}
*/


// 4. $group – Anzahl Spiele pro Ort
db.Spiel.aggregate([
    {
        $group: {
            _id: "$ort",
            spieleAnzahl: { $sum: 1 }
        }
    }
]);

/* 
Resultat:
{
  _id: 'St. Jakob-Park, Basel',
  spieleAnzahl: 1
}
{
  _id: 'Wankdorf, Bern',
  spieleAnzahl: 2
}
{
  _id: 'Letzigrund, Zürich',
  spieleAnzahl: 1
}
*/