const canvas = document.querySelector("#canvas");

// setting the hieght and width of the canvas to the full win size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// defining the context object
const c = canvas.getContext("2d");

// Set the center point and radius of the turbine
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = 100;

// Set the number of turbine blades and blade color
const bladeCount = 3;
const bladeColor = "black";

// Set the rotation speed
const rotationSpeed = 0.02;

// Function to draw the turbine blades
function drawBlades() {
  // Clear the canvas
  c.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the tower
  c.beginPath();
  c.moveTo(centerX - 10, centerY);
  c.lineTo(centerX + 10, centerY);
  c.lineTo(centerX + 10, canvas.height);
  c.lineTo(centerX - 10, canvas.height);
  c.closePath();
  c.fillStyle = "gray";
  c.fill();

  // Draw the turbine blades
  const angleIncrement = (Math.PI * 2) / bladeCount;
  for (let i = 0; i < bladeCount; i++) {
    const angle = rotationSpeed * i * Math.PI * 2 + Math.PI / 2;

    c.save();
    c.translate(centerX, centerY);
    c.rotate(angle);
    c.beginPath();
    c.moveTo(0, 0);
    c.lineTo(radius, 20);
    c.lineTo(radius, -20);
    c.closePath();
    c.fillStyle = bladeColor;
    c.fill();
    c.restore();
  }
}

// Function to update the rotation angle
function updateRotation() {
  // Rotate the turbine blades
  //   for (let i = 0; i < bladeCount; i++) {
  //     const angle = rotationSpeed * i * Math.PI * 2 + Math.PI / 2;
  //     // const blade = document.getElementById(`blade-${i}`);
  //     // blade.style.transform = `rotate(${angle}rad)`;
  //     c.save();
  //     c.translate(centerX, centerY);
  //     c.rotate(angle);
  //     c.beginPath();
  //     c.moveTo(0, 0);
  //     c.lineTo(radius, 20);
  //     c.lineTo(radius, -20);
  //     c.closePath();
  //     c.fillStyle = bladeColor;
  //     c.fill();
  //     c.restore();
  //   }

  // Redraw the turbine blades and tower
  drawBlades();

  // Repeat the update after a short delay
  requestAnimationFrame(updateRotation);
}

// Start the rotation
updateRotation();
