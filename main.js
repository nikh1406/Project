import data from "./contruCode.json";
import { signup } from "./signup/signup"; 
import { signin } from "./signIn/signin"; 

$(document).ready(function () {
  $("#signup").hide();
  $("#signin").hide();
  $("#login").hide();
  let selectCountryCode = $("#selectCountryCode");
  data.forEach((item) => {
    if (item.dial_code == "+91") {
      $("<option />").text(item.dial_code).attr({ selected: true, value: `${item.dial_code}` }).appendTo(selectCountryCode);
    } else {
      $("<option />").text(item.dial_code).attr({ value: `${item.dial_code}` }).appendTo(selectCountryCode);
    }
  })

  $("#siguplink").click((e) => {
    e.preventDefault();
    $("#signup").show();
    $("#signin").hide();
    $("#login").hide();
    signup()
  })

  $(".signinLink").click((e)=>{
    e.preventDefault();
    $("#signin").show();
    $("#signup").hide();
    $("#login").hide();
    // signin()
  })


  $("#signupForm").click((e) => {
    e.preventDefault();
    signup()
  })
  $("#signupFormsignin").click((e) => {
    e.preventDefault();
    signin()
  });


  $("#signinBTN").click(()=>{
    $("#signup").hide();
    $("#signin").show();
  })
  $("#signupBTN").click(()=>{
    $("#signin").hide();
    $("#signup").show();
  })
  
});


