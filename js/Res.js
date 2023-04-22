/**
 * @module App
 */
export default class App {
    /**
     * Méthode principale. Sera appelée après le chargement de la page.
     */
    static main() {
      this.title();
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

    static title(){
        gsap.from('.title',{
            duration: 1.2,
            opacity: 0,
            x: -500,
            ease: "power4.easeIn",
        });
    }
  
}
App.init();
