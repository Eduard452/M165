db.Team.find({}, { "trainer.name": 1, "trainer.lizenz": 1 });

/*
Resultat:
{
  _id: ObjectId('683422f31c663cee247829d9'),
  trainer: {
    name: 'Ricardo Moniz',
    lizenz: 'UEFA Pro'
  }
}
*/

db.Team.aggregate([
    { $unwind: "$spieler" },
    { $match: { "spieler.position": "Torwart" } }
]);

/*
Resultat:
{
  _id: ObjectId('683422f31c663cee247829d9'),
  name: 'Stadtclub Zürich',
  'gründungsdatum': 1896-08-01T00:00:00.000Z,
  liga: 'Challenge League',
  trainer: {
    _id: ObjectId('683422f31c663cee247829da'),
    name: 'Ricardo Moniz',
    alter: 60,
    lizenz: 'UEFA Pro'
  },
  spieler: {
    _id: ObjectId('683422f31c663cee247829dd'),
    name: 'Yanick Brecher',
    position: 'Torwart',
    geburtsdatum: 1993-05-25T00:00:00.000Z,
    trikotnummer: 25
  }
}
*/

db.Team.aggregate([
    { $unwind: "$spieler" },
    { $project: { team: "$name", spielerName: "$spieler.name", position: "$spieler.position" } }
]);

/*
Resultat:
{
  _id: ObjectId('683422f31c663cee247829d9'),
  team: 'Stadtclub Zürich',
  spielerName: 'Antonio Marchesano',
  position: 'Mittelfeld'
}
{
  _id: ObjectId('683422f31c663cee247829d9'),
  team: 'Stadtclub Zürich',
  spielerName: 'Jonathan Okita',
  position: 'Stürmer'
}
{
  _id: ObjectId('683422f31c663cee247829d9'),
  team: 'Stadtclub Zürich',
  spielerName: 'Yanick Brecher',
  position: 'Torwart'
}
*/