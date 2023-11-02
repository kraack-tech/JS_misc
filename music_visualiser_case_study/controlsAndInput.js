//Constructor function to handle the onscreen menu, keyboard and mouse
//controls
function ControlsAndInput(){
	
	this.menuDisplayed = false;

	//playback button displayed in the top left of the screen
	this.playbackButton = new PlaybackButton();

	//make the window fullscreen or revert to windowed
	this.mousePressed = function(){
		//*added: if mousepress is button: play+visualise. If mousepress is not on button(40x40): toggle fullscreen.
		//check if the playback button has been clicked
		//if not make the visualisation fullscreen
		if (!(mouseX > 0 && mouseX < 40 && mouseY > 0 && mouseY < 40)) {
			let fs = fullscreen();
			fullscreen(!fs);
		}

		//playback button 
		this.playbackButton.hitCheck();
	
		}
	

	//responds to keyboard presses
	//@param keycode the ascii code of the keypressed
	this.keyPressed = function(keycode){
		console.log(keycode);
		if(keycode == 32){
			this.menuDisplayed = !this.menuDisplayed;
		}

		if(keycode > 48 && keycode < 58){
			var visNumber = keycode - 49;
			vis.selectVisual(vis.visuals[visNumber].name); 
		}

		if(keycode > 96 && keycode < 106 ){
			var visNumber = keycode - 97;
			vis.selectVisual(vis.visuals[visNumber].name); 
		}
	};

	//draws the playback button and potentially the menu
	this.draw = function(){
		push();
		fill("white");
		stroke("black");
		strokeWeight(2);
		textSize(34);

		//playback button 
		this.playbackButton.draw();
		//only draw the menu if menu displayed is set to true.
		if(this.menuDisplayed){

			text("Select a visualisation:", 100, 30);
			text("1: spectrum", 100, 70);
			text("2: wavepattern", 100, 110);
			text("3: needles", 100, 150);

			this.menu();
		}	
		pop();

	};

	this.menu = function(){
		//draw out menu items for each visualisation
		//this part was ditched due to the obvious solution above.


	};
}


