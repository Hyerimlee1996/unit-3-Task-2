

var y=0;


function setup() {
  //set Canvas to size of window
  createCanvas(windowWidth, windowHeight);

  //Intoduction Page
    background(247, 235, 217);
    
  //create Button object 1 (London)
  button1 = createButton('London');
  button1.position(25, 20);
  //Load Data when Button 1 is Pressed
  button1.mousePressed(function() {
  loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  weatherLoaded);
  });

  //create Button object 2 (New York)
  button2 = createButton('New York');
  button2.position(85, 20);
  //Load Data when Button 2 is Pressed
  button2.mousePressed(function() {
  loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22New%20York%2C%20New%20York%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  weatherLoaded);
  });
  
  //create Button object 3 (tokyo)
  button3 = createButton('Tokyo');
  button3.position(156, 20);
  //Load Data when Button 3 is Pressed
  button3.mousePressed(function() {
  loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Tokyo%2C%20Tokyo%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  weatherLoaded);
  });
  
  //create Button object 4 (São Paulo)
  button4 = createButton('São Paulo');
  button4.position(210, 20);
  //Load Data when Button 4 is Pressed
  button4.mousePressed(function() {
  loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22S%C3%A3o%20Paulo%2C%20S%C3%A3o%20Paulo%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  weatherLoaded);
  });
  
  //create Button object 5 (Melbourne)
  button5 = createButton('Melbourne');
  button5.position(280, 20);
  //Load Data when Button 5 is Pressed
  button5.mousePressed(function() {
  loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Melbourne%2C%20Melbourne%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  weatherLoaded);
  });
  
}

function draw(){
  

  
  //rectangles
  noStroke ();
  fill (255, 163, 245);
  rect (windowWidth / 4, windowHeight / 4, 20, windowHeight/4);
  
  noStroke ();
  fill (74, 203, 239);
  rect (windowWidth / 4, windowHeight / 2, 20, windowHeight/4);
  
  //noStroke ();
  //fill (152, 226, 127);
  //rect (windowWidth /2, windowHeight / 2, windowWidth /2, windowHeight / 2);
   
}

function weatherLoaded(data) {
  var temp = data.query.results.channel.item.condition.temp;
  var windSpeed = data.query.results.channel.wind.speed;
  var windDirection = data.query.results.channel.wind.direction;
  
  //forcast data
  var tempD2H = data.query.results.channel.item.forecast[0].high;
  var tempD2L = data.query.results.channel.item.forecast[0].low;

// HOW to get avarage of tempD2H+tempD2L?!?!
//var tempforcast1 = ((tempD2H+tempD2L)/2);
 



//print data to the console
//print(temp);
//print(windSpeed);
print(tempD2H);
print(tempD2L);
//print(tempforcast1);


  background(247, 235, 217);

  //add data info in bottom left corner of the screen
  //for more information about using text in a P5js sketch visit:
  //http://creative-coding.decontextualize.com/text-and-type/
  
  textSize(15);
  textFont("Helvetica");
  textAlign(RIGHT);
     
    fill(255);
    
    text(windSpeed, 30, windowHeight - 50);
    fill(84, 82, 79);
    text(temp, 30, windowHeight - 30);
    fill(76, 117, 63);
    text(windDirection, 30, windowHeight - 10);
    
     //windspeed
  stroke(255);
  strokeWeight(10);
  noFill();

  ellipse(windowWidth/2, windowHeight/2, windSpeed *5, windSpeed *5);
  
    
    
  //moving line
  fill (84, 82, 79);
  noStroke();
  rect (windowWidth/4, temp * 3, 30, 5);
  
  //winddirection 
  translate(windowWidth / 2, windowHeight / 2);
  fill(76, 117, 63);
  noStroke();
  angleMode(DEGREES); // Change the mode to DEGREES
  rotate(windDirection);
  rect(0, 0, 150, 5);
  
  }
  


