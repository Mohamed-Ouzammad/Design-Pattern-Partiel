import CarteIdentite from "../Document/CarteIdentite.js";
import Passeport from "../Document/Passeport.js";
import CarteVitaleAdapter from "../Adapter/CarteVitaleAdapter.js";

export default class DocumentFactory {

    static create(type, personne) {

        let document;

        if (type === "cni") {
            document = new CarteIdentite(personne);
        }

        if (type === "passeport") {
            document = new Passeport(personne);
        }

        if (type === "vitale") {
            document = new CarteVitaleAdapter(personne);
        }

        if (!document) {
            throw new Error("Document inconnu");
        }

        return document;

    }

}