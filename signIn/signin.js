
export function signin() {

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
    if(signInflag){
      $("#signup").hide();
      $("#signin").hide();
      $("#login").show()
    }else{
      window.alert("Email or password incorrect!");
      $("#emailsignin").val("");
      $("#passwdsignin").val("");
    }
  }
}