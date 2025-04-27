// Simple counter logic
let count = 0;
function updateButton() {
  count++;
  document.getElementById("counterBtn").innerText = `Click me: ${count}`;
}

// Redundant, unused function
function unusedFunction() {
  console.log("This function is never called");
}

// Heavy computation on load (wastes CPU)
(function wasteCycles() {
  for (let i = 0; i < 1000000; i++) {
    Math.sqrt(i);
  }
})();

// Another redundant loop
for (let i = 0; i < 100000; i++) {
  Math.pow(i, 2);
}

// Event listener without async/defer
document.getElementById("counterBtn").addEventListener("click", updateButton);
