function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);
  
  // polarLines( number, radius, distance, [callback] )
  
  ////// Stars top-left
  // not moving lots of lines 
  setCenter(152, 80);
  strokeWeight(0.4);
  polarLines(50, 100/3, 10);
  
  rotate(frameCount * 0.01); 

  noFill();
  stroke('#ccc');
  strokeWeight(0.5);
  polarLines(12, 140/3, 0);
  strokeWeight(1);
  polarLines(8, 60/3, 20);
  strokeWeight(2);
  polarLines(8, 20/3, 10);
  
  ////// Stars top-right
  resetMatrix();
  setCenter(351,80);
  strokeWeight(0.4);
  polarLines(50, 100/3, 10);
  
  rotate(frameCount * 0.01); 

  noFill();
  stroke('#ccc');
  strokeWeight(0.5);
  polarLines(12, 140/3, 0);
  strokeWeight(1);
  polarLines(8, 60/3, 20);
  strokeWeight(2);
  polarLines(8, 20/3, 10);
  
  ////// Stars middle-right
  resetMatrix();
  setCenter(445,250);
  strokeWeight(0.4);
  polarLines(50, 100/3, 10);
  
  rotate(frameCount * 0.01); 

  noFill();
  stroke('#ccc');
  strokeWeight(0.5);
  polarLines(12, 140/3, 0);
  strokeWeight(1);
  polarLines(8, 60/3, 20);
  strokeWeight(2);
  polarLines(8, 20/3, 10);
  
  ////// Stars down-right
  resetMatrix();
  setCenter(351,427);
  strokeWeight(0.4);
  polarLines(50, 100/3, 10);
  
  rotate(frameCount * 0.01); 

  noFill();
  stroke('#ccc');
  strokeWeight(0.5);
  polarLines(12, 140/3, 0);
  strokeWeight(1);
  polarLines(8, 60/3, 20);
  strokeWeight(2);
  polarLines(8, 20/3, 10);
  
  ////// Stars down-left
  resetMatrix();
  setCenter(147,427);
  strokeWeight(0.4);
  polarLines(50, 100/3, 10);
  
  rotate(frameCount * 0.01); 

  noFill();
  stroke('#ccc');
  strokeWeight(0.5);
  polarLines(12, 140/3, 0);
  strokeWeight(1);
  polarLines(8, 60/3, 20);
  strokeWeight(2);
  polarLines(8, 20/3, 10);
  
   ////// Stars middle-left
  resetMatrix();
  setCenter(54,250);
  strokeWeight(0.4);
  polarLines(50, 100/3, 10);
  
  rotate(frameCount * 0.01); 

  noFill();
  stroke('#ccc');
  strokeWeight(0.5);
  polarLines(12, 140/3, 0);
  strokeWeight(1);
  polarLines(8, 60/3, 20);
  strokeWeight(2);
  polarLines(8, 20/3, 10);
  
  // set center for ellipses  
  resetMatrix();
  setCenter(width/2, height/2);
  noStroke();
   // polarEllipses( number, widthRadius, heightRadius, distance, [callback] )
  fill(248, 138, 117, 110);
  polarPolygons(6, 4, 40, 200);
  
  fill(255, 221, 153, 100);
  polarPolygons(6, 4, 20, 200);
  
  fill(13, 146, 185, 110);
  polarPolygons(6, 4, 100, 100);
  //polarEllipses(25, 40, 160, 40);
  fill(168, 218, 215, 160);
  polarEllipses(25, 20, 80, 40);
  fill(132, 195, 201, 160);
  polarEllipses(25, 10, 40, 40);
  
  fill(255, 221, 153, 80);
  polarPolygons(6, 4, 40, 20);
  
  fill(248, 138, 117, 80);
  polarPolygons(5, 3, 20, 0);
}

////// Example reference
// polarPolygons( number, number of edges, radius, distance, [callback] )
  // fill(229,188,231,120);
  // polarPolygons(16, 4, 40, 180);
  