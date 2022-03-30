//switch between pages(navigation)
const hamburger = document.querySelector('.hamburger-menu');
const nav = document.querySelector('.nav');

hamburger.addEventListener("click",()=> {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
});

document.querySelectorAll('.nav-item').forEach(link => link.addEventListener("click",() => {
    if (hamburger.classList.contains('active')) {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
    }
}))


//nav-tab(product-details.html)
function tabs(e,name) {
    const tabBtns = document.getElementsByClassName('tab-btn');
    const tabContents = document.getElementsByClassName('tab-content');

    for (const tabBtn of tabBtns) {
        tabBtn.classList.remove('active');
    }

    for (const tabContent of tabContents) {
        tabContent.style.display ='none';
    }

    document.getElementById(name).style.display = 'block';
    e.currentTarget.classList.add('active');
}

//scroll

const header = document.querySelector('header');


window.addEventListener('scroll',()=> {
    if (window.scrollY > header.clientHeight + nav.clientHeight) {
    header.classList.add('scrolling-active-header');
    // nav.classList.add('scrolling-active-nav')
    } else {
        header.classList.remove('scrolling-active-header');
        // nav.classList.remove('scrolling-active-nav')
    }
})

