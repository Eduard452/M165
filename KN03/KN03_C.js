db.Team.find({
    $or: [
        { liga: "Super League" },
        { liga: "Challenge League" }
    ]
});

// Restultat:
/*
{
  _id: ObjectId('683422f31c663cee247829d9'),
  name: 'FC Zürich',
  'gründungsdatum': 1896-08-01T00:00:00.000Z,
  liga: 'Super League',
  trainer: {
    _id: ObjectId('683422f31c663cee247829da'),
    name: 'Ricardo Moniz',
    alter: 60,
    lizenz: 'UEFA Pro'
  },
  spieler: [
    {
      _id: ObjectId('683422f31c663cee247829db'),
      name: 'Antonio Marchesano',
      position: 'Mittelfeld',
      geburtsdatum: 1991-01-18T00:00:00.000Z,
      trikotnummer: 10
    },
    {
      _id: ObjectId('683422f31c663cee247829dc'),
      name: 'Jonathan Okita',
      position: 'Stürmer',
      geburtsdatum: 1996-10-05T00:00:00.000Z,
      trikotnummer: 11
    },
    {
      _id: ObjectId('683422f31c663cee247829dd'),
      name: 'Yanick Brecher',
      position: 'Torwart',
      geburtsdatum: 1993-05-25T00:00:00.000Z,
      trikotnummer: 25
    }
  ]
}
*/

db.Spiel.find({
    datum: { $gt: new Date("2024-03-10") }
});

// Resultat:
/*
{
  _id: ObjectId('683419d84802a8c6ee9b9696'),
  datum: 2024-03-17T00:00:00.000Z,
  ort: 'Wankdorf, Bern',
  team_id: ObjectId('683419a34802a8c6ee9b968f'),
  spieler: [
    ObjectId('683419a34802a8c6ee9b9691'),
    ObjectId('683419a34802a8c6ee9b9693')
  ]
}
*/ 

db.Team.find({
    name: { $regex: "Zürich", $options: "i" }
});

// Resultat:
/*
 {
  _id: ObjectId('683422f31c663cee247829d9'),
  name: 'FC Zürich',
  'gründungsdatum': 1896-08-01T00:00:00.000Z,
  liga: 'Super League',
  trainer: {
    _id: ObjectId('683422f31c663cee247829da'),
    name: 'Ricardo Moniz',
    alter: 60,
    lizenz: 'UEFA Pro'
  },
  spieler: [
    {
      _id: ObjectId('683422f31c663cee247829db'),
      name: 'Antonio Marchesano',
      position: 'Mittelfeld',
      geburtsdatum: 1991-01-18T00:00:00.000Z,
      trikotnummer: 10
    },
    {
      _id: ObjectId('683422f31c663cee247829dc'),
      name: 'Jonathan Okita',
      position: 'Stürmer',
      geburtsdatum: 1996-10-05T00:00:00.000Z,
      trikotnummer: 11
    },
    {
      _id: ObjectId('683422f31c663cee247829dd'),
      name: 'Yanick Brecher',
      position: 'Torwart',
      geburtsdatum: 1993-05-25T00:00:00.000Z,
      trikotnummer: 25
    }
  ]
}
*/ 

db.Spiel.find({
    ort: "St. Jakob-Park, Basel",
    team_id: ObjectId("683422f31c663cee247829d9")
});

// Resultat:
/*
{
  _id: ObjectId('683423031c663cee247829df'),
  datum: 2024-03-10T00:00:00.000Z,
  ort: 'St. Jakob-Park, Basel',
  team_id: ObjectId('683422f31c663cee247829d9'),
  spieler: [
    ObjectId('683422f31c663cee247829dc'),
    ObjectId('683422f31c663cee247829dd')
  ]
}
*/

db.Team.find({}, { name: 1, liga: 1 });

// Resultat:
/*
{
  _id: ObjectId('683422f31c663cee247829d9'),
  name: 'FC Zürich',
  liga: 'Super League'
}
*/

db.Spiel.find({}, { _id: 0, datum: 1, ort: 1 });

// Resultat:   
/*
{
  datum: 2024-03-17T00:00:00.000Z,
  ort: 'Wankdorf, Bern'
}
{
  datum: 2024-03-01T00:00:00.000Z,
  ort: 'Letzigrund, Zürich'
}
{
  datum: 2024-03-10T00:00:00.000Z,
  ort: 'St. Jakob-Park, Basel'
}
{
  datum: 2024-03-17T00:00:00.000Z,
  ort: 'Wankdorf, Bern'
}
*/