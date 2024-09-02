// Create a class Car with properties make, model, and year. Instantiate an object of the Car class with specific values and print its properties.

class Car {
  constructor(compny,model,color,year) {
    this.compny=compny
    this.model=model
    this.color=color
    this.year = year;

  }
  display(){

    console.log(this.compny);
    console.log(this.model);
    console.log(this.color);
    console.log(this.year);

  }

}
 let car= new Car ('BMW','X5','black',2025);
 car.display();
 console.log()

  let car2 = new Car('AUDI', 'R8', 'red', 2023);
  car2.display();
  console.log();

  let car3 = new Car('mercedes', 'G-wagon', 'black', 2024);
  car3.display();


