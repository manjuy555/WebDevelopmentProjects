const screen = document.getElementById("screen");
const history = document.getElementById("history");

const buttons = document.querySelectorAll("button");
const specialButtons = ["sq-root", "cb-root"];
let expression = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.dataset.value || button.innerText;
    console.log(value);

    if (button.classList.contains("number")) {
      expression += value;
      console.log("expression", expression);
    } else if (
      button.classList.contains("operator") &&
      !specialButtons.some((cls) => button.classList.contains(cls))
    ) {
      expression += convertOperator(value);
      console.log("expression", expression);
    } else if (button.classList.contains("clear")) {
      expression = "0";
      history.innerText = expression;
    } else if (button.classList.contains("delete")) {
      expression = expression.slice(0, -1);
      history.innerText = "";
    } else if (button.classList.contains("sq-root")) {
      history.innerText = expression;

      expression = Math.sqrt(eval(expression)).toString();
    } else if (button.classList.contains("cb-root")) {
      history.innerText = expression;

      expression = Math.cbrt(eval(expression)).toString();
    } else if (button.classList.contains("equals")) {
      try {
        history.innerText = expression;

        expression = (Math.round(eval(expression) * 10000) / 10000).toString();
        console.log(
          "expression",
          expression,
          "eval(expression)",
          eval(expression),
        );
      } catch {
        expression = "Error";
      }
    }

    screen.innerText = expression;
  });
});

function convertOperator(op) {
  switch (op) {
    case "÷":
      return "/";
    case "^":
      return "**";
    default:
      return op;
  }
}


