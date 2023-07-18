let string = " ";
let buttons = document.querySelectorAll(".button");
try {
  Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
      if (e.target.innerHTML == "=") {
        try {
          string = eval(string);
        } catch (e) {
          alert("Invalid Input");
        }
        document.querySelector("input").value = string;
      } else if (e.target.innerHTML == "AC") {
        string = "";
        document.querySelector("input").value = string;
      } else if (e.target.innerHTML == "DE") {
        string = string.slice(0, -1);
        document.querySelector("input").value = string;
      } else {
        console.log(e.target);
        string = string + e.target.innerHTML;
        document.querySelector("input").value = string;
      }
    });
  });
} catch (error) {
  alert(error.data.message);
}
