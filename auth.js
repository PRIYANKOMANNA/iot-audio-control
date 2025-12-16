const USERS = {
  admin: "1234",
  operator: "0000"
};

function loginUser() {
  const u = document.getElementById("user").value;
  const p = document.getElementById("pass").value;

  console.log("Login clicked", u, p);

  if (USERS[u] === p) {
    localStorage.setItem("login", "yes");

    document.getElementById("loginBox").style.display = "none";
    document.getElementById("panel").style.display = "block";
  } else {
    alert("Invalid login");
  }
}

function checkLogin() {
  if (localStorage.getItem("login") === "yes") {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("panel").style.display = "block";
  }
}
