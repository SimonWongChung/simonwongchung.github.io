const svgNS = "http://www.w3.org/2000/svg";
const svgCanvas = document.getElementById('svgCanvas');

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function createCircle() {
  const cx = random(50, 550);
  const cy = random(50, 550);
  const r = random(20, 50);

  const circle = document.createElementNS(svgNS, 'circle');
  circle.setAttribute('cx', cx);
  circle.setAttribute('cy', cy);
  circle.setAttribute('r', r);
  circle.setAttribute('fill', `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`);

  svgCanvas.appendChild(circle);
  rotateShape(circle, cx, cy, random(0.1, 0.5));  // Rotate around its own center
}

function createRectangle() {
  const x = random(50, 500);
  const y = random(50, 500);
  const width = random(50, 100);
  const height = random(50, 100);
  const cx = x + width / 2; // Center of the rectangle
  const cy = y + height / 2; // Center of the rectangle

  const rect = document.createElementNS(svgNS, 'rect');
  rect.setAttribute('x', x);
  rect.setAttribute('y', y);
  rect.setAttribute('width', width);
  rect.setAttribute('height', height);
  rect.setAttribute('fill', `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`);

  svgCanvas.appendChild(rect);
  rotateShape(rect, cx, cy, random(0.1, 0.5));  // Rotate around its own center
}

function createTriangle() {
  const p1 = [random(50, 550), random(50, 550)];
  const p2 = [random(50, 550), random(50, 550)];
  const p3 = [random(50, 550), random(50, 550)];

  // Calculate the center of the triangle (centroid)
  const cx = (p1[0] + p2[0] + p3[0]) / 3;
  const cy = (p1[1] + p2[1] + p3[1]) / 3;

  const triangle = document.createElementNS(svgNS, 'polygon');
  triangle.setAttribute('points', `${p1.join(',')} ${p2.join(',')} ${p3.join(',')}`);
  triangle.setAttribute('fill', `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`);

  svgCanvas.appendChild(triangle);
  rotateShape(triangle, cx, cy, random(0.1, 0.5));  // Rotate around its centroid
}

function rotateShape(shape, cx, cy, speed) {
  let rotation = 0;
  function animateRotation() {
    rotation = (rotation + speed) % 360;  // Use the provided speed for rotation
    shape.setAttribute('transform', `rotate(${rotation}, ${cx}, ${cy})`);  // Rotate around the shape's center
    requestAnimationFrame(animateRotation);  // Continue the animation
  }
  animateRotation();
}

function createShapes() {
  for (let i = 0; i < 10; i++) {
    createCircle();
    createRectangle();
    createTriangle();
  }
}

createShapes();