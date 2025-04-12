function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((n, i) => n === arr2[i])

//   function compareArrays(arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//         return false; // Массивы разной длины не равны
//     }

//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] !== arr2[i]) {
//             return false; // Если хоть один элемент отличается, массивы не равны
//         }
//     }

//     return true; // Иначе они равны
}

function getUsersNamesInAgeRange(users, gender) {
    let result = users.filter(user => user.gender === gender).map(user => user.age);
    return result.length === 0 ? 0 : result.reduce((sum, age) => sum + age, 0) / result.length;
}

