import AbstractDocument from "../Document/AbstractDocument.js";

// Classe fournie par la CPAM
// Impossibke de modifier son fonctionnement
class CarteVitaleCPAM {

    fetchPatientData() {
        console.log("Récupération des données patient...");
    }

    initializeInk() {
        console.log("Initialisation des encres...");
    }

    verifySupport() {
        console.log("Vérification du support...");
    }

    startPrint() {
        console.log("Lancement de l'impression...");
    }

    cutCard() {
        console.log("Découpe au format carte vitale...");
    }

    finalizeCard() {
        console.log("Finalisation de la carte...");
    }

}

export default class CarteVitaleAdapter extends AbstractDocument {

    constructor(personne) {
        super(personne);

        this.cpam = new CarteVitaleCPAM();
    }

    recupererInformations() {
        this.cpam.fetchPatientData();
    }

    preparerEncres() {
        this.cpam.initializeInk();
    }

    verifierPapier() {
        this.cpam.verifySupport();
    }

    impression() {

        this.cpam.startPrint();

    }

    decouper() {
        this.cpam.cutCard();
    }

    operationSpecifique() {

        this.cpam.finalizeCard();

        console.log("Carte vitale terminée.");

    }

}