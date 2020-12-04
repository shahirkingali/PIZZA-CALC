unction pizzatime() {
    var num1 = document.getElementById('firstNumber').value;
    var num2 = document.getElementById('secondNumber').value;
    var num3 = document.getElementById('thirdNumber').value;
    
    var result = num1 * num2 / num3;
    
    var roundedResult = Math.ceil(result);
    
    var pizzaText = 'pizzas';
    if (roundedResult === 1) {
      pizzaText = 'pizza';
    }
    
    document.getElementById('result').innerHTML = 'You should order at least ' + roundedResult + ' ' + pizzaText + '.';
  }
  
  