import users from "../datas.json";
import usersFilter from "./utils/filters";

// Get the search parameters from the current URL
const searchParams = new URLSearchParams(window.location.search);

// Get an iterator for all the keys & values in the search parameters
const keysIterator = searchParams.keys();
const valuesIterator = searchParams.values();

// Convert the iterator to an array of keys & values
const queryKeys = Array.from(keysIterator);
const queryValues = Array.from(valuesIterator);

const tbody = document.getElementsByTagName("tbody")[0];

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

// Main render
usersFilter(users, queryKeys, queryValues).forEach((currentUser) => {
  createTableRow(currentUser);
});
