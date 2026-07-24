import AbstractDocument from "./AbstractDocument.js";

export default class Passeport extends AbstractDocument {

    constructor(personne) {
        super(personne);
    }

    decouper() {
        console.log("Découpe du passeport...");
    }

    operationSpecifique() {

        console.log("Assemblage des pages");

        console.log("Reliure...");

    }

}