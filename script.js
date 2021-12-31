
let topics = ["mobile apps ", "website ", "product"];
let slideIndex = 1;
let slideIndexWork = 1;
let slideIndexMember = 1;
const featureImg = document.querySelector(".feature-img");
const featureTitle = document.querySelector(".feature-title");
const featureDesc = document.querySelector(".feature-desc");
const featureContainer = document.querySelector(".feature-container");
const featuresHeading = document.getElementsByClassName("feature-heading");
const companies = document.getElementsByClassName("companies")
// The index of the currently selected letter from each word
let index = 0;
// The index of the currently selected word from topics
let currentIndex = 0;
// Typing text element

//delay function 
function waitforme(ms) {

  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}




showSlidesQuestion(slideIndex);
showSlidesWork(slideIndexWork);
showSlidesMember(slideIndexMember);
// Next/previous controls
function plusSlidesWork(n) {
  showSlidesWork((slideIndexWork += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlidesQuestion((slideIndex = n));
}
function currentSlideQuestion(n) {
  showSlidesQuestion((slideIndex = n));
}

function currentSlidMember(n) {
  showSlidesMember((slideIndexMember = n));
}

function showSlidesMember(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides-member");
  var dots = document.getElementsByClassName("dot-member");
  if (n > slides.length) {
    slideIndexMember = 1;
  }
  if (n < 1) {
    slideIndexMember = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexMember - 1].style.display = "block";
}

function showSlidesQuestion(n) {

}
function showSlidesWork(n) {


  var i;
  var slides = document.getElementsByClassName("mySlides-work");
  var dots = document.getElementsByClassName("dot-work");
  if (n > slides.length) {
    slideIndexWork = 1;
  }
  if (n < 1) {
    slideIndexWork = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexWork - 1].style.display = "block";
}
















$(document).ready(function () {

  $('.responsive').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 30000000,
    dots: true,
    arrows: false,
  });
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;



})






$(".work-img-wrapper").hover(function () {
  $("work-img-wrapper-hover p").css("opacity:1")
})

var video = $("#myvideo")
var time = 2000;


var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  var t = d.toLocaleTimeString();
  document.getElementById("demo").innerHTML = t;
  clearInterval(myVar);


}




function myTimer() {
  if (video[0].readyState === 4) {
    loadvideo()

  }
  else {
    loader()

  }


}


function mytop() {


}
function loadvideo() {

  $("#loader").css("display", "none")
  $(".top-section").css("display", "block")
  video[0].currentTime = 2


  clearInterval(myVar)




}

function loader() {


  $(".top-section").css("display", "none")
  $("#loader").css("display", "block")

  clearInterval(myTop)
}


$(".logo").click(function () {

  window.open('https://www.99xstartup.com', '_blank');

})
$(".business-logo").click(function () {
  window.open("mailto:")
})

$(".btn-book").click(function () {
  $("#popup").show()
})
$(".btn-call").click(function () {

  $("#popup").show()
})
$("#cut-btn").click(function () {
  $("#popup").hide()
})
$(".work-img").click(function () {
  var id = $(this).attr("id")
  var link = returnDay(id)
 window.open(link,'download')
})

function returnDay(val) {
  switch (val) {
    case "1":
      return "https://drive.google.com/file/d/1I2VSRgXRIoftl7Sp5Pnk8rGF1F4w3Nqc/view?usp=sharing";
    case "2":
      return "https://drive.google.com/file/d/1n_fdY76AGN22locgzbnv27vMb80P8i-G/view?usp=sharing";
    case "3":
      return "https://drive.google.com/file/d/1tDsX2G9lhFtb3GkyPmXXJQYsdcZ_0gnC/view?usp=sharing";
    case "4":
      return "https://drive.google.com/file/d/1EbpEJC8jRgaArIy1Mg6JDAevCipi_IoC/view?usp=sharing";
    case "5":
      return "https://drive.google.com/file/d/1R6wDkpy-dYn3rn0K9oP2UvOInE-xDGiO/view?usp=sharing";
    case "6":
      return "https://drive.google.com/file/d/1s37825aCWfGU5_G2JyJO3DC7nDQHEvmk/view?usp=sharing";
    case "7":
      return "https://drive.google.com/file/d/1vtuxvdaN-CHlFMgYPW2oiB_b5R-bwRfm/view?usp=sharing";
    case "8":
      return "https://drive.google.com/file/d/13sEW5Lfdsqlaj7iGO3-i0DIfSCtaj7bn/view?usp=sharing";
    case "9":
      return "https://drive.google.com/file/d/1A7VwcQH0rWFeox9nRaprtw4dO8xmpSey/view?usp=sharing";
    case "10":
      return "https://drive.google.com/file/d/1fA-2O1kLCoB3GjB_OfDXXJ8ou9h4wITr/view?usp=sharing";
    case "11":
      return "https://drive.google.com/file/d/1UK90fWgCs9piGeBexLuXVY2OmgvdySVR/view?usp=sharing";
    case "12":
      return "https://drive.google.com/file/d/1A6QBq2P_g1rmE5f2Q-9Am1niO4CQeYmt/view?usp=sharing";

  }
}
$(".row-img").click(function () {
  var id = $(this).find("img").attr("id")
  var link = returnDay(id)
  window.open(link, '_blank');
})





