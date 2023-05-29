// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  let toFahrenheit = (celsius * 9) / 5 + 32;
  return toFahrenheit;
  }
  
  // Function to convert Fahrenheit to Celsius
  function fahrenheitToCelsius(fahrenheit) {
    let toCelsius = ((fahrenheit - 32)*5) /9;
    return toCelsius;
  }
  
  // Prompt the user for input
  let temperature = parseFloat(prompt("Enter the temperature:"));
  let conversionType = prompt("Choose the conversion type: (fahrenheit or celsius)");
  
  if (conversionType.toLowerCase() === "celsius") {
    let result = fahrenheitToCelsius(temperature);
    alert(result + "°C");
  } else if (conversionType.toLowerCase() === "fahrenheit") {
    let result = celsiusToFahrenheit(temperature);
    alert(result + "°F");
  } else {
    alert("Invalid conversion type.");
  }