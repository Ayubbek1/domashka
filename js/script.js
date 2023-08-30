let offer__slides = document.querySelectorAll(".offer__slide")
let tabbtns = document.querySelectorAll(".tabheader__item")
let modal = document.querySelector(".modal")
let modal_close = document.querySelector("[data-close]")
let btns = document.querySelectorAll("[data-modal]")
let tabcons = document.querySelectorAll('.tabcontent')
let imgs = document.querySelectorAll('.imga')
let a = document.querySelectorAll('.a')
let form = document.forms.signup
let images = {
    "fitness": "img/tabs/vegy.jpg",
    "premium": "img/tabs/elite.jpg",
    "post": "img/tabs/post.jpg",
    "balance": "img/tabs/vegy.jpg"
}
let pattern = {
    name: /^[a-z ,.'-]+$/i,
    tel: /^998(9[012345789]|6[125679]|7[01234569])[0-9]{7}$/,

}
btns.forEach(btn => {
    btn.onclick = () => {
        modal.style.display = "block"
    }
});
modal_close.onclick = () => {
    modal.style.display = "none"
}
a.forEach(e => {
    e.style.display = "none"
});
tabbtns.forEach(btn => {
    btn.onclick = () => {

        let link = images[btn.getAttribute("data")]
        imgs.forEach(element => {
            element.setAttribute("src", link)

        });

        // if(btn.getAttribute("data")===)
        for (const i of tabbtns) {
            i.setAttribute("class", "tabheader__item")
        }
        btn.setAttribute("class", "tabheader__item_active")
    }
});
let inps = form.querySelectorAll('input')
let error = false
console.log(inps);
inps.forEach(inp => {
    inp.onkeyup = () => {
        console.log(1);
        error = false
        let key = inp.getAttribute("name")
        if (pattern[key].test(inp.value)) {
            inp.style.border = "1px solid green"
            inp.color = "green"
            inp.style.borderColor = "green"

        } else {
            error = true
            inp.style.border = "1px solid red"
            inp.color = "red"
            inp.style.borderColor = "red"
        }

    }
})
form.onsubmit = (event) => {
    event.preventDefault();


    inps.forEach(inp => {

        if (inp.value.length === 0) {
            error = true
            inp.style.border = "1px solid green"
            inp.color = "green"
            inp.style.borderColor = "green"

        } else {
            inp.style.border = "1px solid red"
            inp.color = "red"
            inp.style.borderColor = "red"

        }

    })


    if (error) {
        alert('go home')
    } else {
        submit()
    }

}

function submit() {
    let user = {}

    let fm = new FormData(form)
    fm.forEach((value, key) => {
        user[key] = value
    })
    inps.forEach(inp => {
        inp.style.border = "none"
    })


    console.log(user);
}
let left_but = document.querySelector(".offer__slider-prev")
let right_but = document.querySelector(".offer__slider-next")
let current = document.querySelector("#current")
let cur_slide = 3
offer__slides.forEach((slide, idx) => {
    slide.classList.add("hide")
    offer__slides[2].classList.remove("hide")
});
left_but.onclick = () => {

    if (cur_slide === 1) {
        cur_slide++
        cur_slide = 5
    }
    cur_slide--
    offer__slides.forEach((slide, idx) => {
        slide.classList.add("hide")
        if (cur_slide == idx + 1) {
            slide.classList.add("hide")
            offer__slides[idx].classList.remove("hide")
        }
    });
    current.innerHTML = `0${cur_slide}`
}
right_but.onclick = () => {

    if (cur_slide === 4) {
        cur_slide--
        cur_slide = 0
    }
    cur_slide++
    offer__slides.forEach((slide, idx) => {
        slide.classList.add("hide")
        if (cur_slide == idx + 1) {
            slide.classList.add("hide")
            offer__slides[idx].classList.remove("hide")
        }
    });
    current.innerHTML = `0${cur_slide}`
}
//_-----------_---------------------------------T-----------------------------------------------------------//
//_-----------_---------------------------------I-----------------------------------------------------------//
//_-----------_---------------------------------M-----------------------------------------------------------//
//_-----------_---------------------------------E-----------------------------------------------------------//
//_-----------_---------------------------------R-----------------------------------------------------------//
let timers = document.querySelectorAll(".timer__block span")
let confet = document.querySelector("#my-canvas")
var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render(); var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();
let inv = setInterval(() => {
    timers[3].innerHTML--
    if (timers[3].innerHTML <-1 && timers[2].innerHTML <= 0) {
        confet.style.visibility = "visible"
        timers[3].innerHTML = 0
        clearInterval(inv)
    }
}, 1000);
timers.forEach((t, idx) => {
    setInterval(() => {
        timer(idx)
    }, 1000);
});
function timer(pos) {
    if (pos !== 0 && pos !== 1 && timers[pos].innerHTML <= 0 && timers[pos - 1].innerHTML > 0) {
        timers[pos - 1].innerHTML--
        timers[pos].innerHTML = 60
    } else if (timers[1].innerHTML <= 0 && timers[0].innerHTML > 0) {
        timers[0].innerHTML--
        timers[1].innerHTML = 24
    }
}
