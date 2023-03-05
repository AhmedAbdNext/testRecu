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

// The function calculates the closest multiples of 5 to 'num' and return 5 years ranges
function findNearestMultipleOfFive(num) {
  const multiple = Math.round(num / 5) * 5;
  return multiple - num < 0 ? [multiple, multiple + 5] : [multiple - 5, multiple];
}

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
const usersFilter = (users) => {
  if (queryKeys.length > 0) {
    return users.filter(filterByQuery);
  }
  return users;
};

export default usersFilter;
