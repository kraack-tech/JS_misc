# Case study 2: music visualiser

## Tasks:

### Playback and fullscreen
#### In the ControlsAndInput constructor function (in the controlsAndInput.js file) complete this.mousePressed().

&nbsp;

### Visualisation menu
#### In the ControlsAndInput constructor function, complete this.menu(). Write a for loop that iterates over the array stored in the visuals property of the visualisations object, which itself is stored in the global vis variable declared in sketch.js, writing each visualisation name to the screen. You can check if your menu is displayed correctly by pressing the space bar while the app is running.

&nbsp;

### Spectrum analyser
#### Take a look at the Spectrum() constructor function. The fast Fourier transform analyse function (i.e. p5.FFT.analyse()) returns an array of amplitude values for 1,024 audible frequency values. The amplitude value is between 0 and 255. The visualisation draws a rectangle for each of these frequencies and the height of the rectangle is determined by the amplitude value for that frequency.

#### - Change the visualisation so that it is horizontal not vertical. Therefore, the bars emerge from the left-hand side of the screen, not from the bottom as in the following image. 

#### - Change the colour of each bar such that it gradually changes from green to red based on the amplitude value. For example:

&nbsp;

### Needle plots

#### The Needles constructor function draws a visualisation that displays volume values for four frequency bands: bass, mid-low, mid-high and treble.

#### -Within the needles.js file, complete the nested for loop in the this.draw() function.
