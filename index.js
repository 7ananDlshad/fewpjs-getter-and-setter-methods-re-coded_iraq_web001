// Add your Circle class here
class Circle{
  constructor(radius){
    this.radius = radius;
    this.pi = Math.PI
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
  
  set diameter(){
    this.diameter = this.radius * 2
  }
  
  set circumference(){
     this.circumference = this.pi * this.diameter
  }
  
  set area(){
    this.area = this.pi * this.radius * this.radius
  }
  
}
let circle = new Circle(6)