let lastScrollTop = 0;
window.addEventListener('scroll', function () {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;
    const nav = document.querySelector('nav');
    if (scrolled > lastScrollTop) {
        nav.style.top = -70 + 'px';
    } else {
        nav.style.top = 0 + 'px';
    }
    lastScrollTop = scrolled;
})



const config = {
    type: 'carousel',
    perView: 1,
    autoplay: 3000,
}
new Glide(".glide", config).mount()




const cards = document.querySelectorAll('.card');

for (var i = 0; i < cards.length; i++) {
    const card = cards[i];
    card.addEventListener('mousemove', startRotate);
    card.addEventListener('mouseout', stopRotate);
}

function startRotate(e) {
    const cardItem = this.querySelector('.cardItem');
    const halfHeight = cardItem.offsetHeight / 2;
    const halfWidth = cardItem.offsetWidth / 2;
    cardItem.style.transform = 'rotateX(' + -(event.offsetY - halfHeight) / 8 + 'deg) rotateY(' + (event.offsetX - halfWidth) / 10 + 'deg)';
}

function stopRotate(e) {
    const cardItem = this.querySelector('.cardItem');
    cardItem.style.transform = 'rotate(0)';
}