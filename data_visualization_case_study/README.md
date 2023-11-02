# Case study 3: data visualisation

## Tasks:

### Tech diversity: gender
#### - In the for loop in the draw() method extract the relevant data from each table row and store it in the company object.

#### - Check that the bars representing the proportion of female employees is correctly drawn on the plot.

#### - Look at how the rectangle representing the proportion of female employees is defined. Draw a rectangle representing the male proportion using the parameters and methods defined in this object. The ratio of female:male staff at Indiegogo is 50:50. Make sure that this is correctly visualised on the plot.

&nbsp;

### Pay gap 1997–2017
#### Complete the visualisation defined in pay-gap-1997-2017.js to create a line graph representing the pay gap between female and male employees over time.

#### - In the for loop in the draw() method, extract the relevant data from each table row and store it in the current object.

#### - Complete the mapPayGapToHeight() method. Look at how mapYearToWidth() works. Check that the y-axis tick labels are drawn correctly.

#### - Complete the line() function in the draw() method to plot the pay gap over time. You will need to use both mapYearToWidth() and mapPayGapToHeight() methods.

&nbsp;

### Climate change
#### - Complete the visualisation defined in climate-change.js to create a line graph with gradient fill background representing the change in the Earth’s surface temperature.

#### - Using the mapTemperatureToColour() method, set the fill() in the draw() method. You need to pass the current temperature to this method to get the correct colour.

#### - Complete the rect() function below the fill() to create a gradient effect background (rectangles spaced evenly across the x-axis – one rectangle per year). All of the values you need are already accessible within this visualisation object – you need to find them!

&nbsp;

### Tech diversity: Race
#### - Complete the visualisation defined in tech-diversity-race.js to create a pie chart to represent the racial diversity of prominent tech companies.

#### - Create a select DOM element using p5.dom.js (see createSelect) and populate the options programmatically using the company names obtained from the columns of this.data.

#### - Change the hard-coded company name to instead get the value from the select.

#### - Test that when selecting a company name from the list the correct data is visualised on the canvas and the correct title is generated.

&nbsp;

### Pay gap by job 2017
#### - Complete the visualisation defined in pay-gap-by-job-2017.js to create a scatter plot representing the difference in pay for men and women across different jobs.In the draw() method complete the for loop that draws all of the data points on the canvas as ellipses with the following properties.
