export default class AbstractDocument {

    constructor(personne) {
        this.personne = personne;
    }

    imprimer() {

        // Les étapes sont toujours les mêmes
        this.recupererInformations();

        this.preparerEncres();

        this.verifierPapier();

        this.impression();

        this.decouper();

        this.operationSpecifique();

        this.fin();
    }

    recupererInformations() {
        console.log("Récupération des informations de " + this.personne.nom + "...");
    }

    preparerEncres() {
        console.log("Préparation des encres...");
    }

    verifierPapier() {
        console.log("Vérification du papier");
    }

    impression() {
        console.log("Impression en cours...");
    }

    decouper() {
        throw new Error("La méthode decouper doit être redéfinie");
    }

    operationSpecifique() {
        // Certaines classes n'ont rien à faire ici
    }

    fin() {
        console.log("------------------");
        console.log("Impression terminée");
        console.log("");
    }

}