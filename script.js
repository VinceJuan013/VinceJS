        function performOperation() {
            var operation = document.getElementById("operation").value;
            var num1 = parseFloat(document.getElementById("num1").value);
            var num2 = parseFloat(document.getElementById("num2").value);
            var result;

            if (isNaN(num1) || isNaN(num2)) {
                document.getElementById("result").textContent = "Please enter valid numbers.";
                return;
            }

            switch (operation) {
                case "1":
                    result = num1 + num2;
                    break;
                case "2":
                    result = num1 - num2;
                    break;
                case "3":
                    result = num1 * num2;
                    break;
                case "4":
                    if (num2 !== 0) {
                        result = num1 / num2;
                    } else {
                        result = "Division by zero is not allowed.";
                    }
                    break;
                default:
                    result = "Invalid operation.";
                    break;
            }

            document.getElementById("result").textContent = "Result: " + result;
        }
