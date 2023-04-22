/**
 * @module App
 */
export default class App {
    /**
     * Méthode principale. Sera appelée après le chargement de la page.
     */
    static main() {

        this.workTitle();
        this.container();
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


    static workTitle() {
        gsap.from('.twork', {
            duration: 1.2,
            x: -500,
            opacity: 0,
            ease: "power4.easeIn",
        });
    }

    static container() {
        const sections = document.querySelectorAll('.section');
        gsap.from('.us', {
            delay: 1.2,
            duration: 1.2,
            opacity: 0,
            ease: "power4.easeIn",
        });
        gsap.from(sections, {
            duration: 2,
            opacity: 0,
            y: 50,
            ease: "power4.easeOut",
            stagger: 0.7 // Change this value to adjust the delay between each section
        });
    }
    
}
App.init();
