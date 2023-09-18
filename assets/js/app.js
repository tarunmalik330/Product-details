$('.responsive').slick({
    dots: false,
    infinite: true,
    arrows: false,
    // autoplay: true,
    // cssEase: 'linear',
    // autoplaySpeed: 0,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
            }
        },
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 630,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
$('.slick_slider').slick({
    dots: false,
    infinite: true,
    arrows: false,
    // autoplay: true,
    // cssEase: 'linear',
    // autoplaySpeed: 0,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    // rtl:true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
            }
        },
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 630,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
$('.myslider').slick({
    dots: false,
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
            }
        },
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 791,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 770,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
$('.custum-slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
            }
        },
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 791,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        }
    ]
});


function openNav() {
    document.getElementById("navbar").classList.toggle("end-0");
    document.body.classList.toggle("overflow_hidden");
    document.getElementById("menubtn-icon").classList.toggle("cross")
}
let button = document.getElementById("counter-subtract")
let p = document.getElementById("number")
let button1 = document.getElementById("counter-add")

button1.addEventListener("click", function () {
    p.innerHTML = +p.innerHTML + 1
})

button.addEventListener("click", function () {
    if (p.innerHTML == 0) {
        button.classList.add("disable")
    } else if (p.innerHTML > 0) {
        button.classList.remove("disable")
        p.innerHTML = p.innerHTML - 1
    }

})
setTimeout(() => {
    console.log("Delayed for 5 second.");
    document.getElementById("preloader").classList.add("opacity-0")
    document.getElementById("preloader").classList.add("pointer_event_none")
    document.body.classList.remove("overflow-hidden")
}, 5000);