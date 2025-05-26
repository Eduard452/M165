// Collection: Team
db.Team.insertOne({
    _id: ObjectId(),
    name: "FC Zürich",
    gründungsdatum: new Date("1896-08-01"),
    liga: "Super League",
    trainer: {
        _id: ObjectId(),
        name: "Ricardo Moniz",
        alter: 60,
        lizenz: "UEFA Pro"
    },
    spieler: [
        {
            _id: ObjectId(),
            name: "Antonio Marchesano",
            position: "Mittelfeld",
            geburtsdatum: new Date("1991-01-18"),
            trikotnummer: 10
        },
        {
            _id: ObjectId(),
            name: "Jonathan Okita",
            position: "Stürmer",
            geburtsdatum: new Date("1996-10-05"),
            trikotnummer: 11
        },
        {
            _id: ObjectId(),
            name: "Yanick Brecher",
            position: "Torwart",
            geburtsdatum: new Date("1993-05-25"),
            trikotnummer: 25
        }
    ]
});

// Resultat
{
  acknowledged: true,
  insertedId: ObjectId('683412b54802a8c6ee9b9686')
}

// Collection: Spiel
db.Spiel.insertMany([
    {
        _id: ObjectId(),
        datum: new Date("2024-03-01"),
        ort: "Letzigrund, Zürich",
        team_id: db.Team.findOne({ name: "FC Zürich" })._id,
        spieler: [
            db.Team.findOne({ name: "FC Zürich" }).spieler[0]._id,
            db.Team.findOne({ name: "FC Zürich" }).spieler[1]._id
        ]
    },
    {
        _id: ObjectId(),
        datum: new Date("2024-03-10"),
        ort: "St. Jakob-Park, Basel",
        team_id: db.Team.findOne({ name: "FC Zürich" })._id,
        spieler: [
            db.Team.findOne({ name: "FC Zürich" }).spieler[1]._id,
            db.Team.findOne({ name: "FC Zürich" }).spieler[2]._id
        ]
    },
    {
        _id: ObjectId(),
        datum: new Date("2024-03-17"),
        ort: "Wankdorf, Bern",
        team_id: db.Team.findOne({ name: "FC Zürich" })._id,
        spieler: [
            db.Team.findOne({ name: "FC Zürich" }).spieler[0]._id,
            db.Team.findOne({ name: "FC Zürich" }).spieler[2]._id
        ]
    }
]);

// Resultat
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('683412f04802a8c6ee9b968b'),
    '1': ObjectId('683412f04802a8c6ee9b968c'),
    '2': ObjectId('683412f14802a8c6ee9b968d')
  }
}