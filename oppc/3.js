//Create a class Person with properties firstName and lastName. Add a method to return the full name. Instantiate an object and call the method.


class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
  fullnameofperson(fullname) {
    this.fullname = this.firstname + this.lastname;
 }
 display(){
  console.log(this.fullname);
 }
}
let names=new Person('raj','prajapati');
names.fullnameofperson();
names.display();
console.log();
let name2 = new Person('gaurang', 'chaudhary');
name2.fullnameofperson();
name2.display();

