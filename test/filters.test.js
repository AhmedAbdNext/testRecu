import usersFilter, { findNearestMultipleOfFive } from "../src/utils/filters";
import users from "../datas.json";

test("should find the multiple closest to the five", () => {
    expect(findNearestMultipleOfFive(23)).toEqual([20, 25]);
    expect(findNearestMultipleOfFive(25)).toEqual([20, 25]);
    expect(findNearestMultipleOfFive(12)).toEqual([10, 15]);
    expect(findNearestMultipleOfFive(4)).toEqual([0, 5]);
    expect(findNearestMultipleOfFive(99)).toEqual([95, 100]);
});

test("should return all users", () => {
    // ["firstName", "lastName", "age", "email", "phone", "eyeColor"]
    const results = usersFilter(users, [], [])
    expect(results.length).toEqual(100);
    expect(results[0]).toMatchObject({
        "_id": "5f0c554442ea1b1fc6cc5b75",
        "name": {
            "first": "Henson",
            "last": "Jacobson",
        },
        "phone": "+1 (846) 597-3879",
        "email": "henson.jacobson@delphide.org",

    });
    expect(results[20]).toMatchObject({
        "_id": "5f0c5544f1c1636dc0a470ba",
        "name": {
            "first": "Josefina",
            "last": "Charles",
        },
        "phone": "+1 (960) 470-3418",
        "email": "josefina.charles@updat.com",
    });
});

test('should return users filtered by eye color', () => {
    const queryKeys = ["eyeColor"];
    const queryValues = ["blue"];
    const results = usersFilter(users, queryKeys, queryValues)
    expect(results.length).toEqual(42);
    expect(results[0]).toMatchObject({
        "age": 38,
        "eyeColor": "blue",
        "name": {
            "first": "Henson",
            "last": "Jacobson"
        },
        "company": "DELPHIDE",
        "email": "henson.jacobson@delphide.org",
        "phone": "+1 (846) 597-3879",
    });
});

test('should return users filtered by age and eye color', () => {
    const queryKeys = ["age", "eyeColor"];
    const queryValues = [31, "blue"];
    const results = usersFilter(users, queryKeys, queryValues)
    expect(results.length).toEqual(19);
    expect(results[0]).toMatchObject({
        "_id": "5f0c55442a107f2360204a5f",
        "email": "phyllis.hester@globoil.us",
        "name": {
            "first": "Phyllis",
            "last": "Hester"
        },
        "phone": "+1 (854) 500-3629",
    });
});

test('should return users filtered by last name', () => {
    const queryKeys = ["lastName"];
    const queryValues = ["Mejia"];
    const results = usersFilter(users, queryKeys, queryValues)
    expect(results.length).toEqual(1);
    expect(results[0]).toMatchObject({
        "name": {
            "first": "Leola",
            "last": "Mejia"
        },
    })
});

test('should return users filtered by email', () => {
    const queryKeys = ["email"];
    const queryValues = ["kathleen.mcleod@emoltra.org"];
    const results = usersFilter(users, queryKeys, queryValues)
    expect(results.length).toEqual(1);
    expect(results[0]).toMatchObject({
        "name": {
            "first": "Kathleen",
            "last": "Mcleod"
          },
          "company": "EMOLTRA",
          "email": "kathleen.mcleod@emoltra.org",
    })

});

test('should return users filtered by last name, age and eye color', () => {
    const queryKeys = ["lastName", "age", "eyeColor"];
    const queryValues = ["Hester", 31, "blue"];
    const results = usersFilter(users, queryKeys, queryValues)
    expect(results.length).toEqual(1);
    expect(results[0]).toMatchObject({
        "name": {
            "first": "Phyllis",
            "last": "Hester"
        },
    })

});

test('should not return users filtered by last name and age ', () => {
    const queryKeys = ["lastName", "age"];
    const queryValues = ["Hester", 41];
    const results = usersFilter(users, queryKeys, queryValues)
    expect(results.length).toEqual(0);

});


