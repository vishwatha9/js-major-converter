'use strict';
let fromSelected = document.getElementById("from-select");
let toSelected = document.getElementById("to-select");
let from = document.getElementById("from-input");
let to = document.getElementById("to-input");
let error = document.getElementById("error");
let fromNS = "Binary",
  toNS = "Binary";

fromSelected.addEventListener("change", function () {
  fromNS = fromSelected.options[fromSelected.selectedIndex].text;
  from.placeholder = fromNS + " Number";
});

toSelected.addEventListener("change", function () {
  toNS = toSelected.options[toSelected.selectedIndex].text;
  to.placeholder = toNS + " Number";
});

from.addEventListener("input", function () {
  error.style.display = "none";
});

let fromValue;
document
  .getElementById("convert-button")
  .addEventListener("click", function () {
    switch (fromNS) {
      case "Binary":
        fromValue = from.value;
        if (/^[01]*$/.test(fromValue)) {
          switch (toNS) {
            case "Decimal":
              to.value = parseInt(fromValue, 2);
              break;
            case "Hexadecimal":
              to.value = parseInt(fromValue, 2).toString(16).toUpperCase();
              break;
            case "Octal":
              to.value = parseInt(fromValue, 2).toString(8);
              break;
            default:
              to.value = fromValue;
          }
        } else {
          error.style.display = "inherit";
          error.innerText = "Invalid " + fromNS + " Number";
          to.value = "";
        }
        break;

      case "Decimal":
        fromValue = from.value;
        if (/^[0-9]*$/.test(fromValue)) {
          switch (toNS) {
            case "Binary":
              to.value = Math.abs(fromValue).toString(2);
              break;
            case "Hexadecimal":
              to.value = Math.abs(fromValue).toString(16).toUpperCase();
              break;
            case "Octal":
              to.value = Math.abs(fromValue).toString(8);
              break;
            default:
              to.value = fromValue;
          }
        } else {
          error.style.display = "inherit";
          error.innerText = "Invalid " + fromNS + " Number";
          to.value = "";
        }
        break;

      case "Hexadecimal":
        fromValue = from.value;
        if (/^[0-9a-fA-F]*$/.test(fromValue)) {
          switch (toNS) {
            case "Binary":
              to.value = parseInt(fromValue, 16).toString(2);
              break;
            case "Decimal":
              to.value = parseInt(fromValue, 16);
              break;
            case "Octal":
              to.value = parseInt(fromValue, 16).toString(8);
              break;
            default:
              to.value = fromValue;
          }
        } else {
          error.style.display = "inherit";
          error.innerText = "Invalid " + fromNS + " Number";
          to.value = "";
        }
        break;

      case "Octal":
        fromValue = from.value;
        if (/^[0-7]*$/.test(fromValue)) {
          switch (toNS) {
            case "Binary":
              to.value = parseInt(fromValue, 8).toString(2);
              break;
            case "Decimal":
              to.value = parseInt(fromValue, 8);
              break;
            case "Hexadecimal":
              to.value = parseInt(fromValue, 8).toString(16).toUpperCase();
              break;
            default:
              to.value = fromValue;
          }
        } else {
          error.style.display = "inherit";
          error.innerText = "Invalid " + fromNS + " Number";
          to.value = "";
        }
        break;
    }
  });

document.getElementById("swap-button").addEventListener("click", function () {
  let temp;
  temp = fromNS;
  fromNS = toNS;
  toNS = temp;
  to.placeholder = toNS + " Number";
  fromSelected.value = "from-" + fromNS.toLowerCase();
  toSelected.value = "to-" + toNS.toLowerCase();
  from.placeholder = fromNS + " Number";
});
