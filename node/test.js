import { useSyncExternalStore } from "react/cjs/react.production.min";

console.log(`
================
=              =
=     Hello    =
=              =
================`);

promises
  .readFile("database.json", "utf-8")
  .then((data) => JSON.parse(data))
  .then((json) => {
    console.log(json);
    jason.users;
  })
  .catch((error_) => {
    throw error_;
  });

promises
  .readFile("database.json", "utf-8")
  .then((data) => JSON.parse(data))
  .then((json) => {
    // Reassign a new array
    json.users = [
      { name: "Carolin", age: 18, hobbies: ["riding unicorns"] },
      ...json.users,
    ];
    // Modify the existing array
    json.users.unshift({
      name: "Marvin",
      age: 18,
      hobbies: ["pushing things into arrays"],
    });
    // We added two users

    console.log(json);
    promises.writeFile("database.json", JSON.stringify(json, null, 4));
  })
  .catch((error_) => {
    throw error_;
  });

async function addUser_() {
  const content = await promises.readFile("database.json", "utf-8");
  const data = JSON.parse(content);
  return data;
}

async function getDatabase() {
  const content = await promises.readFile("database.json", "utf-8");
  const data = JSON.parse(content);
  // console.log(data);
  return data;
}

async function addUser(user) {
  const data = await getDatabase();
  console.log(data);
  data.users.push(user);
  promises.writeFile("database.json", JSON.stringify(data, null, 4));
}

addUser({ name: "Anna", age: 19, hobbies: ["reading"] });
