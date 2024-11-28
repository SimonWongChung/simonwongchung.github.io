// Sample Data for Tottenham
const data = [
    { season: "2006/07", scored: 57, conceded: 54 },
    { season: "2007/08", scored: 66, conceded: 61 },
    { season: "2008/09", scored: 45, conceded: 45 },
    { season: "2009/10", scored: 67, conceded: 41 },
    { season: "2010/11", scored: 55, conceded: 46 },
    { season: "2011/12", scored: 66, conceded: 41 },
    { season: "2012/13", scored: 66, conceded: 46 },
    { season: "2013/14", scored: 55, conceded: 51 },
    { season: "2014/15", scored: 58, conceded: 53 },
    { season: "2015/16", scored: 69, conceded: 35 },
    { season: "2016/17", scored: 86, conceded: 26 },
    { season: "2017/18", scored: 74, conceded: 36 },
  ];
  
  const svg = d3.select("svg");
  const margin = { top: 20, right: 30, bottom: 50, left: 50 };
  const width = +svg.attr("width") - margin.left - margin.right;
  const height = +svg.attr("height") - margin.top - margin.bottom;
  
  const chart = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);
  
  const x = d3.scaleBand()
    .domain(data.map(d => d.season))
    .range([0, width])
    .padding(0.1);
  
  const y = d3.scaleLinear()
    .domain([0, d3.max(data, d => Math.max(d.scored, d.conceded))]).nice()
    .range([height, 0]);
  
  // Line generator
  const line = d3.line()
    .x(d => x(d.season) + x.bandwidth() / 2) // Adjust x to center points
    .y(d => y(d.scored));
  
  const lineConceded = d3.line()
    .x(d => x(d.season) + x.bandwidth() / 2)
    .y(d => y(d.conceded));
  
  // Draw the axes
  chart.append("g")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(x))
    .selectAll(".tick text")
    .attr("transform", "rotate(-45)")
    .style("text-anchor", "end");
  
  chart.append("g")
    .call(d3.axisLeft(y));
  
  // Add labels
  chart.append("text")
    .attr("x", width / 2)
    .attr("y", height + margin.bottom - 10)
    .attr("text-anchor", "middle")
    .attr("class", "axis-label")
    .text("Season");
  
  chart.append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", -height / 2)
    .attr("y", -margin.left + 10)
    .attr("text-anchor", "middle")
    .attr("class", "axis-label")
    .text("Goals");
  
  // Add the line for Goals Scored
  chart.append("path")
    .datum(data)
    .attr("class", "line scored")
    .attr("d", d3.line()
      .x(d => x(d.season) + x.bandwidth() / 2)
      .y(d => y(d.scored)));
  
  // Add the line for Goals Conceded
  chart.append("path")
    .datum(data)
    .attr("class", "line conceded")
    .attr("d", d3.line()
      .x(d => x(d.season) + x.bandwidth() / 2)
      .y(d => y(d.conceded)));
  
  // Add legend
  const legend = svg.append("g")
    .attr("transform", `translate(${width - 150}, 20)`);
  
  legend.append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", 10)
    .attr("height", 10)
    .attr("fill", "steelblue");
  
  legend.append("text")
    .attr("x", 15)
    .attr("y", 10)
    .text("Goals Scored")
    .attr("font-size", "12px")
    .attr("alignment-baseline", "middle");
  
  legend.append("rect")
    .attr("x", 0)
    .attr("y", 20)
    .attr("width", 10)
    .attr("height", 10)
    .attr("fill", "crimson");
  
  legend.append("text")
    .attr("x", 15)
    .attr("y", 30)
    .text("Goals Conceded")
    .attr("font-size", "12px")
    .attr("alignment-baseline", "middle");