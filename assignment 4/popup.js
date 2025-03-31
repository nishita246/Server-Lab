// Alert
function showAlert() {
    alert("Form submitted!");
  }
  [cite, 5]
  
  // Confirm
  function confirmDelete() {
    let result = confirm("Are you sure you want to delete this item?");
    if (result) {
      console.log("Item deleted");
      // Code to actually delete the item
    } else {
      console.log("Deletion canceled");
    }
  }
  [cite, 6]
  
  // Prompt
  function getAndDisplayInput() {
    let userInput = prompt("Enter your name:");
    if (userInput) {
      document.getElementById("displayArea").textContent = "You entered: " + userInput;
    } else {
      document.getElementById("displayArea").textContent = "User canceled the prompt.";
    }
  }
  [cite, 7]