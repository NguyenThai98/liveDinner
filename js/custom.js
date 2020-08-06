

let ul = document.querySelector('#navbars-rs-food > ul');
let a = document.querySelectorAll('#navbars-rs-food ul li a');
a.forEach(el => {
    el.addEventListener('click', function () {
        if (ul.querySelector('.changeColorA') == null) {
            el.classList.add('changeColorA');
        } else {

            ul.querySelector('.changeColorA').classList.remove('changeColorA');
            el.classList.add('changeColorA');
            if (document.querySelector('.openDrop') != null) {
                document.querySelector('.openDrop').classList.remove('openDrop');

            }
        }
        if (el.parentElement.querySelector('.dropdown-a')) {

            if (document.querySelector('.openDrop') != null) {

                document.querySelector('.openDrop').classList.remove('openDrop');

            } else {

                el.parentElement.querySelector('.dropdown-a').classList.toggle('openDrop');
            }
        }


    })
})
// slide show


var slideIndex = 1;
showSlides();
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    if (slideIndex > slides.length) { slideIndex = 1 }

    if (slideIndex < 1) { slideIndex = slides.length }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";

    dots[slideIndex - 1].className += " active";

}


// slide showxxxx


// start menu
let orderAllFood = document.querySelectorAll('.search-food > div > a');

let products = document.querySelectorAll('.all-food > div');

orderAllFood.forEach((el, index) => {
    el.addEventListener('click', function () {
        let nameProducts = changeIndex(index);

        if (el.parentElement.querySelector('.menufood') != null) {
            console.log('xoa 1');
            el.parentElement.querySelector('.menufood').classList.remove('menufood');
            el.classList.add('menufood');
        } else {
            console.log('them 2');
            el.classList.add('menufood');
        }
        products.forEach(el => {
            if (el.className != nameProducts) {
                el.style.display = "none";
            } else {
                el.style.display = "inline-block";
            }
            if (nameProducts == "all") {
                el.style.display = "inline-block";
            }
        })

    })
})


function changeIndex(index) {
    if (index == 0) {
        index = "all";
    } else if (index == 1) {
        index = "drinks";
    } else if (index == 2) {
        index = "lunch";
    } else {
        index = "Dinner";
    }
    return index;
}



// start menuxxxxxxxx


// reviews

let allReviews = document.querySelectorAll('.reviews > div');

let reviewsPrev = document.querySelector('.reviewsPrev');
let reviewsNext = document.querySelector('.reviewsNext');

let indexSlide = 0;
console.log(indexSlide);
for (let i = 0; i < allReviews.length; i++) {
    if (indexSlide == i) {

        allReviews[i].style.display = "block";

    } else {
        allReviews[i].style.display = "none";

    }
}

reviewsPrev.addEventListener('click', function () {
    indexSlide--;
    if (indexSlide < 0) {
        indexSlide = allReviews.length - 1;
    }
    console.log(indexSlide);
    for (let i = 0; i < allReviews.length; i++) {

        if (indexSlide == i) {

            allReviews[i].style.display = "block";

        } else {
            allReviews[i].style.display = "none";


        }


    }
})

reviewsNext.addEventListener('click', function () {
    indexSlide++;
    if (indexSlide >= allReviews.length) {
        indexSlide = 0;
    }
    for (let i = 0; i < allReviews.length; i++) {

        if (indexSlide == i) {
            allReviews[i].style.display = "block";


        } else {
            allReviews[i].style.display = "none";


        }


    }
})
// reviewsxxxxxxxxxxxxx