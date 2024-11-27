// Data
const data = [
    { team: "Manchester United", wins: 290 },
    { team: "Liverpool", wins: 234 },
    { team: "Arsenal", wins: 255 },
    { team: "Chelsea", wins: 276 },
    { team: "Manchester City", wins: 256 },
    { team: "Tottenham Hotspur", wins: 221 }
  ];
  
  // Dimensions
  const width = 800;
  const height = 400;
  const margin = { top: 20, right: 20, bottom: 50, left: 60 };
  
  // SVG Container
//   const svg = d3.select("body")
//     .append("svg")
//     .attr("width", width)
//     .attr("height", height);

const svg = d3.select("main")
  .append("div") // Add a container div
  .attr("class", "vis1") // Assign a class
  .append("svg") // Add the SVG inside the div
  .attr("width", width)
  .attr("height", height);
  
  // Scales
  const xScale = d3.scaleBand()
    .domain(data.map(d => d.team))
    .range([margin.left, width - margin.right])
    .padding(0.1);
  
  const yScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.wins)])
    .nice()
    .range([height - margin.bottom, margin.top]);
  
  // Bars
  svg.selectAll(".bar")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("x", d => xScale(d.team))
    .attr("y", d => yScale(d.wins))
    .attr("width", xScale.bandwidth())
    .attr("height", d => height - margin.bottom - yScale(d.wins));
  
  // Axes
  const xAxis = d3.axisBottom(xScale);
  const yAxis = d3.axisLeft(yScale);
  
  svg.append("g")
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(xAxis)
    .selectAll("text")
    .attr("transform", "rotate(-45)")
    .style("text-anchor", "end");
  
  svg.append("g")
    .attr("transform", `translate(${margin.left},0)`)
    .call(yAxis);
  
  // Axis labels
  svg.append("text")
    .attr("x", width / 2)
    .attr("y", height - 10)
    .attr("text-anchor", "middle")
    .text("Team");
  
  svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", -height / 2)
    .attr("y", 15)
    .attr("text-anchor", "middle")
    .text("Wins");