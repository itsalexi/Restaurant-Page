let menuItem = [];

class Food {
  constructor(name, price, desc) {
    this.name = name;
    this.price = price;
    this.desc = desc;
  }
}

function createFood(name, price, desc) {
  let food = new Food(name, price, desc);
  menuItem.push(food);
}

export { menuItem, createFood };
