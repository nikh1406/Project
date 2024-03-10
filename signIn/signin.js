
export function signinForm() {

  let email = $("#emailsignin").val();
  let password = $("#passwdsignin").val();
  let i = JSON.parse(localStorage.getItem("signup"));
  if (i != {}) {
    let signInflag = false;
    i.forEach((data) => {
      if (data.email === email && data.password === password) {
        signInflag = true;
        return
      }
    });
    if (signInflag) {
      $("#emailsignin").val("");
      $("#passwdsignin").val("");
      $("#signup").hide();
      $("#signin").hide();
      window.location.replace("../section/Home/index.html");
    } else {
      window.alert("Email or password incorrect!");
      $("#emailsignin").val("");
      $("#passwdsignin").val("");
    }
  }
}