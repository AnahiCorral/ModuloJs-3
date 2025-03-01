// 3. Operaciones matemáticas básicas
function suma(a, b) {
    return a + b;
  }
  
  function resta(a, b) {
    return a - b;
  }
  
  function multiplicacion(a, b) {
    return a * b;
  }
  
  function division(a, b) {
    if (b === 0) {
      return "No se puede dividir entre 0";
    }
    return a / b;
  }
  
  let num1 = 10, num2 = 5;
  console.log("Suma: ", suma(num1, num2));
  console.log("Resta: ", resta(num1, num2));
  console.log("Multiplicación: ", multiplicacion(num1, num2));
  console.log("División: ", division(num1, num2));