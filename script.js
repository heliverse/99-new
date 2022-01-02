

// video load function
var video = $("#myvideo")
var myVar = setInterval(myTimer, 1000);
async function myTimer() {
    if (video[0].readyState === 4) {
        $("#loader").css("display", "none")
        $(".top-section").css("display", "block")
        video[0].currentTime = 1
        clearInterval(myVar)
    }
    else {
        $(".top-section").css("display", "none")
        $("#loader").css("display", "block")

    }
}
// transition text
let topics = ["mobile apps ", "website ", "product"];

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
        autoplaySpeed: 300000000000000000000,
        dots: true,
        arrows: false,
    });
})
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

$(".row-img").click(function () {
    var id = ($(this).find('img').attr("id"))
    var link = returnDay(id)
    window.open(link, 'Download')
})
$(".work-img").click(function () {
    var id = $(this).attr("id")

    var link = returnDay(id)
    window.open(link, 'Download')
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
