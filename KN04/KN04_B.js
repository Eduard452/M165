db.Spiel.aggregate([
    {
        $lookup: {
            from: "Team",
            localField: "team_id",
            foreignField: "_id",
            as: "teamInfo"
        }
    }
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
  ],
  teamInfo: [
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
  ]
}
*/
db.Spiel.aggregate([
    {
      $match: { ort: "Letzigrund, Zürich" }
    },
    {
      $lookup: {
        from: "Team",
        localField: "team_id",
        foreignField: "_id",
        as: "Match_Infos"
      }
    },
    {
      $project: {
        datum: 1,
        ort: 1,
        "Match_Infos.name": 1,
        "Match_Infos.trainer.name": 1,
        "Match_Infos.spieler": 1
      }
    }
  ]);

/*
Resultat:
{
  _id: ObjectId('683423031c663cee247829de'),
  datum: 2024-06-15T00:00:00.000Z,
  ort: 'Letzigrund, Zürich',
  Match_Infos: [
    {
      name: 'Stadtclub Zürich',
      trainer: {
        name: 'Ricardo Moniz'
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
  ]
}
*/

