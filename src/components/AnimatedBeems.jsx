import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const nodes = [
  { id: "center", x: 250, y: 200, img: "/central-logo.png" }, // Central node
  { id: "gdrive", x: 100, y: 100, img: "/gdrive-logo.png" },
  { id: "notion", x: 100, y: 200, img: "/notion-logo.png" },
  { id: "whatsapp", x: 100, y: 300, img: "/whatsapp-logo.png" },
  { id: "zapier", x: 400, y: 100, img: "/zapier-logo.png" },
  { id: "messenger", x: 400, y: 200, img: "/messenger-logo.png" },
  { id: "empty", x: 400, y: 300, img: "" }, // Empty circle
];

const links = [
  { source: "center", target: "gdrive" },
  { source: "center", target: "notion" },
  { source: "center", target: "whatsapp" },
  { source: "center", target: "zapier" },
  { source: "center", target: "messenger" },
  { source: "center", target: "empty" },
];

const AnimatedBeams = () => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); // Clear previous SVG content

    svg
      .selectAll("line")
      .data(links)
      .enter()
      .append("line")
      .attr("stroke", "#ccc")
      .attr("stroke-width", 2)
      .attr("x1", (d) => nodes.find((n) => n.id === d.source).x)
      .attr("y1", (d) => nodes.find((n) => n.id === d.source).y)
      .attr("x2", (d) => nodes.find((n) => n.id === d.source).x)
      .attr("y2", (d) => nodes.find((n) => n.id === d.source).y)
      .transition()
      .duration(1000)
      .attr("x2", (d) => nodes.find((n) => n.id === d.target).x)
      .attr("y2", (d) => nodes.find((n) => n.id === d.target).y);

    svg
      .selectAll("image")
      .data(nodes)
      .enter()
      .append("image")
      .attr("xlink:href", (d) => d.img)
      .attr("x", (d) => d.x - 20)
      .attr("y", (d) => d.y - 20)
      .attr("width", 40)
      .attr("height", 40)
      .attr("opacity", 0)
      .transition()
      .duration(500)
      .attr("opacity", 1);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <h1 className="text-lg md:text-xl font-semibold mb-4 text-center">
        A demonstration of animated beams connecting different services
      </h1>
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg md:max-w-xl lg:max-w-2xl">
        <svg ref={svgRef} width="100%" height="400"></svg>
      </div>
    </div>
  );
};

export default AnimatedBeams;
