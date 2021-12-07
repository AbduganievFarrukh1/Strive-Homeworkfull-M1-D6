const tree = function (height) {
    for (let i = 0; i < height; i++) {
      let stars = "*".repeat(2 * i + 1);
      let spacesBefore = " ".repeat(height - i - 1);
      console.log(spacesBefore + stars);
    }
  };
  tree(10)