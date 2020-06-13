// Add your Circle class here
class Circle{
  constructor(radius){
    this.radius = radius;
    this.pi = Math.PI()
  }
  
  get diameter(){
        return `diameter equal to  ${this.diameter}`;
  }
  
  get circumference(){
    return `circumference equal to  ${this.circumference}`;
  }

  get area(){
    return `area equal to  ${this.area}`;
  }
  
  set diameter(radius){
    this.diameter = radius * 2
  }
  
  set circumference(diameter){
     this.circumference = this.pi * diameter
  }
  
  set area(radius){
    this.area = this.pi * radius * radius
  }
  
}
let circle = new Circle(6)