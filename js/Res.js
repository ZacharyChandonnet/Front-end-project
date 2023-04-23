/**
 * @module App
 */
export default class App {
    /**
     * Méthode principale. Sera appelée après le chargement de la page.
     */
    static main() {
        this.title();
        this.from();
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

    static title() {
        gsap.from('.title', {
            duration: 2,
            opacity: 0,
            y: -100,
            ease: "power4.easeIn",
        });
    }

    static from() {
        gsap.from('.form', {
            delay: 1.5,
            duration: 2,
            opacity: 0,
            y: -50,
            ease: "power4.easeIn",
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