$(".row-img").mouseover(function () {
  var para = $(this).find(".row-hide-para")
  para.show(500)


})
$(".row-img").mouseleave(function () {
  var para = $(this).find(".row-hide-para")
  para.hide(500)


})





new Typed('#typed', {
  strings: topics,
  typeSpeed: 80,
  delaySpeed: 80,
  loop: true
});


new Typed('#ty', {
  strings: topics,
  typeSpeed: 80,
  delaySpeed: 80,
  loop: true
});


new Typed('#typ', {
  strings: topics,
  typeSpeed: 80,
  delaySpeed: 80,
  loop: true
});

new Typed('#type', {
  strings: topics,
  typeSpeed: 80,
  delaySpeed: 80,
  loop: true
});


$(".features-titles h3").click(function(){

var id =$(this).attr("id")
$(".features-titles h3").removeClass("blue")
$(this).addClass("blue")
changeFeature(id)

})

 function changeFeature(id){


























}

//  function changeFeature(n) {
  
//   switch (n) {
//     case "1":
//       featureImg.src = "./assest/team_playbook_wS3bb0Xup.webp";

//        featureTitle.textContent = "A Professional Team at your fingertips";      featureDesc.textContent =        "Quickly sign up for the services you need. We take care of the quality & the delivery of the work. Sitback relax and get the best talents and services with ease.";
//   document.querySelector(".companies-container").style.display = "flex";   document.querySelector(
//      ".companies-container"
//    ).children[1].children[0].src = "./assest/fiverr.webp";
//       document.querySelector(
//         ".companies-container"
//       ).children[1].children[1].src = "./assest/upwork.webp";
//       document.querySelector(
//         ".companies-container"
//       ).children[2].children[2].src = "./assest/toptal.webp";
//       break;
//     case "2":

//       featureImg.src = "./assest/Group_1114_rrDBVZspY.webp";
//       featureTitle.textContent = "Everything from Digital to Design to Tech";
//       featureDesc.textContent =
//         "Say goodbye to the limitations. Whether you’re an early Stage Startup or an Enterprise, we cater to services across categories. Plug & Play subscriptions on the fly.";
//       document.querySelector(".companies-container").style.display = "flex";
//       document.querySelector(
//         ".companies-container"
//       ).children[1].children[0].src = "./assest/fiverr.webp";
//       document.querySelector(
//         ".companies-container"
//       ).children[1].children[1].src = "./assest/upwork.webp";
//       document.querySelector(
//         ".companies-container"
//       ).children[2].children[2].src = "./assest/toptal.webp";

//       break;
//     case "3":
    
//       featureImg.src = "./assest/Customer_Support_LVHFuUT0GH.webp";
//       featureTitle.textContent = "Collaboration, Team & Project Management";
//       featureDesc.textContent =
//         "Say goodbye to the limitations. Whether you’re an early Stage Startup or an Enterprise, we cater to services across categories. Plug & Play subscriptions on the fly.";
//       document.querySelector(
//         ".companies-container"
//       ).children[1].children[0].src = "./assest/asana.webp";
//       document.querySelector(
//         ".companies-container"
//       ).children[1].children[1].src = "./assest/trello.webp";
//       document.querySelector(
//         ".companies-container"
//       ).children[2].children[2].src = "./assest/jira.webp";
//       document.querySelector(".companies-container").style.display = "flex";
//       break;
//     case "4":
   
//       featureImg.src = "./assest/everything_you_need_h4Lf6wrnxz.webp";
//       featureTitle.textContent = "Collaboration, Team & Project Management";
//       featureDesc.textContent =
//         "We’d love to solve your problems, in fact, we insist. Our support team is personable, friendly, and always available to help. You can always expect a real human to answer all your questions.";
//       document.querySelector(".companies-container").style.display = "none";
//       break;
//     case "5":
   
//       featureImg.src = "./assest/free_trial_934ceM8Zbk.webp";
//       featureTitle.textContent = "Free-Trials & No-questions asked refunds";
//       featureDesc.textContent =
//         "You’ll fall in love with us. But, If you don’t and you’re not  100% satisfied after a trial, we’ll refund your money back, No questions asked whatsoever. Tryus out now risk-free.";
//       document.querySelector(".companies-container").style.display = "none";
//       break;



//     default:

//       featureImg.src = "/images/features-image/img-1.png";
//       document.querySelector(".companies-container").style.display = "flex";



//   }
// }





// var msgpopup = document.getElementById("message-popup-container")
// var message = document.getElementById("message")
// var container = document.getElementById('form-wrapper')
// var form = document.getElementById("form");
// form.addEventListener("submit", e => {
//   e.preventDefault();
//   fetch("https://sheetdb.io/api/v1/q45tehsrqv3uq", {
//     method: "POST",
//     body: new FormData(document.getElementById("form")),
//   }).then(response => response.json()).then((html) => {

//     container.style.display = "none"
//     msgpopup.style.display = "flex"
//     message.innerText = "Thank You! "
//   }).catch(err => {
//     container.style.display = "none"
//     msgpopup.style.display = "flex"
//     message.innerText = err
//     message.style.color = "red"
//   })
// });


// $("#mst-btn").click(() => {
//   $("#message-popup-container").hide()
// })
