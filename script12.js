
var loginModal = document.getElementById("loginModal");

var loginBtn = document.querySelector("header nav ul li:last-child a");

var closeBtn = document.getElementsByClassName("close")[0];

function openModal() {
  loginModal.style.display = "block";
}

closeBtn.onclick = function() {
  loginModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == loginModal) {
    loginModal.style.display = "none";
  }
}

var loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", function(event) {
  event.preventDefault();
  
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  
  if (email === "" || password === "") {
    alert("Please enter your email and password.");
    return false;
  } else {
    console.log("User logged in with email: " + email);
    loginModal.style.display = "none";
    showDialog("Successfully logged in!");
  }
});

function showDialog(message) {
  var dialogBox = document.createElement("div");
  dialogBox.innerHTML = message;
  dialogBox.style.backgroundColor = "#f2f2f2";
  dialogBox.style.color = "#333";
  dialogBox.style.border = "1px solid #ccc";
  dialogBox.style.padding = "10px";
  dialogBox.style.position = "fixed";
  dialogBox.style.top = "50%";
  dialogBox.style.left = "50%";
  dialogBox.style.transform = "translate(-50%, -50%)";
  dialogBox.style.zIndex = "1";
  document.body.appendChild(dialogBox);
  setTimeout(function() {
    dialogBox.remove();
  }, 3000);
}
