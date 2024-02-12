// Import the color package
const Color = require('color');

// Function to log a colored message
function logColoredMessage(message, color) {
    // Create a color object
    const coloredMessage = Color(message)[color]();

    // Log the colored message
    console.log(coloredMessage);
}

// Example usage
// logColoredMessage('This is a red message', 'red');
// logColoredMessage('This is a blue message', 'blue');
// logColoredMessage('This is a green message', 'green');

console.log("hello.red");
