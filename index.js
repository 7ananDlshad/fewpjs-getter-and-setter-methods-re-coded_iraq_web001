// Add your Circle class here
class Circle{
  constructor(radius){
    this.radius = radius;
    this.pi = Math.PI
  }
  
  get diameter(){
    return   this.radius * 2
  }
  
  get circumference(){
   return this.pi * this.diameter
  }

  get area(){
   return this.pi * this.radius * this.radius
  }
  
  set diameter(radius){
   this.radius = radius
  }
  
  set circumference(diameter){
    this.diameter = diameter/2
  }
  
  set area(radius){
    this.radius = radius
  }
  
}
let circle = new Circle(6)
 circle.diameter = 36
 circle.circumference = 100