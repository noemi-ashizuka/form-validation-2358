// 1. Select all the elements that we need (all of the inputs, button, tos checkbox)
// 2. Iterate over the inputs
// 3. listen for an event in each single input (blur)
// 4.　if the input has a value add is-valid bootstrap class, otherwise add is-invalid
// 5

const btn = document.querySelector(".btn");
const allInputs = document.querySelectorAll(".form-control");
const inputsArray = Array.from(allInputs);
const tos = document.querySelector("#tos");

const enableButton = () => {
  const allChecked = inputsArray.every((input) => {
      return input.classList.contains("is-valid");
    });
    console.log(allChecked);
    console.log(tos);
  
    if (allChecked && tos.checked) {
      btn.disabled = false;
      btn.innerText = "Submit";
    } else {
      btn.disabled = true;
      btn.innerText = "Please fill all fields";
    }
}

// check if all the inputs have the 'is-valid' class
// ruby .all?

allInputs.forEach((input) => {
  // console.log(input, tos);
  // console.log(input);
  
  input.addEventListener("blur", (e) => {
    // console.log(input.value)
    console.log(e);
    if (input.value === "") {
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
    } else {
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
    }

    enableButton();
    
  });

});

tos.addEventListener("change", () => {
  enableButton();
});



// console.log(allChecked);













// btn.addEventListener("click", (event) => {
//   event.preventDefault();
//   console.log(event);
//   btn.innerText = "hi"
// });