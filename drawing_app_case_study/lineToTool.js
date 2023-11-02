//create a constructor function that adds a new tool which can create lines. (create function with image "assets/lineTo.jpg" as the icon. Set name to "LineTo" and create variables and assign dummy values.) 
function LineToTool(){		
	this.icon = "assets/lineTo.jpg";		
	this.name = "LineTo";		
	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;

//create method that draws line  
	this.draw = function(){
		
		//conditionally on if mouse is pressed(left or right) and movement of mouse.
		if(mouseIsPressed){
			if(startMouseX == -1){
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
				//store pixel data into array (copy of pixels in memory)
				loadPixels();
			}
			
			//update/hide the canvas with stored pixels above.
			else{
				updatePixels();
				line(startMouseX, startMouseY, mouseX, mouseY);
			}

		}

		//store and reset variables
		else if(drawing){
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};


}
