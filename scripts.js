var data = d3.json("data.json");

data.then(function(data){
  initilize(data);
},
function(err){
  console.log(err);
}
)






var initilize = function(data){
  var height = 500;
  var width = 600;
  var barWidth = (width/data.length)
  var colors=d3.scaleOrdinal(d3.schemePaired);
  var margins = {top: 20, right: 50, bottom: 20, left: 30}
document.getElementsByTagName("p")[0].innerHTML = "0";
  var svg = d3.select("svg")
    .attr("width", width)
    .attr("height", height);

    svg.selectAll("rect")
           .data(data[0].grades)
           .enter()
           .append("rect")
           .attr("x", function(d,i){
             return i * barWidth;
           })
           .attr("y", function(d){
             return 150;
           })
           .attr("height", function(d){
             return 50;
           })
           .attr("width", barWidth)
            // .attr('transform', 'translate(' + (margins.right+15) + ',' + margins.top + ')')
           .attr("fill", function(d){
             return colors(d.name);
           });

           var xScale = d3.scaleLinear()
                      .domain([0, 4])
                      .range([5,width]);
                  var yScale = d3.scaleLinear()
                      .domain([0, 100])
                      .range([height,0]);


          var yAxis = d3.axisLeft(yScale)
                   .ticks(10)
                   .tickSize(10)
     svg.append("g").classed("yAxis",true)
     .call(yAxis)
     .attr('transform', 'translate(' + (margins.left +10)+ ','+margins.top+')');

var xAxis = d3.axisBottom(xScale)
              .ticks(4)
              .tickSize(1)
              svg.append("g").classed("xAxis",true)
              .call(xAxis)
              .attr('transform', 'translate(' + (margins.left)+ ','+(margins.top+10+height)+')');
}




var update = function(){

}
