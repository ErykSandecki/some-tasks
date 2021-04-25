let numberOfExpressions = null;
let timeNextFib = null;

/**
 * Recursion function counting the fibonacci sequence
 */

function fibonaci(prevFib, nextFib, expression = 0) {
  renderNextFib(expression, prevFib);

  if (expression === 0) nextFib += 1;

  if (expression === numberOfExpressions) return;

  timeNextFib = setTimeout(() => {
    fibonaci(nextFib, prevFib + nextFib, expression + 1);
  }, 3000);
}

/**
 * Controll Form
 */

function clearInput() {
  const input = document.getElementById("fib");
  input.value = null;
}

function calculateFib() {
  const input = document.getElementById("fib");

  event.preventDefault();

  numberOfExpressions = parseInt(input.value);

  if (timeNextFib !== null) clearTimeout(timeNextFib);

  clearTable();
  fibonaci(0, 0);
}

/**
 * Render View Table
 */

function renderNextFib(expression, value) {
  const selector = document.getElementById("fib-score");
  let element = document.createElement("tr");

  element.innerHTML = `<th scope="row">F<sub>${expression}</sub></th><td>${value}</td>`;
  selector.appendChild(element);

  if (expression === numberOfExpressions) {
    element = document.createElement("tr");
    element.innerHTML = `<th scope="row"></th><td style="color:green;">Complete <i class="fas fa-check-circle" /></i></td>`;
    selector.appendChild(element);
  }
}

function clearTable() {
  const selector = document.getElementById("fib-score");
  selector.innerHTML = "";
}
