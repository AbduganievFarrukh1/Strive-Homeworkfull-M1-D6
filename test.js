// const tree = function (height) {
//     for (let i = 0; i < height; i++) {
//       let stars = "*".repeat(2 * i + 1);
//       let spacesBefore = " ".repeat(height - i - 1);
//       console.log(spacesBefore + stars);
//     }
//   };
//   tree(10)


  //-------next task-------//
  const sumAllTheYears = function () {
    let result = 0;
    for (let i = 0; i < movies.length; i++) {
      result += parseInt(movies[i].Year);
    }
    return result;
  }
  console.log(rsumAllTheYear);
  