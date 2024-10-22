// Student Counter Project

let count = 0; // Initialize the count variable

// Function to increment the count
function increment() {
    count += 1; // Increase the count by 1
    document.getElementById("count-el").innerText = count; // Update the displayed number
}

// Function to save the current count
function save() {
    let countStr = count + " - "; // Create a string representation of the count with a separator
    document.getElementById("save-el").textContent += countStr; // Append the count to the previous entries
    count = 0; // Reset the count
    document.getElementById("count-el").innerText = count; // Update the displayed number to reflect the reset
}

// Add event listeners for the buttons
document.getElementById("increment-btn").addEventListener("click", increment);
document.getElementById("save-btn").addEventListener("click", save);
