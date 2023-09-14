class Rectangle {
  constructor(_width, _height, _color) {
    this.width = _width;
    this.height = _height;
    this.color = _color;
  }
  getRectangleArea() {
    return `The area of the ${this.color} rectangle is ${
      this.width * this.height
    }`;
  }

  set anotherObject(value) {
    this.width = value;
    this.height = value;
    this.color = "orange";
  }

  get theAreas() {
    return `The area of the ${this.color} rectangle is now ${
      this.width * this.height
    } meters`;
  }
}

const rect1 = new Rectangle(5, 3, "skyblue");

const rect2 = new Rectangle(9, 4, "darkgreen");

document.write(`<span style='font-family: "Trirong", serif; color:
#FFF'>${rect1.getRectangleArea()} </span> </br>`);

document.write(`<span style='font-family: "Trirong", serif; color:
#FFF'>${rect2.getRectangleArea()} </span> </br>`);

const rect3 = new Rectangle(0, 0, undefined);

rect3.anotherObject = 30;

document.write(`<span style='font-family: "Trirong", serif; color:
#FFF'>${rect3.theAreas} </span>`);
