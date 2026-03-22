let avg;
let total;

// Grade function
function getGrade(arg) {
  if (arg >= 90) return "A";
  else if (arg <= 89 && arg >= 75) return "B";
  else if (arg <= 74 && arg >= 60) return "C";
  else if (arg <= 59 && arg >= 40) return "D";
  else return "F";
}
let inputs = [...document.querySelectorAll("input[type='number']")];

// calculation function
function calculation() {
  let calc = 0;

  const isValid = inputs.every((item) => {
    if (item.value.length === 0 || item.value > 100 || item.value < 0) {
      alert("Please check your input marks");
      return false;
    }
    console.log("item.id", item.id, item.value);
    calc += Number(item.value);
    document.querySelector(`.${item.id} #subject-grade`).innerText = getGrade(
      item.value,
    );
    return true;
  });

  if (!isValid) return;
  avg = calc / inputs.length;
  total = 100 * inputs.length;
  console.log(`calc ${calc} and avg ${avg} and total ${total}`);
  document.getElementById("welcome").style.display = "none";
  document.getElementById("result").style.display = "flex";
  document.getElementById("score").innerText = calc;
  document.getElementById("grade").innerText = getGrade(avg);
  document.getElementById("avg").innerText = avg;
}

function addSubject() {
  let newSubject = prompt("Please enter Subject name");
  if (newSubject.length <= 0) return;
  console.log(`inputs.length before sub${inputs.length}`);
  const newDiv = document.createElement("div");
  newDiv.innerHTML = `
    <div class="sub${inputs.length + 1} subject-content">
    <button class="button-sub" onclick="removeSubject(this)">❌</button>
            <label >${newSubject}</label>
            <input id="sub${inputs.length + 1}" type="number" required /><label class="center-label">/100</label>
            <label class="center-label" id="subject-grade"></label>
          </div>`;
  const inputSection = document.querySelector(".input-section");
  const buttonsDiv = document.querySelector(".buttons-div");
  inputSection.insertBefore(newDiv, buttonsDiv);
  inputs = [...document.querySelectorAll("input[type='number']")];
  console.log("inputs.length after", inputs.length);
}

function reset() {
  inputs.forEach((item) => {
    item.value = "";
    console.log("item.value", item.value);
  });

  document.getElementById("welcome").style.display = "flex";
  document.getElementById("result").style.display = "none";
}

function removeSubject(btn) {
  btn.parentElement.remove();
  inputs = [...document.querySelectorAll("input[type='number']")];
  document.getElementById("welcome").style.display = "flex";
  document.getElementById("result").style.display = "none";
}
