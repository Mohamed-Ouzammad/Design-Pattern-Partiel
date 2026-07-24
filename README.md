# Système d'impression de documents officiels

## Présentation du projet

Ce projet a pour objectif de simuler un système d'impression de documents administratifs sécurisés :
- Carte Nationale d'Identité
- Passeport
- Carte Vitale

L'idée était de mettre en pratique plusieurs Design Patterns vus en cours afin d'avoir une structure de code plus propre et plus facile à faire évoluer.

Le projet est développé en JavaScript avec Node.js.

---

## Design Patterns utilisés

### Template Method

Le principe du Template Method est de définir une suite d'étapes communes dans une classe mère, puis de laisser les classes enfants modifier uniquement les parties dont elles ont besoin.

Dans ce projet, toutes les impressions suivent le même déroulement :
1. Récupération des informations
2. Préparation des encres
3. Vérification du support
4. Impression
5. Découpe
6. Opération spécifique selon le document
7. Fin de l'impression

La logique commune est regroupée dans `AbstractDocument.js`. Par exemple, une carte d'identité et un passeport utilisent le même processus général, mais n'ont pas forcément la même découpe ou la même finition.

---

### Factory

La Factory est utilisée pour gérer la création des différents documents.

Au lieu de créer directement les objets dans le fichier principal, on passe par `DocumentFactory.js` qui se charge de retourner le bon objet selon le type demandé :

```javascript
DocumentFactory.create("cni", personne);
DocumentFactory.create("passeport", personne);
DocumentFactory.create("vitale", personne);
```

Si demain on ajoute un nouveau type de document, on crée juste une nouvelle classe et on ajoute une ligne dans la factory — le reste du code ne change pas.

---

### Adapter

La carte vitale est gérée par un système externe (CPAM) qui n'utilise pas les mêmes méthodes que notre système interne. On ne peut pas modifier ce code externe.

Système interne :
```javascript
recupererInformations()
preparerEncres()
verifierPapier()
```

Système CPAM :
```javascript
fetchPatientData()
initializeInk()
verifySupport()
```

`CarteVitaleAdapter.js` fait la traduction entre les deux — il étend `AbstractDocument` et appelle les méthodes CPAM en interne. Le reste du système ne voit aucune différence.

---

## Structure du projet

Design-Pattern-Partiel/
Document/
AbstractDocument.js → processus commun (Template Method)
CarteIdentite.js → étapes spécifiques CNI
Passeport.js → étapes spécifiques passeport
Adapter/
CarteVitaleAdapter.js → intégration système CPAM (Adapter)
Factory/
DocumentFactory.js → création des documents (Factory)
index.js → démonstration
package.json

---

## Comment lancer le projet

```bash
node index.js
```