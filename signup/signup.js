
export function signupForm() {

  let obj = {
    name: $("#name").val(),
    email: $("#email").val(),
    phone: `${$("#selectCountryCode").val()}${$("#phone").val()}`,
    password: $("#passwd").val(),
  }
  let localdata = localStorage.getItem("signup");
  if (!localdata) {
    localdata = [];
  } else {
    localdata = JSON.parse(localdata);
  }

  localdata.push(obj);
  localStorage.setItem("signup", JSON.stringify(localdata))

  $("#name").val("");
  $("#email").val("");
  $("#phone").val("");
  $("#passwd").val("");

}