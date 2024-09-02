//Create a class Rectangle with properties width and height. Add a method to calculate the area. Instantiate an object and call the method.

class Rectangle {
  constructor(width, height) {

    this.width = width;
    this.height = height;
  }
  // area(){
  //   r=this.height*this.width
  // }
  display(){
    console.log(`area of Rectangle is: ${this.width*this.height}`)
  }

}
let Rectangle1=new Rectangle(20,30)
Rectangle1.display();
console.log()

let Rectangle2 = new Rectangle(15,45);
Rectangle2.display();
console.log();

let Rectangle3 = new Rectangle(20, 60);
Rectangle3.display();
console.log();


