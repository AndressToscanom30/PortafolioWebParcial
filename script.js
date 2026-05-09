/* ANIMACIONES SCROLL */

const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }

    });

});

hiddenElements.forEach((el) => observer.observe(el));

/* PARTICULAS */

particlesJS("particles-js", {
    particles: {
        number: {
            value: 80
        },

        color: {
            value: "#38bdf8"
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: 0.5
        },

        size: {
            value: 3
        },

        move: {
            enable: true,
            speed: 2
        },

        line_linked: {
            enable: true,
            distance: 150,
            color: "#38bdf8",
            opacity: 0.4,
            width: 1
        }
    },

    interactivity: {
        detect_on: "canvas",

        events: {
            onhover: {
                enable: true,
                mode: "repulse"
            },

            onclick: {
                enable: true,
                mode: "push"
            }
        },

        modes: {
            repulse: {
                distance: 100
            },

            push: {
                particles_nb: 4
            }
        }
    },

    retina_detect: true
});

const videoCards = document.querySelectorAll('.video-card');

videoCards.forEach(card => {

    const video = card.querySelector('video');

    card.addEventListener('mouseenter', () => {

        video.play();

    });

    card.addEventListener('mouseleave', () => {

        video.pause();

        video.currentTime = 0;

    });

});