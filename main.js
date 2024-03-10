import data from "./contruCode.json";
import { signupForm } from "./signup/signup"; 
import { signinForm } from "./signIn/signin"; 

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
    $("#homeDefaultBody").hide();
    $("#signup").show();
    $("#signin").hide();
    $("#login").hide();
    $("#signupFormsignin").click((e) => {
      e.preventDefault();
      signinForm()
    });
  })

  $(".signinLink").click((e)=>{
    $("#homeDefaultBody").hide();
    e.preventDefault();
    $("#signin").show();
    $("#signup").hide();
    $("#login").hide();
    $("#signupForm").click((e) => {
      e.preventDefault();
      signupForm()
    })
  })


  $("#signupForm").click((e) => {
    e.preventDefault();
    $("#homeDefaultBody").hide();
    signupForm()
  })
  $("#signupFormsignin").click((e) => {
    e.preventDefault();
    $("#homeDefaultBody").hide();
    signinForm()
  });


  $("#signinBTN").click(()=>{
    $("#homeDefaultBody").hide();
    $("#signup").hide();
    $("#login").hide();
    $("#signin").show();
  })
  $("#signupBTN").click(()=>{
    $("#homeDefaultBody").hide();
    $("#signin").hide();
    $("#login").hide();
    $("#signup").show();
  })
  
});


