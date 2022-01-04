

// video load function
var video = $("#myvideo")
var myVar = setInterval(myTimer, 1000);
async function myTimer() {
    if (video[0].readyState === 4) {
    
        $("#loader").css("display", "none")
        $("#timeline").css("display", "block")
        $(".top-section").css("display", "block")
   
        $("#const").css("display", "block")
        $(".call-btn-container").css("display", "block")
        $(".container2").css("display", "flex")
        $("footer").css("display", "block")
        video[0].currentTime = 1
        clearInterval(myVar)
    }
    else {
        $("#loader").css("display", "block")
        $("#timeline").css("display", "none")
        $(".top-section").css("display", "none")
        $("#const").css("display", "none")
        $(".call-btn-container").css("display", "none")
        $(".container2").css("display", "none")
        $("footer").css("display", "none")
    }
}
// transition text
let topics = ["Mobile Apps ", "Websites ", "Products"];

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
//   carousal
$(document).ready(function () {

    $('.responsive').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false,
    });





})
$('.marquee-container').marquee({
    direction: 'left',
    duration: 14000,
    gap: 50,
    delayBeforeStart: 0,
    duplicated: true,
    startVisible: true
});
$('.marquee-container1').marquee({
    direction: 'right',
    duration: 14000,
    gap: 50,
    delayBeforeStart: 0,
    duplicated: true,
    startVisible: true
});

let slideIndex = 1;
let slideIndexWork = 1;
let slideIndexMember = 1;
showSlidesQuestion(slideIndex);
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


//para show

$(".row-img").mouseover(function () {
    var para = $(this).find(".row-hide-para")
    para.show(500)


})
$(".row-img").mouseleave(function () {
    var para = $(this).find(".row-hide-para")
    para.hide(500)


})

// 
var data = [

    {
        image: "./assest/happy.webp",
        heading: "A Professional Team at your fingertips",
        paragraph: "Quickly sign up for the services you need. We take care of the quality & the delivery of the work. Sitback relax and get the best talents and services with ease.",
        comImg: ["/assest/replace.webp", "/assest/fiverr.webp", "/assest/upwork.webp", "./assest/toptal.webp"]
    }
    , {
        image: "./assest/network.webp",
        heading: "Everything from Digital to Design to Tech",
        paragraph: "Say goodbye to the limitations. Whether you’re an early Stage Startup or an Enterprise, we cater to services across categories. Plug & Play subscriptions on the fly.",
        comImg: ["/assest/replace.webp", "/assest/fiverr.webp", "/assest/upwork.webp", "./assest/toptal.webp"]
    }, {
        image: "./assest/net.webp",
        heading: "Collaboration, Team & Project Management",
        paragraph: "Bring your team’s goals, plans, tasks, files, and more together in one shared space. Collaborate with your team, manage projects, and collaborate - all in one workspace.",
        comImg: ["/assest/replace.webp", "/assest/asana.webp", "/assest/trello.webp", "/assest/jira.webp",]
    }, {
        image: "./assest/rachel.webp",
        heading: "We are here for you to succeed",
        paragraph: "We’d love to solve your problems, in fact, we insist. Our support team is personable, friendly, and always available to help. You can always expect a real human to answer all your questions.",
        comImg: ["", "", "", ""]
    }, {
        image: "./assest/succes.webp",
        heading: "Try us our 100% Risk-free today!",
        paragraph: "You’ll fall in love with us. But, If you don’t and you’re not 100% satisfied after a trial, we’ll refund your money, No questions asked whatsoever. Try us out now risk-free. ",
        comImg: ["/assest/replace.webp", "/assest/fiverr.webp", "/assest/upwork.webp", "./assest/toptal.webp"]
    }
]
$(".features-titles h3").click(function () {

    var id = $(this).attr("id")
    $(".features-titles h3").removeClass("blue")
    $(this).addClass("blue")
    changeFeature(id)
})
function changeFeature(id) {
    $(".feature-img").attr({ src: data[id].image })
    $(".feature-title").text(data[id].heading)
    $(".feature-desc").text(data[id].paragraph)
    $(".company-img1").attr({ src: data[id].comImg[0] })
    $(".company-img2").attr({ src: data[id].comImg[1] })
    $(".company-img3").attr({ src: data[id].comImg[2] })
    $(".company-img4").attr({ src: data[id].comImg[3] })

}
$(".business-logo").click(function () {
    window.open("mailto:business@99x.network")
})
$("#cut-btn").click(() => {
    $("#popup").css("display", "none")
}
)
$(".btn-book").click(() => {
    $("#popup").css("display", "flex")
}
)








var form = document.getElementById("form");
form.addEventListener("submit", e => {
    e.preventDefault();
    fetch("https://sheetdb.io/api/v1/q45tehsrqv3uq", { method: "POST", body: new FormData(document.getElementById("form")) })
        //   .then(response => response.json())
        .then((res) => {
            if (res.status === 400) {
                location.assign("./thanku.html")
            }
        })
        .catch(err => { console.log(err) })
});


// $("#mst-btn").click(() => {
//   $("#message-popup-container").hide()
// })
