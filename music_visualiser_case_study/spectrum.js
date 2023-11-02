function Spectrum(){
	this.name = "spectrum";

	this.draw = function(){
		push();
		var spectrum = fourier.analyze();
		noStroke();
		
		for (var i = 0; i < spectrum.length; i++){
			var a = 255;
			var b = map(i, 0, 255, spectrum[i]/4, 255);
			var c= 0;
			var x = 0;
			var y = map(i, 0, 255, 0,height);
			var w = map(spectrum[i], 0, 255, 0, spectrum.length);
			var h = 1;
			
			fill(a,b,c);
			rect(x, y, w, h);
  		}
	
		pop();
	};
}
