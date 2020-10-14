// Exercise 1
//
// 1. Write a function that accepts the object below, a key and a value and returns the objects that contain the same key/value pair
// e.g. getData(staffMembers, 'title', 'Web Developer II') returns
// [
//   {
//     name: "Jane Smith",
//     title: "Web Developer II",
//     skillLevels: {
//       javascript: 7,
//       python: 4,
//       sql: 6,
//     },
//   },
// ];

// - If the provided key is any of the skillLevel items, you should return all objects that have skill levels at least that high.
// e.g. getdata(staffMembers, 'sql', 7) returns
// [
//   {
//     name: "Steve Rogers",
//     title: "Database Admin",
//     skillLevels: {
//       javascript: 7,
//       python: 4,
//       sql: 9,
//     },
//   },
//   {
//     name: "Chuck Taylor",
//     title: "Web Developer III",
//     skillLevels: {
//       javascript: 8,
//       python: 7,
//       sql: 8,
//     },
//   },
// ];

const staffMembers = [
  {
    name: "Jane Smith",
    title: "Web Developer II",
    skillLevels: {
      javascript: 7,
      python: 4,
      sql: 6,
    },
  },
  {
    name: "Frank Castle",
    title: "Web Developer I",
    skillLevels: {
      javascript: 4,
      python: 4,
      sql: 3,
    },
  },
  {
    name: "Steve Rogers",
    title: "Database Admin",
    skillLevels: {
      javascript: 7,
      python: 4,
      sql: 9,
    },
  },
  {
    name: "Chuck Taylor",
    title: "Web Developer III",
    skillLevels: {
      javascript: 8,
      python: 7,
      sql: 8,
    },
  },
  {
    name: "Thor Odinson",
    title: "Web Intern",
    skillLevels: {
      javascript: 4,
      python: 3,
      sql: 6,
    },
  },
];

//use filter, to reduce to smaller rray which will contain our results
const getData = (arr, key, val) => {
  
let newArr = arr.filter(person => {
    if(typeof val === "string"){
      if (person[key] === val) return true
      else return false
    } else if (typeof val === "number") {
      if(person.skillLevels[key] >= val) return true
      else return false
    }
});
  return newArr;
};

// 2. Do a console.log to verify your function.

// 3. Run the test to validate: yarn test exercise-5

module.exports = { getData, staffMembers };
