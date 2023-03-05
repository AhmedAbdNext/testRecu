import users from "../datas.json";
// Constants
const paramKeys = ["firstName", "lastName", "age", "email", "phone", "eyeColor"];
const eyeColors = ["blue", "brown", "green"];

// Get the search parameters from the current URL
const searchParams = new URLSearchParams(window.location.search);

// Get an iterator for all the keys & values in the search parameters
const keysIterator = searchParams.keys();
const valuesIterator = searchParams.values();

// Convert the iterator to an array of keys & values
const queryKeys = Array.from(keysIterator);
const queryValues = Array.from(valuesIterator);

const tbody = document.getElementsByTagName("tbody")[0];
// The function calculates the closest multiples of 5 to 'num' and return 5 years ranges
function findNearestMultipleOfFive(num) {
  const multiple = Math.round(num / 5) * 5;
  return multiple - num < 0 ? [multiple, multiple + 5] : [multiple - 5, multiple];
}
// Create a table cell
const createTableCell = (item) => {
  const cell = document.createElement("td");
  const cellText = document.createTextNode(item);
  cell.appendChild(cellText);
  return cell;
};
  // Create a table row
const createTableRow = (currentUser) => {
  const {
    _id, name, age, email, eyeColor, phone,
  } = currentUser;

  const row = document.createElement("tr");
  row.appendChild(createTableCell(_id));
  row.appendChild(createTableCell(name.first));
  row.appendChild(createTableCell(name.last));
  row.appendChild(createTableCell(age));
  row.appendChild(createTableCell(email));
  row.appendChild(createTableCell(eyeColor));
  row.appendChild(createTableCell(phone));
  tbody.appendChild(row);
};

// Filter users by the url qury params
const filterByQuery = (currentUser) => {
  let isVerified = true;
  queryKeys.forEach((key, index) => {
    if (key === "eyeColor" && !eyeColors.includes(queryValues[index])) {
      return;
    }
    if (key === "age") {
      const [min, max] = findNearestMultipleOfFive(queryValues[index]);
      isVerified = (currentUser[key]) >= min && (currentUser[key]) <= max;
    } else
    if (paramKeys.includes(key) && currentUser[key].toString() !== queryValues[index]) {
      isVerified = false;
    }
  });
  return isVerified;
};

// Set users by request parameters
const usersFilter = () => {
  if (queryKeys.length > 0) {
    return users.filter(filterByQuery);
  }
  return users;
};

// Main render
usersFilter().forEach((currentUser) => {
  createTableRow(currentUser);
});
