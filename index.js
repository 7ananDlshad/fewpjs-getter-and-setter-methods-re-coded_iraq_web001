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
    this.diameter = diameter
  }
  
  set area(radius){
    this.radius = radius
  }
  
}
let circle = new Circle(6)
circle.radius
circle.diameter
circle.circumference
circle.area