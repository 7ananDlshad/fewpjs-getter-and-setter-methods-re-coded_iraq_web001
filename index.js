// Add your Circle class here
class Circle{
  constructor(radius){
    this.radius = radius;
    this.pi = Math.PI()
  }
  
  get diameter(){
    
  }
  
  get circumference(){
    
  }

  get area(){
    
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