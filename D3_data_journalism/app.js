// // @TODO: YOUR CODE HERE!
// // Define SVG area dimensions
var svgWidth = 960;
var svgHeight = 500;

// // Define the chart's margins as an object
var margin = {
    top: 60,
    right: 60,
    bottom: 60,
    left: 60
  };
  
//   // Define dimensions of the chart area
  var chartWidth = svgWidth - margin.left - margin.right;
  var chartHeight = svgHeight - margin.top - margin.bottom ;
  
//   // Select body, append SVG area to it, and set its dimensions
  var svg =d3.select("body")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);
  
//   // Append a group area, then set its margins
  var chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);
  
//   // Configure a parseTime function which will return a new Date object from a string
// //   var parseTime = d3.timeParse("%B");
  
  
//   // Load data from miles-walked-this-month.csv
  d3.csv("data.csv").then(function(healthData) {
    // Print the milesData
    // console.log(healthData);
  

//   // parse data
  healthData.forEach(function(data) {
    data.poverty = +data.poverty;
    data.healthcare = +data.healthcare;
    var abbr = data.abbr
    // console.log(healthData);
  
  });
  var abbr = d3.map(healthData, d =>d.abbr);
  console.log(abbr);


//    // create scales
   var xLinearScale = d3.scaleLinear()
   .domain(d3.extent(healthData, d => d.poverty))
   .range([0, chartWidth]);

 var yLinearScale = d3.scaleLinear()
   .domain(d3.extent(healthData, d => d.healthcare))
   .range([chartHeight, 0]);
  


//     // create axes
    var xAxis = d3.axisBottom(xLinearScale).ticks(9);
    var yAxis = d3.axisLeft(yLinearScale).ticks(13);


//     // append axes
  //   chartGroup.append("g")
  //   .attr("transform", `translate(0, ${chartHeight})`)
  //   .call(xAxis);

  // chartGroup.append("g")
  //   .call(yAxis);

//     // append circles
    chartGroup.selectAll("circle")
    .data(healthData)
    .enter()
    .append("circle")
    .attr("cx", d => xLinearScale(d.poverty))
    .attr("cy", d => yLinearScale(d.healthcare))
    .attr("r", "20")
    .attr("fill", "lightblue")
    .attr("stroke-width", "1")
    .attr("stroke", "black");

//     /* Create the text for each block */
//     // chartGroup.append("text")
//     //     .attr("dx", 100)
//     //     .attr("dy", 100)    
//     // // .attr("dx", function(d){return -20})
//     //     .text(function(d){return d.abbr})

    chartGroup.selectAll("text")
    .data(abbr)
    .enter()
    .append("text")
    .attr("x", 20)
    .attr("y", 20)
    .text("text")
    .attr("text-anchor", "middle")
    .attr("font-size", "16px")
    .attr("fill", "black");

    chartGroup.append("text")
    .attr("transform", `translate(${chartWidth/2}, ${chartHeight + margin.top +20})`)
    .attr("text-anchor", "middle")
    .attr("font-size", "16px")
    .attr("fill", "black")
    .text("Helloo!")

 

// });

var sampleData = [{"x": 8,"y": 1}, {"x": 2,"y": 1}, {"x": 4,"y": 1},{"x": 5,"y": 1}];
 // {"x": 6,"y": 40}, {"x": 8,"y": 100}, {"x": 10,"y": 60}];
console.log(sampleData);
 var vis = d3.select("body");
  var xRange = d3.scaleLinear().range([40, 400]).domain([0,10]);
  var yRange = d3.scaleLinear().range([200, 40]).domain([0,2]);
 var join = vis.selectAll(".points").data(sampleData);

 var groups = join
   .enter()
   .append("g")
   .attr("transform", function(d) { return "translate(" + [d.x, d.y] + ")"; })
   .attr("cx", function(d) { return xRange (d.x); });
 
 chartGroup.append("circle")
    .data(sampleData)
    
   .attr("r", d =>  Math.log(d.x) * 30)
   .attr("stroke","black")
   .style("fill", "yellow");
 console.log(healthData);

 chartGroup.selectAll("text")
       
       .data(healthData)
       .enter()
       .append("text")
       
       .attr("dx", d => d.poverty )
       .attr("dy", d => d.healthcare)
       .text( d => d.abbr )
       .attr("font-family", "sans-serif")
       .attr("font-size", "20px")
       .attr("fill", "red");
  });
