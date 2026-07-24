import DocumentFactory from "./Factory/DocumentFactory.js";

const personne = {
    nom: "Ouzammad",
    prenom: "Mohamed",
    dateNaissance: "09/11/1999"
};

// Test de la carte d'identité
console.log("===== Carte Nationale d'Identité =====");

let document = DocumentFactory.create("cni", personne);

document.imprimer();

console.log("");


// Test du passeport
console.log("===== Passeport =====");

document = DocumentFactory.create("passeport", personne);

document.imprimer();

console.log("");


// Test de la carte vitale
console.log("===== Carte Vitale =====");

document = DocumentFactory.create("vitale", personne);

document.imprimer();

console.log("Fin des tests.");