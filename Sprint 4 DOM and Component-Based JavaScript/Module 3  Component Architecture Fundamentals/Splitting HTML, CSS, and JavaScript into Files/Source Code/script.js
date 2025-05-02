const input = document.querySelector("#input");
const task = document.querySelector("#task");
const button = document.querySelector("#myButton");
const container = document.querySelector("#container");

function handleClick() {
  if (document.activeElement === button) { // Only update if the button is clicked
    if (task.innerHTML) {
      task.innerHTML += "<br>" + input.value; // Append with a line break
    } else {
      task.innerHTML = input.value; // Set the initial value
    }
    input.value = ""; // Clear the input field after adding
  }
}

document.body.addEventListener("click", handleClick);
container.addEventListener("click", handleClick);
button.addEventListener("click", handleClick);