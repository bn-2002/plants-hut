const slides = document.getElementsByClassName('slider');
const slider = document.getElementById('slides');
const arrowLeft = document.getElementById("slide-left");
const arrowRight = document.getElementById('slide-right');

const slides2 = document.getElementsByClassName('slider2');
const slider2 = document.getElementById('slides2');
const arrowLeft2 = document.getElementById("slide-left2");
const arrowRight2 = document.getElementById('slide-right2');

const arrowLeftMove = function(s,arrowL) {
    arrowL.addEventListener('click',() => {
        s.scrollLeft -= 125;
    });    
};

const arrowRightMove = function(s,arrowR) {
    arrowR.addEventListener('click',()=>{
        s.scrollLeft += 125;
    })
};

arrowLeftMove(slider,arrowLeft);
arrowRightMove(slider,arrowRight);

arrowLeftMove(slider2,arrowLeft2);
arrowRightMove(slider2,arrowRight2);


const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
const maxScrollLeft2 = slider2.scrollWidth - slider2.clientWidth;

//autoplay Slider
function autoPlay() {
        if (slider.scrollLeft > (maxScrollLeft-1)) {
            slider.scrollLeft -= maxScrollLeft;
        } else {
            slider.scrollLeft += 1;
        }    
};



//autoplay Slider
function autoPlay2() {
    if (slider2.scrollLeft > (maxScrollLeft2-1)) {
        slider2.scrollLeft -= maxScrollLeft2;
    } else {
        slider2.scrollLeft += 1;
    }    
}


let play = setInterval(autoPlay,50);

let play2 = setInterval(autoPlay2,50);

const pauseSlider = function(s,s_slides) {
    for (let slide of s_slides) {
        slide.addEventListener('mouseover',()=> {
            clearInterval(play);
        });
        slide.addEventListener('mouseout',()=> {
            return play = setInterval(autoPlay,50);
        })
    }    
};


//pause slider on hover
for (let slide of slides) {
    slide.addEventListener('mouseover',()=> {
        clearInterval(play);
    });
    slide.addEventListener('mouseout',()=> {
        return play = setInterval(autoPlay,50);
    })
}

//pause slider on hover
for (let slide2 of slides2) {
    slide2.addEventListener('mouseover',()=> {
        clearInterval(play2);
    });
    slide2.addEventListener('mouseout',()=> {
        return play2 = setInterval(autoPlay2,50);
    })
}



