function V1() {
  let a = document.querySelector("#User");
  user = a.value;
  let b = document.querySelector("#Password");
  pass = b.value;
  chk = false;
  User.map((item) => {
    if (item.password === pass && item.name == user) {
      window.location = "Home.html";
      chk = true;
    }
  });
  if (chk == false) {
    alert("Wrong Password or UserName");
  }
}

var User = [
  {
    name: "Abhisheik",

    password: "Gloriosa",
  },
];

function Verify(event) {
  event.preventDefault();
  // alert("Varuthu");
  let a = document.querySelector("#User");
  user = a.value;
  let b = document.querySelector("#Password");
  pass = b.value;

  chk = false;
  User.map((item) => {
    if (item.name === user) {
      chk = true;
      V1();
      return false;
    }
    alert("User does not Exist");
  });
}
