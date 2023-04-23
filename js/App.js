/**
 * @module App
 */
export default class App {
    /**
     * Méthode principale. Sera appelée après le chargement de la page.
     */
    static main() {
        this.mainTitle();
        this.nav();
        this.SlideShow();
        this.menuHamburger();
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

    static mainTitle() {
        gsap.from(".mainTitle", {
            duration: 1.2,
            x: -500,
            opacity: 0,
            ease: "power4.easeIn",
        });
    }


    static nav() {
        gsap.from(".navbar", {
            duration: 1.2,
            y: -50,
            opacity: 1,
            ease: "power4.easeIn",
        });

        gsap.from(".nav-links", {
            duration: 1.2,
            opacity: 0,
            ease: "power2.out",
        });
    }

    static SlideShow() {

        const slides = gsap.utils.toArray('.slide');
        let currentIndex = 0;

        slides[currentIndex].style.opacity = 1;

        function showSlide(index) {
            // Fonction pour afficher une diapositive
            gsap.to(slides[currentIndex], { opacity: 0, duration: 1.5 }); // Animer la diapositive précédente pour la masquer avec un fondu (fade out)
            gsap.to(slides[index], { opacity: 1, duration: 1.5 }); // Animer la diapositive courante pour l'afficher avec un fondu (fade in)
            currentIndex = index; // Mettre à jour l'index de l'image courante
        }

        function nextSlide() {
            // Fonction pour afficher la diapositive suivante
            let newIndex = currentIndex + 1; // Calculer l'index de la diapositive suivante
            if (newIndex >= slides.length) {
                newIndex = 0; // Revenir à la première diapositive si on atteint la fin du diaporama
            }
            showSlide(newIndex);
        }
        setInterval(nextSlide, 3000);
    }

    static menuHamburger() {
        const menuHamburger = document.querySelector(".menu-ham")
        const navLinks = document.querySelector(".nav-links")

        menuHamburger.addEventListener('click', () => {
            navLinks.classList.toggle('mobile-menu')
        })
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
