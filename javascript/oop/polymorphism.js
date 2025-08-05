class Shape {
  area() { //parent
    console.log("Calculating area...");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() { //child
    console.log(`Circle area: ${Math.PI * this.radius ** 2}`);
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  area() {
    console.log(`Rectangle area: ${this.width * this.height}`);
  }
}

let circle1 = new Circle(5);
circle1.area();

let rectangle1 = new Rectangle(4, 6);
rectangle1.area();

//Output:
//Circle area: 78.54
//Rectangle area: 28

//polymorphism is used here, the same method name is used in different classes, conflict of naming
//take the child not the parent