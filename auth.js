const USERS = {
  admin: "1234",
  operator: "0000"
};

function login() {
  const u = user.value;
  const p = pass.value;

  if (USERS[u] === p) {
    localStorage.setItem("login", "yes");
    login.style.display = "none";
    panel.style.display = "block";
  } else {
    alert("Invalid login");
  }
}

function checkLogin() {
  if (localStorage.getItem("login") === "yes") {
    login.style.display = "none";
    panel.style.display = "block";
  }
}
