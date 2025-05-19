use Mersini

db.createUser({
  user: "leser",
  pwd: "Hallo12",
  roles: [
    { role: "read", db: "Mersini" }
  ]
})

use Mersini

db.createUser({
  user: "editor",
  pwd: "Bye12",
  roles: [
    { role: "readWrite", db: "Mersini" }
  ]
})