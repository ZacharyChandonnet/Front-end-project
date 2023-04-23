/**
 * @module App
 */
export default class App {
    /**
     * Méthode principale. Sera appelée après le chargement de la page.
     */
    static main() {
        this.header();
        this.questions();
        this.arrow();
        this.cursor();
    }
    /**
     * Méthode qui permet d'attendre le chargement de la page avant d'éxécuter le script principal
     * @returns undefined Ne retourne rien
    */
    static init() {
        window.addEventListener("load", () => {
            this.main();
        });
    }

    static header() {
        gsap.from('.header', {
            duration: 2,
            opacity: 0,
            ease: "power4.easeIn",
        });
    }

    static questions() {
        gsap.from('.container', {
            delay: 1,
            duration: 1.2,
            opacity: 0,
            ease: "power4.easeIn",
        });

        const toggleBtns = document.querySelectorAll(".toggle-btn");
        const questions = document.querySelectorAll(".question");

        toggleBtns.forEach((toggleBtn, index) => {
            const question = questions[index];
            const hiddenText = question.querySelector(".texte-cache");

            toggleBtn.addEventListener("click", () => {
                question.classList.toggle("show");
                if (question.classList.contains("show")) {
                    toggleBtn.innerHTML = '<i class="fa-solid fa-minus"></i>';
                    gsap.from(hiddenText, {
                        duration: 1,
                        opacity: 0,
                        ease: "power4.easeIn",
                    });
                } else {
                    toggleBtn.innerHTML = '<i class="fa-solid fa-plus"></i>';
                    gsap.to(hiddenText, {
                        duration: 1.2,
                        opacity: 0,
                        ease: "power4.easeIn",
                        clearProps: "opacity",
                    });
                }
            });
        });
    }

    static arrow() {
        const arrow = document.querySelector('.arrow');
        window.addEventListener('scroll', function () {
            const scrollTop = window.scrollY;
            gsap.to(arrow, { duration: 0.5, y: scrollTop });
        });
    }

    static cursor() {
        const cursor = document.querySelector(".circle-cursor");
        function moveCursor(e) {
            gsap.to(cursor, {
                duration: 0.5,
                x: e.clientX,
                y: e.clientY
            });
        }
        document.addEventListener("mousemove", moveCursor);
    }
}
App.init();
