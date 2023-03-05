// Constants
const eyeColors = ["blue", "brown", "green"];

// The function calculates the closest multiples of 5 to 'num' and return 5 years ranges
export const findNearestMultipleOfFive = (num) => {
  const multiple = Math.round(num / 5) * 5;
  return multiple - num < 0 ? [multiple, multiple + 5] : [multiple - 5, multiple];
};

// Filter users by the url qury params
export const filterByQuery = (currentUser, queryKeys, queryValues) => {
  let isVerified = true;
  queryKeys.forEach((key, index) => {
    if (key === "eyeColor" && !eyeColors.includes(queryValues[index])) {
      return;
    }
    if (isVerified && [ "email", "phone", "eyeColor"].includes(key) && currentUser[key] !== queryValues[index]) {
      isVerified = false
    }
    if (isVerified && key === "age") {
      const [min, max] = findNearestMultipleOfFive(queryValues[index]);
      isVerified = (currentUser[key]) >= min && (currentUser[key]) <= max;
    }
    if (isVerified && key === "lastName" && currentUser.name.last !== queryValues[index]) {
      isVerified = false
    }
    if (isVerified && key === "firstName" && currentUser.name.first !== queryValues[index]) {
      isVerified = false
    }
  });

  return isVerified;
};

// Set users by request parameters
const usersFilter = (users, queryKeys, queryValues) => {
  if (queryKeys.length > 0) {
    return users.filter((currentUser) => filterByQuery(currentUser, queryKeys, queryValues));
  }
  return users;
};

export default usersFilter;
