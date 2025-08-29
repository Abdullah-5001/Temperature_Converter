 'use strict';
      function convertToFahrenheit()
      {
        const celcius = Number(document.getElementById('temp').value);
        const formula = ((celcius * 9/5) +32).toFixed(2);
        document.getElementById('result').textContent = ` The Temperature in Fahrenheit is ${formula}`;
      }
     