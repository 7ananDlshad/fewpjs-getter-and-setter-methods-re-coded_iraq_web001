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
  
  set diameter(newdia){
   this.diameter = (newdia / 2)
  }
  
  set circumference(newcir){
    this.circumference = newcir/6
  }
  
  set area(radius){
    this.radius = radius
  }
  
}
let circle = new Circle(6)
 circle.diameter = 36
 circle.circumference = 100