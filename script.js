//complete this code
class Rectangle {
	constructor(width,height){
		this.width = width
		this.height = height
	}
	getWidth(){
		return this.width
	}
	getHeight(){
		return this.height
	}
	getArea(){
		console.log(this.width * this.height)
	}
}
	

class Square extends Rectangle {
	getPerimeter(){
		console.log(4*this.width)
	}
}
let rec = new Rectangle(2,4)
rec.getArea()
let squa = new Square(4)
squa.getPerimeter()

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
