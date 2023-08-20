// value function

function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

// backSpace function

const backSpace = () => {
  const num = document.querySelector("#display").value.slice(0, -1);
  document.querySelector("#display").value = num;
};

// clear function

function clearDisplay() {
  document.getElementById("display").value = "";
}

// calculate function

function calculate() {
  try {
    const result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;
  } catch (error) {
    document.getElementById("display").value = "error";
  }
}
