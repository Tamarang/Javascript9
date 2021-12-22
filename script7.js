
function squareDeclaration(number1, number2) {
    squared1 = number1 ** 2;
    squared2 = number2 ** 2;
    squaredAdded = squared1 + squared2;
    result = squaredAdded ** 2;  
    return result;
  }
  
  console.log(squareDeclaration(5, 5));

  const squareExpression = function (number1, number2) {
    squared1 = number1 ** 2;
    squared2 = number2 ** 2;
    squaredAdded = squared1 + squared2;
    result = squaredAdded ** 2;  
    return result;
  };
  
  console.log(squareExpression(5, 5));

  const squareArrow = (number1, number2) => {
    squared1 = number1 ** 2;
    squared2 = number2 ** 2;
    squaredAdded = squared1 + squared2;
    result = squaredAdded ** 2;  
    return result;
  };
  console.log(squareArrow(5, 5));