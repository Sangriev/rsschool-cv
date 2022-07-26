
// Slider Start
const prev = document.getElementById('btn__prev'),
    next = document.getElementById('btn__next'),
    slides = document.querySelectorAll('.steps__slider__item'),
    dots = document.querySelectorAll('.dot');

let index = 0;

const activeSlide = n => {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[n].classList.add('active')
}

const activeDot = n => {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[n].classList.add('active')
}

const prepareCurrentSlide = ind => {
    activeSlide(ind);
    activeDot(ind);
}

const nextSlide = () => {
    if (index == slides.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
    } else {
        index++;
        prepareCurrentSlide(index);
    }
}

const prevSlide = () => {
    if (index == 0) {
        index = slides.length - 1;
        prepareCurrentSlide(index);
    } else {
        index--;
        prepareCurrentSlide(index);
    }
}

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide(index);
    })
})

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

// Slider end


// Pop up LogIn Start

const modalTrigger = document.querySelector('[data-modal]'),
    modal = document.querySelector('.popup__login'),
    modelBody = document.querySelector('.popup__body');

modalTrigger.addEventListener('click', () => {
    modal.classList.remove('hide');
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
});

function closeModal() {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = "";
}

modal.addEventListener('click', (e) => {
    if (e.target === modelBody) {
        closeModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.code === "Escape") {
        closeModal();
    }
});

// Pop up LogIn End

const modalTransition = document.querySelector('[data-register]'),
    modalCreate = document.querySelector('.popup__create'),
    modalCreateBody = document.querySelector('.popup__body__create');

function closeModalCreate() {
    modalCreate.classList.add('hide');
    modalCreate.classList.remove('show');
    document.body.style.overflow = "";
}


modalTransition.addEventListener('click', () => {
    closeModal();
    modalCreate.classList.add('show');
});

modalCreate.addEventListener('click', (event) => {
    if (event.target === modalCreateBody) {
        closeModalCreate();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.code === "Escape") {
        closeModalCreate();
    }
});