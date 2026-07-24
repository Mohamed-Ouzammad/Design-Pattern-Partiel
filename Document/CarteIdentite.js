import AbstractDocument from "./AbstractDocument.js";

export default class CarteIdentite extends AbstractDocument {

    constructor(personne) {
        super(personne);
    }

    decouper() {
        console.log("Découpe de la carte...");
    }

    operationSpecifique() {
        console.log("Plastification de la carte");

        // Petite vérification finale
        console.log("Carte prête.");
    }

}