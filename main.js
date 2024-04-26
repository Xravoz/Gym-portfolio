// function myFunction() {
//   document.querySelector(".dropdown-down").classList.toggle("show");
// }
// document.getElementById("dropdownNav").addEventListener("click", myFunction);

// // Close the dropdown menu if the user clicks outside of it
// window.onclick = function (event) {
//   if (!event.target.matches(".dropbtn")) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains("show")) {
//         openDropdown.classList.remove("show");
//       }
//     }
//   }
// };
// function showDiv() {
//   document.getElementById("welcomeDiv").style.display = "block";
// }
// function showDivv() {
//   document.getElementById("welcomeDivv").style.display = "block";
// }

let select = document.querySelectorAll(" select");
let priceOne = document.querySelector(".price-one");
let priceTwo = document.querySelector(".price-two");
let priceThree = document.querySelector(".price-three");

console.log(Array.from(select));

document.addEventListener("DOMContentLoaded", function () {
  var selectElement = document.querySelector(".explain-main select");
  console.log(selectElement);
  selectElement.addEventListener("change", function () {
    var selectedValue = selectElement.value;
    var priceTextElements = document.querySelectorAll(
      ".explain-main .price-text"
    );
    priceTextElements.forEach((element) => {
      element.style.display = "none";
    });

    var selectedValue = selectElement.value;
    if (selectedValue === "Silver Package") {
      document.querySelector(".price-one").style.display = "block";
    } else if (selectedValue === "Golden Package") {
      document.querySelector(".price-two").style.display = "block";
    } else if (selectedValue === "Vip Diamond Package") {
      document.querySelector(".price-three").style.display = "block";
    }
  });
});
const checkboxes = document.querySelectorAll(".checkbox-input");
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    checkboxes.forEach((otherCheckbox) => {
      if (otherCheckbox !== this) {
        otherCheckbox.checked = false;
      }
    });
  });
});
