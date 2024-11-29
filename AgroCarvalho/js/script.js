const imgpath = ["img/img1.jpg","img/img2.jpg","img/img3.jpg","img/img4.jpg","img/img5.jpg","img/img6.jpg"];
const next = document.getElementById('next');
const back = document.getElementById('back');
var carouselimage = document.getElementById('carousel');
var timer = setTimeout(() => {nextimage()}, 2000);
let currentimg = 0;

function nextimage(){
    currentimg++;
    if (currentimg >= imgpath.length) {
        currentimg = 0;
    }
    carouselimage.src = imgpath[currentimg];
    clearTimeout(timer)
    timer = setTimeout(() => {nextimage()}, 2000);
}

function backimage(){
    currentimg--;
    if (currentimg < 0) {
        currentimg = imgpath.length-1;
    }
    carouselimage.src = imgpath[currentimg];
    clearTimeout(timer)
    timer = setTimeout(() => {nextimage()}, 2000);
}

next.addEventListener('click', nextimage)
back.addEventListener('click', backimage)