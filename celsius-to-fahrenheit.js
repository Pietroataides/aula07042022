/* celsius-to-fahrenheit.js */
const converters = require('./converters.js');

// Pega a 3ª entrada de uma lista de argumentos
const celsiusInput = process.argv[2]; 
const fahrenheitValue = celsiusToFahrenheit(celsiusInput);
console.log(`${celsiusInput} degrees Celsius = ${fahrenheitValue}degrees Fahrenheit`);