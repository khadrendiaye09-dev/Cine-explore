# Spécification — CinéExplore

## 1. Objectif

Créer une application web simple qui permet de parcourir une sélection de films de démonstration, de rechercher un titre, de filtrer par genre et de consulter une fiche détaillée.

## 2. Utilisateurs visés

- Élèves et personnes qui découvrent le développement web.
- Visiteurs souhaitant explorer rapidement une petite collection de films.
- Évaluateurs du projet scolaire.

## 3. Fonctionnalités

1. Afficher les films sous forme de cartes.
2. Présenter le titre, l'année, le genre et un résumé pour chaque film.
3. Rechercher un film à partir d'une partie de son titre, sans tenir compte des majuscules.
4. Filtrer la collection par genre.
5. Ouvrir une boîte de dialogue avec les détails d'un film.
6. Afficher un message explicite lorsqu'aucun film ne correspond.
7. Adapter la grille aux écrans d'ordinateur, de tablette et de téléphone.
8. Utiliser des données intégrées et ne dépendre d'aucune API externe.

## 4. Exigences techniques

- HTML5, CSS3 et JavaScript natif.
- Aucun backend ni framework requis.
- Fichiers séparés : `index.html`, `style.css`, `script.js`.
- Fonctionnement dans un navigateur moderne.
- Publication compatible avec GitHub Pages.
- Aucun secret, jeton ou clé API dans le code.
- Les données sont fictives et clairement identifiées comme données de démonstration.

## 5. Critères de réussite

- La page s'ouvre sans étape de compilation.
- Les huit films de démonstration apparaissent au chargement.
- La recherche actualise les résultats à chaque saisie.
- Le filtre affiche uniquement les films du genre choisi.
- Un clic ou une activation au clavier sur une carte ouvre les détails.
- La fermeture de la fiche fonctionne.
- Une recherche sans résultat affiche le message prévu.
- L'affichage reste lisible sur mobile et ordinateur.
- Les instructions de lancement et de déploiement figurent dans le README.
